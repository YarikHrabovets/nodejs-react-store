const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Cart } = require('../models/models')
const ApiError = require('../errors/ApiError')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body
        
        if (!email || !password) {
            return next(ApiError.badRequest('Unvalid email or password'))
        }

        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User already exist'))
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({email, role, password: hashPassword})
        await Cart.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)

        return res.json({token})
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('User has not been finded'))
        }
        const comparePassword =  bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Incorrect password'))
        }
        const token = generateJwt(user.id, user.email, user.role)

        return res.json({token})
    }

    async auth(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async getUserEmail(req, res, next) {
        try {
            const { id } = req.params
            const user = await User.findOne({where: {id}})
            return res.json(user?.email)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
}

module.exports = new UserController()
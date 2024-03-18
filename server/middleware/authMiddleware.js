const jwt = require('jsonwebtoken')
const ApiError = require('../errors/ApiError')

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') next()

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return next(ApiError.notLogIn('User is not authorised'))
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        return next(ApiError.notLogIn('User is not authorised'))
    }
}
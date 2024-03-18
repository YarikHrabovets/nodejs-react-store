const uuid = require('uuid') 
const path = require('path')
const { Product } = require('../models/models')
const ApiError = require('../errors/ApiError')

class ProductController {
    async getAll(req, res) {
        let { brandId, typeId, page, limit } = req.query
        page = page || 1
        limit = limit || 9

        let offset = page * limit - limit
        let products = null

        if (!brandId && !typeId) {
            products = await Product.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            products = await Product.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            products = await Product.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            products = await Product.findAndCountAll({where: {brandId, typeId}, limit, offset})
        }

        return res.json(products)

    }
 
    async getOne(req, res) {
        const { id } = req.params
        const product = await Product.findOne({where: {id}})
        
        return res.json(product)
    }

    async getLast(req, res) {
        const product = await Product.findAll({limit: 1, order: [['createdAt', 'DESC']]})

        return res.json(product[0])
    }

    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, description } = req.body
            const { img } = req.files

            const fileName = uuid.v4() + '.jpg'
            const product = await Product.create({name, price, brandId, typeId, description, img: fileName})
            img.mv(path.resolve(__dirname, '..', 'media', fileName))

            return res.json(product)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ProductController()
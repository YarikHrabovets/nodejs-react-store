const { Cart, CartProduct } = require('../models/models')
const ApiError = require('../errors/ApiError')

class CartController {
    async get(req, res, next) {
        try {
            const { userId } = req.params
            const cart = await Cart.findOne({where: {userId}})
            const products = await CartProduct.findAll({where: {cartId: cart.id}})

            return res.json(products)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async add(req, res, next) {
        try {
            const { userId, productId, quantity } = req.body
            const cart = await Cart.findOne({where: {userId}})
            const product = await CartProduct.create({productId, quantity, cartId: cart.id})

            return res.json(product)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async del(req, res, next) {
        try {
            const { cartId, productId } = req.body
            await CartProduct.destroy({where: {productId, cartId}})

            return res.json().status(200)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { cartId, productId, quantity } = req.body
            await CartProduct.update({quantity}, {where: {cartId, productId}})

            return res.json().status(200)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
}

module.exports = new CartController()
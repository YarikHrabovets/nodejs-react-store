const { Comments } = require('../models/models')
const ApiError = require('../errors/ApiError')

class CommentController {
    async get(req, res, next) {
        try {
            const { productId } = req.params
            const comments = await Comments.findAll({where: {productId}})
            return res.json(comments)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async add(req, res, next) {
        try {
            const { userId, productId, comment } = req.body
            const createdComment = await Comments.create({userId, productId, comment})
            return res.json(createdComment)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
}

module.exports = new CommentController()
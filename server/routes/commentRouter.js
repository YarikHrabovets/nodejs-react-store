const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/get/:productId', commentController.get)
router.post('/add', authMiddleware, commentController.add)

module.exports = router
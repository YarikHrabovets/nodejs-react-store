const Router = require('express')
const router = new Router()
const cartController = require('../controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/get/:userId', authMiddleware, cartController.get)
router.post('/add', authMiddleware, cartController.add)
router.post('/del', authMiddleware, cartController.del)
router.post('/update', authMiddleware, cartController.update)

module.exports = router
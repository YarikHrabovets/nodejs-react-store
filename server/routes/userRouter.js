const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/get-email/:id', userController.getUserEmail)
router.get('/auth', authMiddleware, userController.auth)
router.post('/registration', userController.registration)
router.post('/login', userController.login)

module.exports = router
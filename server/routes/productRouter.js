const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.get('/', productController.getAll)
router.get('/id/:id', productController.getOne)
router.get('/last', productController.getLast)
router.post('/', checkRoleMiddleware('ADMIN'),  productController.create)

module.exports = router
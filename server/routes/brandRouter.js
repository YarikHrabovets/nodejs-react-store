const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.get('/', brandController.getAll)
router.get('/:id', brandController.getOne)
router.post('/', checkRoleMiddleware('ADMIN'), brandController.create)

module.exports = router
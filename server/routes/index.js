const Router = require('express')
const router = new Router()
const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const userRouter  = require('./userRouter')
const cartRouter = require('./cartRouter')
const commentRouter = require('./commentRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)
router.use('/cart', cartRouter)
router.use('/comment', commentRouter)

module.exports = router
const Router = require('express')
const router = new Router()
const homeRouter = require('./routes/homeRouter')

router.use(homeRouter)

module.exports = router
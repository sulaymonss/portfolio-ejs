const Router = require('express')
const router = new Router()

router.get('/', require('../controllers/homeController'))

module.exports = router
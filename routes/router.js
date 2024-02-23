const { Router } = require('express')
const translationRoutes = require('./translationRoutes')

const router = Router()

router.use(translationRoutes)

module.exports = router;
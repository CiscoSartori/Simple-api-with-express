const { Router } = require ('express')
const freguesController = require('../controller/freguesController')

const router = Router()

router.get('/fregues', freguesController.pegaFregues)
router.get('/fregues/novo', freguesController.criaFregues)
// router.get('/fregues/:id', ClienteController.pegaUmCliente)

module.exports = router

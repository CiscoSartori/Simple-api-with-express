const { Router } = require ('express')
const ClienteController = require('../controller/ClientesController')

const router = Router()

router.get('/clientes', ClienteController.pegaClientes)
router.get('/clientes/:id', ClienteController.pegaUmCliente)

module.exports = router

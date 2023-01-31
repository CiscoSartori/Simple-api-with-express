const { Router } = require ('express')
const ClienteController = require('../controller/ClientesControler')

const router = Router()

router.get('/clientes', ClienteController.pegaClientes)

module.exports = router

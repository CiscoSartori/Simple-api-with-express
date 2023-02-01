const bodyParser = require('body-parser')
const clientes = require('./clienteRouter')
const menu = require('./menuRouter')
const fregues = require('./freguesRouter')
module.exports = app => {
    app.use(bodyParser.json(),
    clientes,
    menu,
    fregues
    )
}
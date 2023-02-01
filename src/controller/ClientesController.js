const database = require('../models')

class ClienteController{
    static async pegaClientes(req, res){
        try{
            const todosClientes = await database.clientes.findAll()
            return res.status(200).json(todosClientes)
        }catch(erros){
            return res.status(500).json(eerror.message)
        }
        
    }
    static async pegaUmCliente (req, res) {
        const { id } = req.params
        try {
            const umCliente = await database.cliente.findOne( {
                 where: { id:String(id)}
                })
                return res.status(200).json(umCliente)
        }
        catch (error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClienteController
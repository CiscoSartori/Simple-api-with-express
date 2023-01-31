const database = require('../models')

class ClienteController{
    static async pegaClientes(req, res){
        try{
            const todosClientes = await database.clientes.findall()
            return res.status(200).json(todosClientes)
        }catch (erros){
            return res.status(500).json(error.message)
        }
        
    }
}
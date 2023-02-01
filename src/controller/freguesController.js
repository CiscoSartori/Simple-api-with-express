const database = require('../models')

class freguesController{
    static async pegaFregues(req, res){
        try{
            console.log("minha pika e grande")
            const todosFregueses = await database.fregues.findAll()
            console.log("minha pika e pequena")
            return res.status(200).json(todosFregueses)
        }catch(error){
            return res.status(500).json(error.massage)
        }
    }
    static async criaFregues(req, res){
        try{
            const novoFregues = await User.create({ nome: "Janaina", tamanhoPe:true });
            return res.status(200).json(novoFregues)
            // console.log("Jane's auto-generated ID:", jane.id);
        }catch(error){
            return res.status(500).json(error.massage)
        }
    }
}

module.exports = freguesController

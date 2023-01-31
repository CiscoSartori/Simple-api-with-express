// import express from "express";
// const routes = require('./routes')

// const app = express();
// routes(app)

// const Bikes = [
//   {id: 1, "titulo": "Senhor esteja comvosco"},
//   {id: 2, "titulo": "Ele esta no meio de nois"}
// ]


// app.get('/busca/:id', (req, res) => {
//   let index = buscaBike(req.params.id);
//   res.json(Bikes[index]);
// })

// app.get('/busca', (req, res) => {
//   res.status(200).send('Quero Cafe'+ res.json(Bikes))
// })

// app.post('/busca', (req, res) =>{
//   Bikes.push(req.body);
//   res.status(201).send('o duty e bilhonario')
// })

// app.put('/busca/:id', (req, res) => {
//   let index = buscaBike(req.params.id);
//   Bikes[index].titulo = req.body.titulo;
//   res.json(Bikes[index]);
// })

// app.delete('/busca/:id', (req, res) => {
//   let {id} = req.params;
//   let index = buscaBike(id);
//   Bikes.splice(index, 1);
//   res.send('bike foi de base');
// })
// function buscaBike(id) {
//   return Bikes.findIndex(Bikes => Bikes.id == id)
// }


// export default app
// module.exports = app
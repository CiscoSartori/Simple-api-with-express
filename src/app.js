import express from "express";

const app = express();

const livros = [
  {id: 1, "titulo": "Senhor dos Aneis"},
  {id: 2, "titulo": "O Hobbit"}
]

app.get('/', (req, res) => {
  res.status(200).send('Cursinho Pika');
}) 

app.get('/Busca', (req, res) => {
  res.status(200).send('Quero Cafe')
})




export default app
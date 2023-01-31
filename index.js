const express = require("express");
const routes = require('./src/routes')

const app = express();
// routes(app)

const port = 5000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
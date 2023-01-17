const express = require('express')
// const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// conexão com o banco de dados
db.connect()

// habilita server para receber dados no formato JSON
app.use(express.json())

//definindo as rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Server is listening on port ${port}...`))
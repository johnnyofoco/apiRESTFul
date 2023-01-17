const express = require("express");
const cors = require("cors");
// const path = require('path')

const db = require("./database/db");
const routes = require("./routes/routes");

const app = express();

// conexão com o banco de dados
db.connect();

// origens permitidas a consumir a API
const allowedOrigins = ["http://127.0.0.1:5501", "http://www.app.com.br"];

// habilta CORS (cors() torna a API pública, disponível a todos os dominios)
// app.use(cors())
app.use(
  cors({
    origin: function (origin, callback) {
      let allowed = true;

      //permitir acesso via mobile app (sem origem)
      if (!origin || origin === null) allowed = true;

      if (!allowedOrigins.includes(origin)) allowed = false;

      callback(null, allowed);
    },
  })
);

// habilita server para receber dados no formato JSON
app.use(express.json());

//definindo as rotas
app.use("/api", routes);

//executando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

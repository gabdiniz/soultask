require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// Configuração do App
const app = express();
app.use(express.json());

// Configuração do banco de daos
mongoose.connect(process.env.MONGODB_URL);

// Routes


// Escuta
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/");
})
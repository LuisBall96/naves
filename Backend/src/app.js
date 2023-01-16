//Conecto express y traigo las rutas para conectar
const express = require('express');
const rutas = require("./Rutas/index.js");

const app = express();





//Middleware, para poder leer request en body y convertirlo a JSON

app.use(express.json());
app.use(rutas)



module.exports = app;
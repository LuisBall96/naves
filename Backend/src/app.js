const express = require('express');
const rutas = require("./Rutas/index.js");

const app = express();






app.use(express.json());
app.use(rutas)

module.exports = app;
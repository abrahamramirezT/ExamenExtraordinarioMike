const express = require('express'); //para poder manejar el nodejs
require('dotenv').config();
const cors = require('cors'); //para manejar las peticciones y respuestas http
const { consulta1Router,consulta2Router,consulta3Router,consulta4Router,consulta5Router,consulta6Router,consulta7Router,consulta8Router,consulta9Router,consulta10Router } = require('../modules/controller/routes');


const app = express();
app.set("port", process.env.PORT || 3000);
app.use(cors({ origins: "*" }));
app.use(express.json({ limit: '50mb' }));
app.get('/', (req, res) => {
    res.send("BIENVENIDO AL EXTRAORDINARIO");

})


app.use('/api/consulta1', consulta1Router)
app.use('/api/consulta2', consulta2Router)
app.use('/api/consulta3', consulta3Router)
app.use('/api/consulta4', consulta4Router)
app.use('/api/consulta5', consulta5Router)
app.use('/api/consulta6', consulta6Router)
app.use('/api/consulta7', consulta7Router)
app.use('/api/consulta8', consulta8Router)
app.use('/api/consulta9', consulta9Router)
app.use('/api/consulta10',consulta10Router)
module.exports = { app };


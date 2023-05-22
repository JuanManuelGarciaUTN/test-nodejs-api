const express = require("express");
const process = require('process');
const Preguntados = require("./controllers/preguntados.js");


const app = express();
app.use(express.json());

app.get("/arte", Preguntados.obtenerPreguntasArte);
app.get("/deporte", Preguntados.obtenerPreguntasDeporte);
app.get("/geografia", Preguntados.obtenerPreguntasGeografia);
app.get("/historia", Preguntados.obtenerPreguntasHistoria);
app.get("/ciencia", Preguntados.obtenerPreguntasCiencia);
app.get("/entretenimiento", Preguntados.obtenerPreguntasEntretenimiento);

app.listen(process.env.PORT || 3000, () => {console.log("App ready <3");});
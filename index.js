const express = require("express");
const process = require('process');
const Preguntados = require("./controllers/preguntados.js");


const app = express();
app.use(express.json());

app.get("/arte", HelloWorldController.obtenerPreguntasArte);
app.get("/deporte", HelloWorldController.obtenerPreguntasDeporte);
app.get("/geografia", HelloWorldController.obtenerPreguntasGeografia);
app.get("/historia", HelloWorldController.obtenerPreguntasHistoria);
app.get("/ciencia", HelloWorldController.obtenerPreguntasCiencia);
app.get("/entretenimiento", HelloWorldController.obtenerPreguntasEntretenimiento);

app.listen(process.env.PORT || 3000, () => {console.log("App ready <3");});
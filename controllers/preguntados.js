const {express} = require("express");
const process = require('process');
const {readFile} = require("fs");
const {random} = require("./random.js");
const { geografia } = require("./geografia.js");

module.exports =    
{
    obtenerPreguntasArte: function (request, response) {
        const {arte} = require("./arte.js");
        const pregunta = arte[random(0, arte.length)];
        response.send(pregunta);
    },

    obtenerPreguntasGeografia: function (request, response) {
        const {geografia} = require("./geografia.js");
        const pregunta = geografia[random(0, geografia.length)];
        response.send(pregunta);
    },

    obtenerPreguntasDeporte: function (request, response) {
        const {deporte} = require("./deporte.js");
        for (let item of deporte){
            console.log(item.p,item.i1,item.i2,item.i3,item.r);
        }
        const pregunta = deporte[random(0, deporte.length)];
        response.send(pregunta);
    },

    obtenerPreguntasCiencia: function (request, response) {
        const {ciencia} = require("./ciencia.js");
        for (let item of ciencia){
            console.log(item.p,item.i1,item.i2,item.i3,item.r);
        }
        const pregunta = ciencia[random(0, ciencia.length)];
        response.send(pregunta);
    },

    obtenerPreguntasHistoria: function (request, response) {
        const {historia} = require("./historia.js");
        const pregunta = historia[random(0, historia.length)];
        response.send(pregunta);
    },

    obtenerPreguntasEntretenimiento: function (request, response) {
        const {entretenimiento} = require("./entretenimiento.js");
        for (let item of entretenimiento){
            console.log(item.p,item.i1,item.i2,item.i3,item.r);
        }
        const pregunta = entretenimiento[random(0, entretenimiento.length)];
        response.send(pregunta);
    }
}


const {express} = require("express");
const process = require('process');
const {readFile} = require("fs");

module.exports =    
{
    Saludar: function (request, response) {
        let playload = {status: 200,
                        text: "Hola " + request.params.usr + ". Como estas?"};
        response.send(playload);
    },

    obtenerPreguntasArte: function (request, response) {
        let playload = {status: 200,
                        text: "Hola obtenerPreguntasArte"};
        response.send(playload);
    },

    obtenerPreguntasGeografia: function (request, response) {
        let playload = {status: 200,
                text: "Hola obtenerPreguntasGeografia"};
        response.send(playload);
    },

    obtenerPreguntasDeporte: function (request, response) {
        let playload = {status: 200,
            text: "Hola obtenerPreguntasDeporte"};
        response.send(playload);
    },

    obtenerPreguntasCiencia: function (request, response) {
        let playload = {status: 200,
            text: "Hola obtenerPreguntasCiencia"};
        response.send(playload);
    },

    obtenerPreguntasHistoria: function (request, response) {
        let playload = {status: 200,
            text: "Hola obtenerPreguntasHistoria"};
        response.send(playload);
    },

    obtenerPreguntasEntretenimiento: function (request, response) {
        let playload = {status: 200,
            text: "Hola obtenerPreguntasEntretenimiento"};
        response.send(playload);
    }
}
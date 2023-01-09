const {express} = require("express");
const process = require('process');
const {readFile} = require("fs");

module.exports =    
{
    Saludar: function (request, response) {
        let playload = {status: 200,
                        text: "Hola " + request.params.usr + ". Como estas?"};
        response.send(playload);
    }
}

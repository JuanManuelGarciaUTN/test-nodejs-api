const {express} = require("express");
const process = require('process');
const {readFile} = require("fs");

module.exports =    
{
    Saludar: function (request, response) {
        readFile("./hello.txt", "utf-8", (error, okey) =>{
            if(error) {
                let text = {
                    title: "error",
                    mensage: "File not found here"
                }
                text = JSON.stringify(text);
                response.status(404).send(text);
            }

            text = JSON.stringify(okey);

            let envVars = process.env;
            console.log("fuck",process.env);
            console.log(process.env.LOVE);
            text = text + "\n" + envVars;

            response.send(text);
        })
    }
}

const {express} = require("express");
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
                envVars = process.env;
                text + "\n" + envVars;
                text = JSON.stringify(text);
                response.status(404).send(text);
            }

            text = JSON.stringify(okey);
            response.send(text);
        })
    }
}

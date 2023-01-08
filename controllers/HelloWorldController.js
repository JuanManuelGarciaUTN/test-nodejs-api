const {express} = require("express");
const process = require('process');
const {readFile} = require("fs");

module.exports =    
{
    Saludar: function (request, response) {
        readFile("./hello.txt", "utf-8", (error, content) =>{
            if(error) {
                let text = {
                    title: "error",
                    mensage: "File not found here"
                }
                text = JSON.stringify(text);
                response.status(404).send(text);
            }

            let playload = {status: 200,
                            text: content,
                            body: request.body};
            response.send(playload);
        })
    }
}

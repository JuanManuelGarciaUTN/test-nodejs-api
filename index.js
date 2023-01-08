const express = require("express");
const process = require('process');

const HelloWorldController = require("./controllers/HelloWorldController.js");

const app = express();

console.log(process.env);

app.get("/home", HelloWorldController.Saludar);

app.listen(process.env.PORT || 3000, () => {console.log("App ready <3");});

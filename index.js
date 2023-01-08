const express = require("express");

const HelloWorldController = require("./controller/HelloWorldController");

const app = express();

app.get("/home", HelloWorldController.Saludar);

app.listen(process.env.PORT || 3000, () => {console.log("App ready on http://localhost:3000");});

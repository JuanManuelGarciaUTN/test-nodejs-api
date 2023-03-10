const express = require("express");
const process = require('process');
const HelloWorldController = require("./controllers/HelloWorldController.js");
const sql = require("./database/MysqlConnection");

const app = express();
app.use(express.json());

app.get("/empleados/?", (req, res) => {
    sql.query("SELECT * FROM personal", (error, result, fields) => {
        if (error) {
            console.log(error);
        }
        else
        {
            res.send(result);
        }
   })
})

app.get("/productos/?", (req, res) => {
    sql.query("SELECT * FROM productos", (error, result, fields) => {
        if (error) {
            console.log(error);
        }
        else
        {
            res.send(result);
        }
   })
})

app.get("/home/:usr", HelloWorldController.Saludar);

app.listen(process.env.PORT || 3000, () => {console.log("App ready <3");});
const express = require("express");

const app = express();
const Port = 3500;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({"message":"servidor rodando !"});
});

app.listen( Port , ()=> {
    console.log(`Servidor Rodando http://localhost:${Port}/`)
});
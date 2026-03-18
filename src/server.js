import express from "express";
import db from "./databases/mysqlDb.js";

const app = express();
const Port = 3500;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({"message":"servidor rodando !"});
});
app.get("/users", async (req,res) => {
    try{
        const [results, fields] = await db.execute(
            'SELECT * FROM `users` '
        );
        console.log(results);
        console.log(fields);
        res.status(202).json(results);
    }catch (err){
        console.log(err);
        res.status(403).json({"message":err})
    }
});


app.listen( Port , ()=> {
    console.log(`Servidor Rodando http://localhost:${Port}/`)
});
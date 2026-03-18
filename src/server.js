import express from "express";
import mysql2 from "mysql2/promise";

const app = express();
const Port = 3500;
// const connetion = mysql2.createConnection({
//     host : "localhost",
//     user: "root",
//     port: 3306,
//     password : "22072006",
//     database: "apirest"
// })
const pool = mysql2.createPool({
    host : "localhost",
    user: "root",
    port: 3306,
    password : "22072006",
    database: "apirest"
})

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({"message":"servidor rodando !"});
});
app.get("/users", async (req,res) => {
    try{
        const [results, fields] = await pool.execute(
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
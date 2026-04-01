import express from "express";
import usersRoutes from "./view/UsersRoutes.js"
import municipiosRoutes from "./view/MunicipiosRoutes.js"

const app = express();
const Port = 3500;

app.use(express.json());

app.use(usersRoutes);
app.use(municipiosRoutes);

app.get("/", (req,res) => {
    res.status(200).json({"message":"servidor rodando !"});
});

app.listen( Port , ()=> {
    console.log(`Servidor Rodando http://localhost:${Port}/`)
    console.log('Para parar a aplicação precione crtl+C')
});
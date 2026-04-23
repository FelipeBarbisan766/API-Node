import express from "express";
import os from 'os';
import swRoutes from "./view/Routes.js"
import dotenv from "dotenv";

dotenv.config();

const Port = process.env.API_PORT || 3500;
const app = express();

app.use(express.json());

app.use(swRoutes)

const getLocalIp = () => {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            // Filtra para pegar IPv4 e que não seja o endereço de loopback (localhost)
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
};
app.get('/ip-servidor', (req, res) => {
    const networkInterfaces = app.networkInterfaces();
    let serverIp = '127.0.0.1'; // IP padrão (localhost)
    res.json({ ipServidor: serverIp });
});

app.get("/", (req,res) => {
    res.status(200).json({"message":"servidor rodando !"});
});

app.listen( Port , ()=> {
    const ipServidor = getLocalIp();
    // const porta = app.address().port;
    console.log(`Servidor ouvindo em: http://${ipServidor}:${Port}`);
    console.log(`Acesse também em: http://localhost:${Port}`);
    console.log(`CTRL+C para encerrar o servidor`);
}); 

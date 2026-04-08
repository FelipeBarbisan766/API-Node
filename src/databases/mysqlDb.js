import mysql2 from "mysql2/promise"; 
import dotenv from "dotenv";

dotenv.config();

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_NAME = process.env.DB_NAME || "mysql";

export const pool = mysql2.createPool({
    host : DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password : DB_PASSWORD,
    database: DB_NAME
});
export async function testConnection() {
    try {
        // Tenta obter uma conexão do pool
        const connection = await pool.getConnection();
        console.log('✅ Conexão estabelecida com sucesso!');

        // Libera a conexão de volta para o pool
        connection.release();
    } catch (error) {
        console.error('❌ Erro ao conectar ao banco de dados:', error.message);
    }
}       
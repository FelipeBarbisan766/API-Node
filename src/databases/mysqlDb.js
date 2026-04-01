import mysql2 from "mysql2/promise"; 
export const pool = mysql2.createPool({
    host : "localhost",
    user: "root",
    port: 3306,
    password : "",
    database: "apirest"
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
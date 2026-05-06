import {pool} from "../databases/mysqlDb.js";

const tableName = 'users'

export async function Get ()  {
    try{
        const [results, fields] = await pool.execute(
            `SELECT * FROM ${tableName} `
        );
        return {"message":"success","Data":results}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
};
export async function GetById (id)  {
    try{
        const [results, fields] = await pool.execute(
            `SELECT * FROM ${tableName} WHERE id = ? `,
            [id]
        );
        return {"message":"success","Data":results}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
};
export async function GetByEmail (email)  {
    try{
        const [results, fields] = await pool.execute(
            `SELECT * FROM ${tableName} WHERE email = ? `,
            [email]
        );
        return {"message":"success","Data":results}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
};

export async function Post( data ){
    try{
        const {name,email,password} = data;
        const [results, fields] = await pool.execute(
            `INSERT INTO ${tableName} (name, email, password) VALUES (?, ?, ?); `,
            [name,email,password]
        );
        return {"message":"success","Data":results}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
}
export async function Put(id,data){
    try{
        const {name,email,password} = data;
        const [results, fields] = await pool.execute(
            `UPDATE ${tableName} SET name = ?, email = ?, password = ? WHERE id = ?; `,
            [name,email,password,id]
        );
        return {"message":"success","Data":results}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
}
export async function Delete (id)  {
    try{
        const [results, fields] = await pool.execute(
            `DELETE FROM ${tableName} WHERE id = ? `,
            [id]
        );
        return {"message":"success","Data":"Usuario Deletado com Sucesso !"}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
};

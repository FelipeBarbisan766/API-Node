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
            `SELECT * FROM ${tableName} WHERE userEmail = ? `,
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
        const {userName,userEmail,userPassword} = data;
        const [results, fields] = await pool.execute(
            `INSERT INTO ${tableName} (userName, userEmail, userPassword) VALUES (?, ?, ?); `,
            [userName,userEmail,userPassword]
        );
        return {"message":"success","Data":results}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
}
export async function Put(id,data){
    try{
        const {userName,userEmail,userPassword} = data;
        const [results, fields] = await pool.execute(
            `UPDATE ${tableName} SET userName = ?, userEmail = ?, userPassword = ? WHERE id = ?; `,
            [userName,userEmail,userPassword,id]
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

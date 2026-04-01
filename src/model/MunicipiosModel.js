import {pool} from "../databases/mysqlDb.js";

const tableName = 'municipios'

export async function Get ()  {
    try{
        const [results, fields] = await pool.execute(
            ` SELECT * FROM ${tableName} `
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

export async function Post( data ){
    try{
        const {municipio,uf} = data;
        const [results, fields] = await pool.execute(
            `INSERT INTO ${tableName} (municipio, uf) VALUES (?, ?); `,
            [municipio,uf]
        );
        return {"message":"success","Data":results}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
}
export async function Put(id,data){
    try{
        const {municipio,uf} = data;
        const [results, fields] = await pool.execute(
            `UPDATE ${tableName} SET municipio = ?, uf = ? WHERE id = ?; `,
            [municipio,uf,id]
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

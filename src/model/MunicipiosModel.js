import {pool} from "../databases/mysqlDb.js";

export async function Get ()  {
    try{
        const [results, fields] = await pool.execute(
            'SELECT * FROM `municipios` '
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
            'SELECT * FROM `municipios` WHERE id = ? ',
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
            'INSERT INTO `municipios` (`municipio`, `uf`) VALUES (?, ?); ',
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
            'UPDATE `municipios` SET `municipio` = ?, `uf` = ? WHERE id = ?; ',
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
            'DELETE FROM `municipios` WHERE id = ? ',
            [id]
        );
        return {"message":"success","Data":"Usuario Deletado com Sucesso !"}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
};

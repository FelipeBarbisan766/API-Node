import {pool} from "../databases/mysqlDb.js";

export async function Get ()  {
    try{
        const [results, fields] = await pool.execute(
            'SELECT * FROM `users` '
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
            'SELECT * FROM `users` WHERE id = ? ',
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
        const {userName,userPassword} = data;
        const [results, fields] = await pool.execute(
            'INSERT INTO `users` (`userName`, `userPassword`) VALUES (?, ?); ',
            [userName,userPassword]
        );
        return {"message":"success","Data":results}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
}
export async function Put(id,data){
    try{
        const {userName,userPassword} = data;
        const [results, fields] = await pool.execute(
            'UPDATE `users` SET `userName` = ?, `userPassword` = ? WHERE id = ?; ',
            [userName,userPassword,id]
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
            'DELETE FROM `users` WHERE id = ? ',
            [id]
        );
        return {"message":"success","Data":"Usuario Deletado com Sucesso !"}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
};

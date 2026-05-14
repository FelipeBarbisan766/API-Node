import {pool} from "../databases/mysqlDb.js";
import * as slqUtils from "../utils/slqTexts.js"

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
        const payload = data;
        slqUtils.extract_Datas(payload);
        const sqlFields = slqUtils.generate_Fields();
        const sqlParms = slqUtils.generate_Parms();
        const sqlValuesParms = slqUtils.list_Values();

        const [results, fields] = await pool.execute(
            `INSERT INTO ${tableName} (${sqlFields}) VALUES (${sqlParms}); `,
            sqlValuesParms
        );
        return {"message":"success","Data":results}
        
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
}
export async function Put(id,data){
    try{
        const payload = data;
        slqUtils.extract_Datas(payload);
        const sqlSets = slqUtils.generate_Sets();
        const sqlValuesParms = slqUtils.list_Values();
        sqlValuesParms.push(id);
        
        const [results, fields] = await pool.execute(
            `UPDATE ${tableName} SET ${sqlSets} WHERE id = ?; `,
            sqlValuesParms
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

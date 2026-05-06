export let sqlFields = [];
export let sqlValues = [];

export function extract_Datas(payload){
    sqlFields = [];
    sqlValues = [];
    for( let key in payload){
        if(payload.hasOwnProperty(key)){
            sqlFields.push(key);
            sqlFields.push(' , ');
            sqlValues.push(payload[chaves]);
        }
    }
    sqlFields.pop();
}

export function list_Values(){
    return sqlValues;
}

export function generate_Fields(){
    let aux = '';
    for( var i = 0; i < sqlFields.length; i++){
        aux = aux + sqlFields[i];
    }
    return aux;
}

export function generate_Parms(){
    let aux = '';
    for( var i = 0; i < sqlFields.length; i++){
        let key = sqlFields[i].replace(/\s+/g, '');
        if(key == ','){
            aux = aux + sqlFields[i];
        }else {
            aux = aux + '?';
        }
    return aux;
    }
}

export function generate_Sets(){
    let aux = '';
    for( var i = 0; i < sqlFields.length; i++){
        let key = sqlFields[i].replace(/\s+/g, '');
        if(key == ','){
            aux = aux + sqlFields[i];
        }else {
            aux = aux + sqlFields[i]+' = ?';
        }
    return aux;
    }
}
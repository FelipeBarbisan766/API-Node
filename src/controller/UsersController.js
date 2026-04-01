import * as myModel from "../model/UsersModel.js" ;

export async function Get(req,res){
    try{
        const response = await myModel.Get();
        if(response.message.toLowerCase == "success".toLowerCase)
            res.status(202).json(response);
        else
            res.status(400).json(response);
    }catch (err){
        console.log(err);
        return {"message":"error","Error":err}
    }
}
export async function GetById(req,res){
    try{
        const id = req.params.id;
        const response = await myModel.GetById(id);
        if(response.message.toLowerCase == "success".toLowerCase)
            res.status(202).json(response);
        else
            res.status(400).json(response);
    }catch (err){
        console.log(err);
        res.status(403).json({"message":"error","Error":err});
    }
}
export async function Post(req,res){
    try{
        const databody = req.body;
        if(!databody)
            res.status(400).json({"message":"error","Error":"Body Empy"});
        const response = await myModel.Post(databody);
        if(response.message.toLowerCase == "success".toLowerCase)
            res.status(201).json(response);
        else
            res.status(400).json(response);
    }catch (err){
        console.log(err);
        res.status(403).json({"message":"error","Error":err});
    }
}
export async function Put(req,res){
    try{
        const id = req.params.id;
        const databody = req.body;
        if(!databody || !id)
            res.status(400).json({"message":"error","Error":"Some thing is Empy"});
        const response = await myModel.Put(id,databody);
        if(response.message.toLowerCase == "success".toLowerCase)
            res.status(201).json(response);
        else
            res.status(400).json(response);
    }catch (err){
        console.log(err);
        res.status(403).json({"message":"error","Error":err});
    }
}
export async function Delete(req,res){
    try{
        const id = req.params.id;
        const response = await myModel.Delete(id);
        if(response.message.toLowerCase == "success".toLowerCase)
            res.status(202).json(response);
        else
            res.status(400).json(response);
    }catch (err){
        console.log(err);
        res.status(403).json({"message":"error","Error":err});
    }
}

// module.exports = UserController;
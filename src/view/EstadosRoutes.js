import { Router } from "express";
import * as myController from "../controller/EstadosController.js"

const endPoint = "/estados";

const router = Router();

router.get(`${endPoint}`,(req,res)=>{myController.Get(req,res) });

router.get(`${endPoint}/:id`,(req,res)=>{myController.GetById(req,res)});

router.post(`${endPoint}`,(req,res)=>{myController.Post(req,res) })

router.put(`${endPoint}/:id`,(req,res)=>{myController.Put(req,res)});

router.delete(`${endPoint}/:id`,(req,res)=>{myController.Delete(req,res)});

export default router;
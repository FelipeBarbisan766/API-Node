import { Router } from "express";
import * as myController from "../controller/UsersController.js"

const endPoint = "/users";

const router = Router();

router.get(`${endPoint}`,(req,res)=>{myController.Get(req,res) });

router.get(`${endPoint}/:id`,(req,res)=>{myController.GetById(req,res)});

router.delete(`${endPoint}/:id`,(req,res)=>{myController.Delete(req,res)});

export default router;
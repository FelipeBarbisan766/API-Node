import { Router } from "express";
import * as myController from "../controller/authController.js";

const endPoint = "/auth";

const router = Router();

router.post(`${endPoint}/register`,(req,res)=>{myController.register(req,res) })
router.post(`${endPoint}/login`,(req,res)=>{myController.login(req,res) })
router.post(`${endPoint}/logout`,(req,res)=>{myController.logout(req,res) })

export default router;
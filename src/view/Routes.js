import { Router } from "express";
import usersRoutes from "./UsersRoutes.js"
import municipiosRoutes from "./MunicipiosRoutes.js"
import estadosRoutes from "./EstadosRoutes.js"
import authRoutes  from "./AuthRoutes.js"

const swRoutes = Router();

swRoutes.use(usersRoutes);
swRoutes.use(municipiosRoutes);
swRoutes.use(estadosRoutes);
swRoutes.use(authRoutes);
export default swRoutes;
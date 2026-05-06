import { Router } from "express";
import usersRoutes from "./UsersRoutes.js"
import municipiosRoutes from "./MunicipiosRoutes.js"
import estadosRoutes from "./EstadosRoutes.js"
import authRoutes from "./AuthRoutes.js"

const swRoutes = Router();

swRoutes.use(authRoutes);

swRoutes.use(usersRoutes);
swRoutes.use(municipiosRoutes);
swRoutes.use(estadosRoutes);

export default swRoutes;
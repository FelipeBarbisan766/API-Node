import { Router } from "express";
import usersRoutes from "./UsersRoutes.js"
import municipiosRoutes from "./MunicipiosRoutes.js"

const swRoutes = Router();

swRoutes.use(usersRoutes);
swRoutes.use(municipiosRoutes);

export default swRoutes;
import { Router } from "express";
import * as Controller from "../controller/carrera"
const router = new Router();

router.get("/carrera", Controller.getAll);

export default router;
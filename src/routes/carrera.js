import { Router } from "express";
import * as Controller from "../controller/carrera"
const router = new Router();

router.get("/carreras", Controller.getAll);
router.post("/carreras", Controller.create);
router.put("/carreras/:id", Controller.update);
router.delete("/carreras/:id", Controller.deleteC);

export default router;
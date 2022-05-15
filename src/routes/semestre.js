import { Router } from "express";
import * as Controller from "../controller/semestre";

const router = new Router();

router.get("/semestres/cantidad", Controller.cantidad);
router.get("/semestres", Controller.getAll);
router.post("/semestres", Controller.create);
router.put("/semestres/:id", Controller.update);
router.delete("/semestres/:id", Controller.deleteS);

export default router;
import { Router } from "express";
import * as Controller from "../controller/materia";

const router = new Router();

router.get("/materias/:id", Controller.byCarrera);
router.get("/materias/dif/:id", Controller.byDifCarrera);
router.get("/materias", Controller.getAll);
router.post("/materias", Controller.create);
router.put("/materias/:id", Controller.update);
router.delete("/materias/:id", Controller.deleteM);

export default router;
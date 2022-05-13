import { Router } from "express";
import * as Controller from "../controller/materia";

const router = new Router();

router.get("/materia/:id", Controller.deUnaCarrera);
router.get("/materia/dif/:id", Controller.DiferenteCarrera);

export default router;
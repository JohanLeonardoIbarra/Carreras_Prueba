import { Router } from "express";
import * as Controller from "../controller/semestre";

const router = new Router();

router.get("/semestre/:id", Controller.CantidadSemestres);

export default router;
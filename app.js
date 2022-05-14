import "module-alias/register";
import "dotenv/config";

import Express from "express";
import CarreraRouter from "./src/routes/carrera";
import MateriaRouter from "./src/routes/materia";
import SemestreRouter from "./src/routes/semestre";

const app = new Express();

//Settings

app.set("port", process.env.PORT || 5000);

//Middlewares
app.use(Express.json());

app.get("/", (req, res) => {
  res.send("hola");
});

//Routes

app.use("/api", CarreraRouter);
app.use("/api", MateriaRouter);
app.use("/api", SemestreRouter);

//Listen
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});

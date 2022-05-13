import Express from "express";
import CarreraRouter from "./src/routes/carrera";
import MateriaRouter from "./src/routes/materia";
import SemestreRouter from "./src/routes/semestre";

const app = new Express();

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
app.listen(3000, () => {
  console.log("server on port", 3000);
});

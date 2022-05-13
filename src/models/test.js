import Carrera from "./carrera";
import Semestre from "./semestre";
import Materia from "./materias";

const crear = async () => {
  await Carrera.sync({ force: true });
  await Semestre.sync({ force: true });
  await Materia.sync({ force: true });

  await Carrera.create({
    nombre: "CarreraUno",
  });
  await Carrera.create({
    nombre: "CarreraDos",
  });
  await Semestre.create({
    numero: 1,
    carrera_id: 1,
  });
  await Semestre.create({
    numero: 2,
    carrera_id: 1,
  });
  await Semestre.create({
    numero: 3,
    carrera_id: 1,
  });
  await Semestre.create({
    numero: 4,
    carrera_id: 1,
  });
  await Materia.create({
    nombre: "materiaUno",
    semestre_id: 3,
  });
  await Materia.create({
    nombre: "materiaDos",
    semestre_id: 3,
  });
};

crear();

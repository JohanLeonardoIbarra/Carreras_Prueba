import Materia from "@Models/materia";

export const create = async (req, res) => {
  try {
    const { nombre, semestre } = req.body;
    const materia = await Materia.create({ nombre: nombre, semestre_id: semestre });
    res.status(200).json(materia);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
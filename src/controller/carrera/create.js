import Carrera from "@Models/carrera";

export const create = async (req, res) => {
  try {
    const { nombre } = req.body;
    const carrera = await Carrera.create({ nombre: nombre });
    res.status(200).json(carrera);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

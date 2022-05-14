import Carrera from "@Models/carrera.js";

export const getAll = async (req, res) => {
  try {
    const carreras = await Carrera.findAll();
    res.status(200).json(carreras);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

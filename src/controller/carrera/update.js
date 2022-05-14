import Carrera from "@Models/carrera";

export const update = async (req, res) => {
  try {
    const { nombre } = req.body;
    const call = await Carrera.findOne({ where: { id: req.params.id } });
    await call.update({ nombre: nombre });
    await call.save();
  } catch (err) {
    console.error(err);
    res.send(500);
  }
};

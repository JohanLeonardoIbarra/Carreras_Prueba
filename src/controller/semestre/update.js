import Semestre from "@Models/semestre";

export const update = async (req, res) => {
  try {
    const { numero, carrera } = req.body;
    const call = await Semestre.findOne({ where: { id: req.params.id } });
    await call.update({ numero: numero, carrera_id: carrera });
    await call.save();
    res.status(200).json("Semestre actualizado");
  } catch (err) {
    console.error(err);
    res.send(500);
  }
};

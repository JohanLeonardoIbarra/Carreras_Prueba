import Materia from "@Models/materia";

export const update = async (req, res) => {
  try {
    const { nombre, semestre } = req.body;
    const call = await Materia.findOne({ where: { id: req.params.id } });
    await call.update({ nombre: nombre, semestre_id: semestre});
    await call.save();
    res.status(200).json("Materia actualizada");
  } catch (err) {
    console.error(err);
    res.send(500);
  }
};

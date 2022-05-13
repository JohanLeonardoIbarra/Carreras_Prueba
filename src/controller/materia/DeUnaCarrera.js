import connection from "../../db/connection";

import { QueryTypes } from "sequelize";

export const deUnaCarrera = async (req, res) => {
  try {
    const carreraId = req.params.id;
    const materias = await connection.query(
      "Select Materia.id as id, Materia.nombre as materia, Carrera.nombre as carrera, Semestre.numero as semestre from Materia inner join Semestre on Materia.semestre_id = Semestre.id inner join Carrera on Carrera.id = Semestre.carrera_id where Carrera.id = ?",
      {
        replacements: [carreraId],
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).json(materias);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

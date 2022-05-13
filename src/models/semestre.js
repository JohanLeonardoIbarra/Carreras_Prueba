import connection from "../db/connection";
import Carrera from "./carrera";
import { Model, DataTypes } from "sequelize";

class Semestre extends Model {}
Semestre.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero: {
    type: DataTypes.INTEGER,
    nullable: false,
  },
  carrera_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Carrera,
      key: "id"
    },
  },
},
{
    sequelize: connection,
    modelName: "semestre",
    timestamps: false,
    freezeTableName: true
});

export default Semestre;

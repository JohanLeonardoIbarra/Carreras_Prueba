import connection from "../db/connection";
import { Model, DataTypes } from "sequelize";
import Semestre from "./semestre";

class Materia extends Model {}

Materia.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      nullable: false,
    },
    semestre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Semestre,
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    modelName: "materia",
    timestamps: false,
    freezeTableName: true
  }
);

export default Materia;

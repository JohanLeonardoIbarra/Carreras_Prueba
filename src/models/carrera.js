import connection from "@DB/connection";
import { Model, DataTypes } from "sequelize";

class Carrera extends Model {}

Carrera.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      nullable: false,
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: "carrera",
    timestamps: false,
    freezeTableName: true
  }
);

export default Carrera;

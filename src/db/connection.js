import Sequelize from "sequelize";
import "dotenv/config";

const connection = new Sequelize(process.env.DB_URI);

export default connection;

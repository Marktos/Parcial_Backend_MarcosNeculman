import { Sequelize, DataTypes, Op } from "sequelize";

const db = new Sequelize("parcial_backend_marcos_neculman", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

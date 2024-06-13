import { DataTypes } from "sequelize";
import db from "./db.js";

const Producto = db.define("Productos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allownull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allownull: false,
  },
});

export default Producto;

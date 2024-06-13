import Producto from "../db/productos.js";
import { Op } from "sequelize";

//Crear Producto
const crearProducto = async (producto) => {
  await Producto.create(producto);
  producto.save;
  return producto;
};

//BorrarProducto
const borrarProducto = async (id) => {
  await Producto.destroy({ where: { id } });
};
//filtrar producto
const buscarProducto = async (name, min, max, category) => {
  const whereClause = {};

  if (name) {
    whereClause.name = {
      [Op.like]: "%${name}%",
    };
  }

  if (category) {
    whereClause.category = category;
  }

  if (min && max) {
    whereClause.price = {
      [Op.between]: [parseFloat(min), parseFloat(max)],
    };
  } else if (min) {
    whereClause.price = {
      [Op.gte]: parseFloat(min),
    };
  } else if (max) {
    whereClause.price = {
      [Op.lte]: parseFloat(max),
    };
  }
  await Producto.findAll({
    where: whereClause,
  });
};

//Ordenar Producto
const ordenarProductos = async (criterio, cantidad) => {
  cantidad = parseInt(cantidad);
  const productos = await Producto.findAll({
    order: [["price", criterio]],
    limit: cantidad,
  });

  return productos;
};
export {
  crearProducto,
  // obtenerProductos,
  borrarProducto,
  buscarProducto,
  ordenarProductos,
};

import express from "express";
import {
  crearProducto,
  borrarProducto,
  buscarProducto,
  ordenarProductos,
} from "../models/productModel.js";
import Producto from "../db/productos.js";

//Crear Producto
const createProductFunction = async (req, res) => {
  try {
    await crearProducto(req.body);
    res.status(201).json({
      msj: "Producto creado correctamente",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Obtener Productos
const getAllProductsFunction = async (req, res) => {
  try {
    const products = await Producto.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductByIdFunction = async (req, res) => {
  try {
    const { id } = req.query;
    const products = await Producto.findOne({ id });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Borrar productos
const deleteProductFunction = async (req, res) => {
  const { id } = req.query;
  await borrarProducto(id);
  res.status(200).json({
    msj: "El producto fue borrado exitosamente",
  });
};

//filtrar
const searchProductFunction = async (req, res) => {
  const { name, min, max, category } = req.query;
  const productos = await buscarProducto(name, min, max, category);
  if (!productos.length == 0) {
    res.status(200).json({ msg: "Producto encontrado" });
  } else {
    res.status(404).json({ msg: "Producto no encontrado" });
  }
};
//Ordenar Producto

const showOrderFunction = async (req, res) => {
  const { criterio, cantidad } = req.query;

  const ordenado = await ordenarProductos(criterio, cantidad);
  res.status(200).json({ ordenado });
};
export {
  createProductFunction,
  deleteProductFunction,
  searchProductFunction,
  showOrderFunction,
  getAllProductsFunction,
  getProductByIdFunction,
};

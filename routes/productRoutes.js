import express from "express";
import {
  createProductFunction,
  getAllProductsFunction,
  searchProductFunction,
  deleteProductFunction,
  showOrderFunction,
  getProductByIdFunction,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/producto", createProductFunction);
router.get("/producto", getAllProductsFunction);
router.get("/producto/:id", getProductByIdFunction);
router.get("/producto/", searchProductFunction);
router.get("/producto/ordenados", showOrderFunction);
router.delete("/producto/:id", deleteProductFunction);

router.get("/");

export default router;

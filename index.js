import express from "express";
import routerProducts from "./routes/productRoutes.js";
import db from "./db/db.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerProducts);

try {
  db.authenticate();
  console.log("Conexion exitosa con la base de datos");
  db.sync({ force: true });
  console.log("La sincronizacion fue exitosa");
} catch (error) {
  console.log("La base de datos no fue conectada");
}
app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});

import express from "express";
import routerProducts from "./routes/products.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", routerProducts)
  
  app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
  });

import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productManager = new ProductManager("./productos.json")


app.get("/api/products", async (req, res) => {
    try {
      const products = await productManager.getProducts();
      const querys = req.query;
      if (querys.limit) {
        const arrayProductsSliced = products.slice(0, parseInt(querys.limit));
        res.json(arrayProductsSliced);
      } else {
        res.json(products);
      }
    } catch (error) {
      res.status(500).json({ error: "Error al leer el archivo" });
    }
  });
  
  app.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await productManager.getProductById(id);
      if (!product) {
        res.status(404).json({ error: "Producto no encontrado." });
      } else {
        res.json(product);
      }
    } catch (error) {
      res.status(500).json({ error: "Error al buscar el producto." });
    }
  });

  app.post("/api/products", async(req, res) => {
    res.send(await productManager.addProduct(req.body))
  })

  app.put("/api/products/:id", async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const product = await productManager.getProductById(id);
        if (!product) {
          res.status(404).json({ error: "Producto no encontrado." });
        } else {
            res.send(await productManager.updateProduct(id, req.body))
        }
      } catch (error) {
        res.status(500).json({ error: "Error al buscar el producto." });
      }
    
  })

  app.delete("/api/products/:id" , async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const product = await productManager.getProductById(id);
        if (!product) {
          res.status(404).json({ error: "Producto no encontrado." });
        } else {
            const response = await productManager.deleteProduct(id)
            res.status(response.code).send(response)
        }
      } catch (error) {
        res.status(500).json({ error: "Error al buscar el producto." });
      }
  })
  
  app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
  });

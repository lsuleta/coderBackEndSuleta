import { Router } from "express";
import ProductManager from "../ProductManager.js";

const router = Router();
const productManager = new ProductManager("./productos.json");

router.get("/", async (req, res) => {
    try {
        const products = await productManager.getProducts();
        const querys = req.query;
        if (querys.limit) {
            const arrayProductsSliced = products.slice(
                0,
                parseInt(querys.limit)
            );
            res.json(arrayProductsSliced);
        } else {
            res.json(products);
        }
    } catch (error) {
        res.status(500).json({ error: "Error al leer el archivo" });
    }
});

router.get("/:id", async (req, res) => {
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

router.post("/", async (req, res) => {
    res.send(await productManager.addProduct(req.body));
});

router.put("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const product = await productManager.getProductById(id);
        if (!product) {
            res.status(404).json({ error: "Producto no encontrado." });
        } else {
            res.send(await productManager.updateProduct(id, req.body));
        }
    } catch (error) {
        res.status(500).json({ error: "Error al buscar el producto." });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const product = await productManager.getProductById(id);
        if (!product) {
            res.status(404).json({ error: "Producto no encontrado." });
        } else {
            const response = await productManager.deleteProduct(id);
            res.status(response.code).send(response);
        }
    } catch (error) {
        res.status(500).json({ error: "Error al buscar el producto." });
    }
});

export default router;

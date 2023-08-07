import { Router } from "express";
import ProductManager from "../ProductManager";

const router = Router()
const productManager = new ProductManager("./productos.json")


export default router
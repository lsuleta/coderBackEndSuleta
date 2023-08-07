
import fs from "fs";

class ProductManager {
    constructor(path) {
        this.path = path;
        this.id = 1;
    }

    addProduct = async (product) => {
        const { title, description, price, thumbnail, code, stock, category } = product;

        const existingProduct = (await this.getProducts()).find(
            (product) => product.code === code
        );
        if (existingProduct) {
            throw new Error("el codigo ya esta en uso");
        }

        const newProduct = {
            id: this.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            category,
            status: true,
        };

        this.id++;

        const listProducts = await this.getProducts();
        listProducts.push(newProduct);

        try {
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(listProducts, null, 2)
            );
            console.log("producto agregado", newProduct);
        } catch (e) {
            throw new Error("no se pudo escribir el archivo", e);
        }
    };

    getProducts = async () => {
        try {
            if (!fs.existsSync(this.path)) {
                fs.writeFileSync(this.path, "[]");
            }
            const data = await fs.promises.readFile(this.path, "utf-8");

            const dataObj = JSON.parse(data);

            return dataObj;
        } catch (e) {
            throw new Error("no se pudo leer el archivo", e);
        }
    };

    getProductById = async (id) => {
        try {
            const products = await this.getProducts();
            const product = products.find((product) => product.id === id);
            if (!product) {
                throw new Error("producto no encontrado");
            }
            return product;
        } catch (e) {
            throw new Error("error al intentar obtener el producto");
        }
    };

    updateProduct = async (id, updatedFields) => {
        const productToUpdate = await this.getProductById(id);

        if (!productToUpdate) {
            throw new Error(
                "no se encontro ningon producto con el ID especificado"
            );
        }

        const products = await this.getProducts();
        const productIndex = products.findIndex((p) => p.id === id);

        const updatedProduct = {
            ...productToUpdate,
            ...updatedFields,
            id: productToUpdate.id,
        };

        products[productIndex] = updatedProduct;

        try {
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(products, null, 2)
            );
            console.log("producto actualizado:", updatedProduct);
            return updatedProduct;
        } catch (e) {
            throw new Error("error al intentar actualizar el producto");
        }
    };

    deleteProduct = async (id) => {
        const productToDelete = await this.getProductById(id);

        if (!productToDelete) {
            throw new Error(
                "no se encontro ningun producto con el ID especificado"
            );
        }

        let products = await this.getProducts();
        products = products.filter((product) => product.id !== id);

        try {
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(products, null, 2)
            );
            console.log("producto eliminado:", productToDelete);
            return productToDelete;
        } catch (e) {
            throw new Error("error al intentar eliminar el producto");
        }
    };
}

export default ProductManager;

// const filePath = "./productos.json";
// const productManager = new ProductManager(filePath);

// productManager
//     .deleteProduct(9)
//     .then(console.log("borrado con exito"))
//     .catch((e) => console.log("error", e));

// productManager
//     .getProducts()
//     .then((products) => console.log(products))
//     .catch((error) => console.error("Error al obtener los productos:", error));

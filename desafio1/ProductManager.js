class ProductManager {
  constructor() {
    this.products = [];
    this.id = 1;
  }

  addProduct(product) {
    const { title, description, price, thumbnail, code, stock } = product;

    const existingProduct = this.products.find(
      (product) => product.code === code
    );

    const newProduct = {
      id: this.id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.id++;

    if (existingProduct) {
      throw new Error("codigo en uso");
    } else {
      this.products.push(newProduct);
      return newProduct;
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error("not found");
    } else {
      return product;
    }
  }
}

const pm = new ProductManager();
console.log("primer get products");
console.log(pm.getProducts());
console.log("primera intento de add");
const newProduct = {
  id: this.id,
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};

const newProduct2 = {
  id: this.id,
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};

pm.addProduct(newProduct);
console.log("segundo get products");
console.log(pm.getProducts());
console.log("segundo intento de add");
pm.addProduct(newProduct2);
console.log("verificamos que no agrege el duplicado");
console.log(pm.getProducts());
console.log("primera busqueda por id");
console.log(pm.getProductById(1));
console.log("segunda busqueda por id");
console.log(pm.getProductById(3));

class ProductManager {
  #Id;
  constructor() {
    this.products = [];
    this.#Id = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const existingProduct = this.products.find(
      (product) => product.code === code
    );

    const newProduct = {
      id: this.#Id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.#Id++;

    if (existingProduct) {
      console.log("Codigo en uso");
    } else {
      this.products.push(newProduct);
      return newProduct;
    }
  }

  getProducts() {
    return console.log(this.products);
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.log("Not found");
    } else {
      return console.log(product);
    }
  }
}

const pm = new ProductManager();
console.log("primer get products")
pm.getProducts();
console.log("primera intento de add")
pm.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
console.log("segundo get products")
pm.getProducts();
console.log("segundo intento de add")
pm.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
console.log("verificamos que no agrege el duplicado")
pm.getProducts();
console.log("primera busqueda por id")
pm.getProductById(1);
console.log("segunda busqueda por id")
pm.getProductById(3);

import { db } from "./initFirebase";

class Database {
  constructor() {
    this.db = db;
  }

  async getProducts() {
    let productsArray = [];
    const products = await this.db.collection("products").get();
    products.forEach((doc) => {
      productsArray.push({ id: doc.id, data: doc.data() });
    });
    return productsArray;
  }
  async getCategories() {
    let categoriesArray = [];
    const categories = await this.db.collection("categories").get();
    categories.forEach((doc) => {
      categoriesArray.push({ id: doc.id, data: doc.data() });
    });
    return categoriesArray;
  }
}

export default new Database();

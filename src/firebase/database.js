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
  async addCategory(newCategory) {
    if (!newCategory.parentId.length) {
      delete newCategory.parentId;
    }
    await this.db.collection("categories").add(newCategory);
  }
  async deleteCategory(categoryId) {
    await this.db.collection("categories").doc(categoryId).delete();
  }
  async updateCategory({ categoryId, parentId, name }) {
    const updatedCategory = { name, parentId };
    if (!updatedCategory.parentId.length) {
      delete updatedCategory.parentId;
    }
    await this.db
      .collection("categories")
      .doc(categoryId)
      .update(updatedCategory);
  }
}

export default new Database();

import database from "../firebase/database";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const getProducts = () => {
  return async function (dispatch) {
    const productsArray = await database.getProducts();
    dispatch({
      type: GET_PRODUCTS,
      products: productsArray
    });
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    const categoriesArray = await database.getCategories();
    dispatch({
      type: GET_CATEGORIES,
      categories: categoriesArray
    });
  };
};

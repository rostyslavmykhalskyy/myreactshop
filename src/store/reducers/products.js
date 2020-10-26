import { GET_CATEGORIES, GET_PRODUCTS } from "../actions";

const products = (state = { categories: [], products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return (state = {
        ...state,
        products: action.products
      });
    case GET_CATEGORIES:
      return (state = {
        ...state,
        categories: action.categories
      });

    default:
      return state;
  }
};

export default products;

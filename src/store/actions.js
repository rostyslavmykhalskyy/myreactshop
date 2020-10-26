import auth from "../firebase/auth";
import database from "../firebase/database";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SET_USER = "SET_USER";
export const USER_SIGNUP = "USER_SIGNUP";

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

export const userSignUp = ({ email, password }) => {
  return async function (dispatch) {
    try {
      const user = await auth.userSignUp({ email, password });
      return dispatch(setUser(user));
    } catch (error) {
      throw error;
    }
  };
};
export const userSignIn = ({ email, password }) => {
  return async function (dispatch) {
    try {
      const user = await auth.userSignIn({ email, password });
      return dispatch(setUser(user));
    } catch (error) {
      throw error;
    }
  };
};
export const userLogOut = () => {
  return async function (dispatch) {
    await auth.userLogOut();
    return dispatch(setUser({ email: null, uid: null }));
  };
};

export const setUser = (user, dispatch) => {
  return {
    type: SET_USER,
    user
  };
};

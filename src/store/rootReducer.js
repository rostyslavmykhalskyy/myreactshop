import { combineReducers } from "redux";

import products from "./reducers/products";
import admin from "./reducers/admin";
import user from "./reducers/user";

const rootReducer = combineReducers({
  products,
  user,
  admin
});

export default rootReducer;

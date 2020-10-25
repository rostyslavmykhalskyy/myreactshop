import { combineReducers } from "redux";

import products from "./reducers/products";
import admin from "./reducers/admin";

const rootReducer = combineReducers({
  products,
  admin
});

export default rootReducer;

import { applyMiddleware, createStore } from "redux";
import Reducers from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = applyMiddleware(thunk);
const store = createStore(Reducers, composeWithDevTools(middleware));

export default store;

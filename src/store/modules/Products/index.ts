import { combineReducers } from "redux";
import getProductsReducer from "./getProducts";
import setProductsReducer from "./setProducts";

const productsReducer = combineReducers({
  products: setProductsReducer,
  apiProducts: getProductsReducer,
});

export default productsReducer;

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import getProductsReducer from "./modules/Products/getProducts";
import toggleCartReducer from "./modules/ToggleCart/toggleCart";

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({
  productsData: getProductsReducer,
  toggleCart: toggleCartReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, middleware);
export default store;

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./modules/Cart/cart";
import productsReducer from "./modules/Products";
import toggleCartReducer from "./modules/ToggleCart/toggleCart";

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({
  productsData: productsReducer,
  toggleCart: toggleCartReducer,
  cart: cartReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, middleware);
export default store;

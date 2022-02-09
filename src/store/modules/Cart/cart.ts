import { DefaultAction } from "../../actions";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../../actions/cartActions/cartTypes";

export type CartState = {
  id: number;
  name: string;
  price: string;
  image: string;
  stock: number;
  createDate: string;
  quantity: number;
  category: string[];
}[];

const initialState: CartState = [];

const cartReducer = (state = initialState, action: DefaultAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (
        state.filter((object) => object.id === action.payload.id).length !== 0
      ) {
        let indexInc = state.findIndex((obj) => obj.id === action.payload.id);
        let productToInc = [...state];
        let incItem = { ...productToInc[indexInc] };
        if (incItem.stock > incItem.quantity) {
          incItem = { ...incItem, quantity: incItem.quantity + 1 };
        }
        productToInc[indexInc] = incItem;
        return [...productToInc];
      }
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      let removed = state.filter((product) => product.id !== action.payload);
      return [...removed];

    case INCREASE_QUANTITY:
      let indexInc = state.findIndex((obj) => obj.id === action.payload);
      let productToInc = [...state];
      let incItem = { ...productToInc[indexInc] };
      incItem = { ...incItem, quantity: incItem.quantity + 1 };
      productToInc[indexInc] = incItem;
      return [...productToInc];

    case DECREASE_QUANTITY:
      let indexDec = state.findIndex((obj) => obj.id === action.payload);
      let productToDec = [...state];
      let decItem = { ...productToDec[indexDec] };
      decItem = { ...decItem, quantity: decItem.quantity - 1 };
      productToDec[indexDec] = decItem;
      return [...productToDec];
    default:
      return state;
  }
};

export default cartReducer;

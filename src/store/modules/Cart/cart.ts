import { DefaultAction } from "../../actions";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../../actions/cartActions/cartTypes";

type CartState = {
  id: number;
  name: string;
  price: string;
  image: string;
  stock: number;
  createDate: string;
  category: string[];
}[];

const initialState: CartState = [];

const cartReducer = (state = initialState, action: DefaultAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      let removed = state.filter((product) => (product.id = action.payload));
      return [...removed];
    default:
      return state;
  }
};

export default cartReducer;

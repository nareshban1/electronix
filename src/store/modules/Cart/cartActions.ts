import { DefaultAction } from "../../actions";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../../actions/cartActions/cartTypes";

export const addToCart = (payload: any): DefaultAction => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};

export const removeFromCart = (payload: any): DefaultAction => {
  return {
    type: REMOVE_FROM_CART,
    payload: payload,
  };
};

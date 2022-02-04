import { HIDE_CART, SHOW_CART } from "../../actions/toggleActions/toggleTypes";

export const showCart = () => {
  return {
    type: SHOW_CART,
  };
};

export const hideCart = () => {
  return {
    type: HIDE_CART,
  };
};

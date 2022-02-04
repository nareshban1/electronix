import { DefaultAction } from "../../actions";
import { HIDE_CART, SHOW_CART } from "../../actions/toggleActions/toggleTypes";

export const showCart = (): DefaultAction => {
  return {
    type: SHOW_CART,
  };
};

export const hideCart = (): DefaultAction => {
  return {
    type: HIDE_CART,
  };
};

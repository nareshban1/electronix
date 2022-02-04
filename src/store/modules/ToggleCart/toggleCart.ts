import { DefaultAction } from "../../actions";
import { SHOW_CART, HIDE_CART } from "../../actions/toggleActions/toggleTypes";

type Viewcart = {
  viewCart: boolean;
};

const initialState: Viewcart = {
  viewCart: false,
};

const toggleCartReducer = (state = initialState, action: DefaultAction) => {
  switch (action.type) {
    case SHOW_CART:
      return {
        ...state,
        viewCart: true,
      };

    case HIDE_CART:
      return {
        ...state,
        viewCart: false,
      };

    default:
      return state;
  }
};

export default toggleCartReducer;

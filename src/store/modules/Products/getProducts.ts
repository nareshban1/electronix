import { Dispatch } from "redux";
import initialState from "../../helpers/defaultState";
import { apiList, DefaultAction } from "../../actions/";
import { defaultReducer } from "../../helpers/defaultReducer";
import defaultAction from "../../helpers/defaultAction";

const products = initialState;
const apiDetails = apiList.products.getProducts;

const getProductsReducer = (iniState = products, action: DefaultAction) => {
  const state = { ...iniState };
  let actionName = apiDetails.actionName;

  return defaultReducer(state, action, actionName);
};

export default getProductsReducer;

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    return await defaultAction(apiDetails, dispatch, { requestData: null });
  };
};

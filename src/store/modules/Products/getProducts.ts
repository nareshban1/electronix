import { Dispatch } from "redux";
import initialState from "../../helpers/default-state";
import { apiList, DefaultAction } from "../../actions/";
import { defaultReducer } from "../../helpers/default-reducer";
import axios from "axios";
import defaultDispatchTypes from "../../helpers/default-dispatch-types";

const products = initialState;
let apiDetails = apiList.products.getProducts;

const getProductsReducer = (iniState = products, action: DefaultAction) => {
  const state = { ...iniState };
  let actionName = apiDetails.actionName;

  return defaultReducer(state, action, actionName);
};

export default getProductsReducer;

export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    let dispatchTypes = defaultDispatchTypes(apiDetails.actionName);
    dispatch({ type: dispatchTypes.loadingDispatch, payload: null });
    axios
      .get(
        "https://electronic-ecommerce.herokuapp.com/api/v1/" +
          apiDetails.controllerName
      )
      .then((response) => {
        const data = response.data;
        dispatch({ type: dispatchTypes.successDispatch, payload: data });
      })
      .catch((error) => {
        const errorData = error;
        dispatch({ type: dispatchTypes.errorDispatch, payload: errorData });
      });
  };
};

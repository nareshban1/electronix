import { apiList, DefaultAction } from "../../actions";

export type ProductState = {
  id: number;
  name: string;
  price: string;
  image: string;
  stock: number;
  createDate: string;
  category: string[];
}[];

const products: ProductState = [];
const actionDetails = apiList.products.setProducts;

const setProductsReducer = (state = products, action: DefaultAction) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export default setProductsReducer;
export const setProduct = (payload: ProductState): DefaultAction => {
  return {
    type: actionDetails.actionName,
    payload: payload,
  };
};

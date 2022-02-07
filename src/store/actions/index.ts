/*In my opinion this is used to make the code more reusable and 
upgradable so that if any endpoint or actionnames or any other apidetails
need to be added or upgraded we just have to update the data in this file*/

/* Defining default action type for the actions for redux */
export type DefaultAction = {
  type: string;
  payload?: any /*payload is optional because they may not be required in various dispatch actions,
                    and the type is any because we dont know what response we get from the api.*/;
};

export enum RequestMethod {
  GET = "GET",
  DELETE = "DELETE",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  PURGE = "PURGE",
  LINK = "LINK",
  UNLINK = "UNLINK",
}

export interface apiDetailType {
  actionName: string;
  controllerName?: string;
  requestMethod?: RequestMethod;
  requestBodyType?: string;
}

/*Creating a list of endpoints(controllername),
actionNames to dispach respective reducers and api requestMethod.*/
const apiDetails = {
  products: {
    getProducts: {
      controllerName: "/product",
      actionName: "GET_PRODUCTS",
      requestMethod: RequestMethod.GET,
    },
    setProducts: {
      actionName: "SET_PRODUCTS",
    },
  },
};

/*getting type of the apiDetails to set type of ApiList*/
type ApiList = typeof apiDetails;

/*applying ApiList type to apiList variable and
exporting it so that it can be used in its respective modules*/
export const apiList: ApiList = apiDetails;

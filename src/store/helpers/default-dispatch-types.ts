/* So this function is used to dynamically generate 
loading, success and error dispatch action types 
using the actionName we defined on our actions forder in apiDetails Object  */

export interface DefaultDispatchType {
  loadingDispatch: string;
  successDispatch: string;
  errorDispatch: String;
}

const defaultDispatchTypes = (actionName: string): DefaultDispatchType => {
  return {
    loadingDispatch: actionName + "_LOADING",
    successDispatch: actionName + "_SUCCESS",
    errorDispatch: actionName + "_ERROR",
  };
};

export default defaultDispatchTypes;

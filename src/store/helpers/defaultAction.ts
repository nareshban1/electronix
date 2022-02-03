import { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { Dispatch } from "redux";
import apiRequest from "../../services/api/apiService";
import { apiDetailType } from "../actions";
import defaultDispatchTypes from "./defaultDispatchTypes";

interface APIRequestDetail {
  requestData?: any;
  requestMethod?: Method;
}

interface CustomResponse<TData = any> extends AxiosResponse {
  message: string;
  data: TData | null;
  status: number;
  noconnection: boolean; //for if there is no connection issue , I have not implemented this.
  config: AxiosRequestConfig;
  isAxiosError: boolean; //for if there is no axios issue , I have not implemented this.
}

export type APIResponseDetail<TData = any> = Promise<CustomResponse<TData>>;

/* Generates Action and dispatches those action according to the response received from the api call  */
/* asyncrynous function */
const defaultAction = async (
  apiDetails: apiDetailType,
  dispatch: Dispatch,
  apiRequestDetail: APIRequestDetail = {}
) => {
  let dispatchTypes = defaultDispatchTypes(apiDetails.actionName);
  const { requestData, requestMethod } = apiRequestDetail;
  dispatch({ type: dispatchTypes.loadingDispatch, payload: null });

  let responseData;
  try {
    responseData = await apiRequest(
      apiDetails,
      requestMethod || apiDetails.requestMethod || "GET",
      requestData
    );

    dispatch({
      type: dispatchTypes.successDispatch,
      payload: responseData.data,
    });
  } catch (error) {
    dispatch({ type: dispatchTypes.errorDispatch, payload: error });
  }
  return responseData.data as APIResponseDetail | Promise<any>;
};

export default defaultAction;

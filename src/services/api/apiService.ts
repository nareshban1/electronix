/* This function uses axios to interact with the api. It is reusable with different kinds of method and request data
and it is also upgradable to include request params and many other features that axios proovides */

import Axios, {
  AxiosResponse,
  AxiosError,
  Method,
  AxiosRequestConfig,
} from "axios";
import { apiDetailType } from "../../store/actions";

const apiRequest = (
  apiDetails: apiDetailType,
  requestMethod: Method,
  requestData?: any
): any => {
  let base_url: string | undefined = process.env.REACT_APP_API_BASE_URL;
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
  };
  const controller = new AbortController(); // to abort/cancel previous request in queue
  let signal = controller.signal;

  /*Creating request parameters required to interact with the api please check axios documentation fo the request config parameters  */
  let axiosRequestParams: AxiosRequestConfig = {
    url: apiDetails.controllerName,
    method: requestMethod,
    baseURL: base_url,
    responseType: "json",
    timeout: 60 * 3 * 1000, //timeout of 3 minutes
    signal: signal, //cancel token is deprecated according to axios docs so using abortcontroller
    headers: headers,
  };

  /* Calling the api using the request parameters generated above */
  return Axios.request(axiosRequestParams)
    .then((response: AxiosResponse) => response)
    .catch((error: AxiosError) => {
      throw error;
    });
};

export default apiRequest;

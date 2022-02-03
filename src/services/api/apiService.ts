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
  let axiosRequestParams: AxiosRequestConfig = {
    url: apiDetails.controllerName,
    method: requestMethod,
    baseURL: base_url,
    responseType: "json",
    timeout: 60 * 3 * 1000, //timeout of 3 minutes
    signal: signal, //cancel token is deprecated according to axios docs so using abortcontroller
    headers: headers,
  };

  return Axios.request(axiosRequestParams)
    .then((response: AxiosResponse) => response)
    .catch((error: AxiosError) => {
      throw error;
    });
};

export default apiRequest;

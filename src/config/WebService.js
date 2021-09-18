import _ from "lodash";
import Util from "../services/Util";
import { DEV_ENV } from "../constants";

export const BASE_URL = "http://localhost:3002/";

export const API_TIMEOUT = 30000;
export const ABORT_REQUEST_MESSAGE = "Network failed. Aborted request.";

// API USER ROUTES
export const API_LOG = process.env.REACT_APP_ENV === DEV_ENV;

export const ERROR_SOMETHING_WENT_WRONG = {
  message: "Something went wrong, Please try again later",
};
export const ERROR_NETWORK_NOT_AVAILABLE = {
  message: "Please connect to working internet",
};

export const ERROR_TIMEOUT = {
  message: "Request timeout, please check you internet!",
};

export const ERROR_SESSION_EXPIRED = {
  message: "Session expired, please refresh",
};

export const REQUEST_TYPE = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
};

// API USER ROUTES

export const USER_SIGNUP = {
  route: "auth/signup",
  auth: false,
  type: REQUEST_TYPE.POST,
};

export const callRequest = function (
  url,
  data,
  parameter,
  header = {},
  ApiSauce,
  baseUrl = BASE_URL
) {
  const _url =
    parameter && !_.isEmpty(parameter)
      ? `${url.route}/${parameter}`
      : url.route;

  if (url.auth) {
    header.Authorization = `Bearer ${Util.getCurrentAccessToken()}`;
  }

  if (url.type === REQUEST_TYPE.POST) {
    //data._csrf = Util.getCurrentCsrfToken();
    return ApiSauce.post(_url, data, header, baseUrl);
  } else if (url.type === REQUEST_TYPE.GET) {
    return ApiSauce.get(_url, data, header, baseUrl);
  } else if (url.type === REQUEST_TYPE.PUT) {
    // data._csrf = Util.getCurrentCsrfToken();
    return ApiSauce.put(_url, data, header, baseUrl);
  } else if (url.type === REQUEST_TYPE.DELETE) {
    return ApiSauce.delete(_url, data, header, baseUrl);
  }
  // return ApiSauce.post(url.route, data, _header);
};

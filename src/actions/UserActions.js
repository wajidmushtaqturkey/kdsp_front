// @flow

import { USER_SIGNUP } from "./ActionTypes";

export function userSignupRequest(payload, responseCallback) {
  console.log({
    payload,
  });
  return {
    payload,
    responseCallback,
    type: USER_SIGNUP.REQUEST,
  };
}
export function userSignupSuccess(data) {
  return {
    data,
    type: USER_SIGNUP.SUCCESS,
  };
}

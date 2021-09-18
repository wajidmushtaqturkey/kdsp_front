// @flow

import {
  CONTACT_US,
  GET_VEHICLES,
  SET_LANGUAGE,
  EMAIL_SUBSCRIPTION,
} from "./ActionTypes";

export function getVehiclesRequest(responseCallback) {
  return {
    responseCallback,
    type: GET_VEHICLES.REQUEST,
  };
}
export function setLanguage(data) {
  return {
    data,
    type: SET_LANGUAGE,
  };
}

export function emailSubscriptionRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: EMAIL_SUBSCRIPTION.REQUEST,
  };
}
export function emailSubscriptionSuccess(data) {
  return {
    data,
    type: EMAIL_SUBSCRIPTION.SUCCESS,
  };
}

export function contactUsRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: CONTACT_US.REQUEST,
  };
}
export function contactUsSuccess(data) {
  return {
    data,
    type: CONTACT_US.SUCCESS,
  };
}

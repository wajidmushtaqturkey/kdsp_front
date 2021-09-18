import { take, put, call, fork } from "redux-saga/effects";
import { CONTACT_US, EMAIL_SUBSCRIPTION } from "../actions/ActionTypes";
import { SAGA_ALERT_TIMEOUT, SOMETHING_WRONG } from "../constants";
import {
  contactUsSuccess,
  emailSubscriptionSuccess,
} from "../actions/GeneralActions";
import {
  CONTACT_US as CONTACT_US_URL,
  EMAIL_SUBSCRIPTION as EMAIL_SUBSCRIPTION_URL,
  callRequest,
} from "../config/WebService";
import ApiSauce from "../services/ApiSauce";
import Util from "../services/Util";

function alert(message, type = "error") {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* constactUs() {
  while (true) {
    const { payload, responseCallback } = yield take(CONTACT_US.REQUEST);
    try {
      const response = yield call(
        callRequest,
        CONTACT_US_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response);
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.topAlert(err.message));
    }
  }
}

function* emailSubscription() {
  while (true) {
    const { payload, responseCallback } = yield take(
      EMAIL_SUBSCRIPTION.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        EMAIL_SUBSCRIPTION_URL,
        payload,
        "",
        {},
        ApiSauce
      );
      console.log({
        payload,
        response,
      });
      if (response.status) {
        yield put(emailSubscriptionSuccess(response.data));
        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.topAlert(err.message));
    }
  }
}

export default function* root() {
  yield fork(constactUs);
  yield fork(emailSubscription);
}

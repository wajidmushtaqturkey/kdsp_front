import { take, put, call, fork } from "redux-saga/effects";
import { SAGA_ALERT_TIMEOUT } from "../constants";
import {
  USER_SIGNUP as USER_SIGNUP_URL,
  callRequest,
} from "../config/WebService";
import ApiSauce from "../services/ApiSauce";
import Util from "../services/Util";
import { USER_SIGNUP } from "actions/ActionTypes";
import { userSignupSuccess } from "actions/UserActions";

function alert(message, type = "error") {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* userSignup() {
  while (true) {
    const { payload, responseCallback } = yield take(USER_SIGNUP.REQUEST);

    try {
      const response = yield call(
        callRequest,
        USER_SIGNUP_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(userSignupSuccess(response.data));
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
  yield fork(userSignup);
}

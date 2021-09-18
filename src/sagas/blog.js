import { take, put, call, fork } from "redux-saga/effects";
import {
  BLOG_DETAIL,
  GET_BLOGS,
  GET_POPULAR_BLOGS,
} from "../actions/ActionTypes";
import { SAGA_ALERT_TIMEOUT } from "../constants";
import {
  getBlogsSuccess,
  getBlogsPopularSuccess,
} from "../actions/BlogActions";
import {
  GET_BLOGS as GET_BLOGS_URL,
  BLOG_DETAIL as BLOG_DETAIL_URL,
  callRequest,
} from "../config/WebService";
import ApiSauce from "../services/ApiSauce";
import Util from "../services/Util";

function alert(message, type = "error") {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* getBlogs() {
  while (true) {
    const { payload, responseCallback } = yield take(GET_BLOGS.REQUEST);

    try {
      const response = yield call(
        callRequest,
        GET_BLOGS_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(getBlogsSuccess(response.data));
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

function* getPopularBlogs() {
  while (true) {
    const { payload, responseCallback } = yield take(GET_POPULAR_BLOGS.REQUEST);

    try {
      const response = yield call(
        callRequest,
        GET_BLOGS_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(getBlogsPopularSuccess(response.data));
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

function* blogDetail() {
  while (true) {
    const { payload, responseCallback } = yield take(BLOG_DETAIL.REQUEST);

    try {
      const response = yield call(
        callRequest,
        BLOG_DETAIL_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response.data);
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
  yield fork(getBlogs);
  yield fork(getPopularBlogs);
  yield fork(blogDetail);
}

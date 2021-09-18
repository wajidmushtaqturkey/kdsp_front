// @flow

import { GET_BLOGS, BLOG_DETAIL, GET_POPULAR_BLOGS } from "./ActionTypes";

export function getBlogsRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: GET_BLOGS.REQUEST,
  };
}
export function getBlogsSuccess(data) {
  return {
    data,
    type: GET_BLOGS.SUCCESS,
  };
}

export function getBlogsPopularRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: GET_POPULAR_BLOGS.REQUEST,
  };
}
export function getBlogsPopularSuccess(data) {
  return {
    data,
    type: GET_POPULAR_BLOGS.SUCCESS,
  };
}

export function blogsDetailRequest(payload, responseCallback) {
  console.log({
    payloadpayload: payload,
  });
  return {
    payload,
    responseCallback,
    type: BLOG_DETAIL.REQUEST,
  };
}
export function blogsDetailSuccess(data) {
  return {
    data,
    type: BLOG_DETAIL.SUCCESS,
  };
}

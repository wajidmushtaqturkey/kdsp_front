// @flow
import _ from "lodash";
import Immutable from "seamless-immutable";
import { GET_BLOGS, GET_POPULAR_BLOGS } from "../actions/ActionTypes";

const initialState = Immutable({
  blogs: {},
  popularBlogs: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS.SUCCESS: {
      return Immutable.merge(state, {
        blogs: action.data,
      });
    }
    case GET_POPULAR_BLOGS.SUCCESS: {
      return Immutable.merge(state, {
        popularBlogs: action.data,
      });
    }

    default:
      return state;
  }
};

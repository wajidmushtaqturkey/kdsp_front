// @flow
import _ from "lodash";
import Immutable from "seamless-immutable";
import { SET_LANGUAGE } from "../actions/ActionTypes";

const initialState = Immutable({
  appLanguage: "en",
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return Immutable.merge(state, {
        appLanguage: action.data,
      });
    }

    default:
      return state;
  }
};

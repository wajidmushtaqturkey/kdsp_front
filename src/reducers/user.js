// @flow
import { USER_SIGNUP } from "actions/ActionTypes";
import _ from "lodash";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  data: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP.SUCCESS: {
      return Immutable.merge(state, {
        data: action.data,
      });
    }

    default:
      return state;
  }
};

import { combineReducers } from "redux";

import general from "./general";
import blog from "./blog";

export default combineReducers({
  general,
  blog,
});

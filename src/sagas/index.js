import { fork } from "redux-saga/effects";
import general from "./general";
import blog from "./blog";

export default function* root() {
  yield fork(general);
  yield fork(blog);
}

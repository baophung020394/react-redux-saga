import { all } from "redux-saga/effects";
import tradeSaga from "./trade/saga";

export default function* rootSaga() {
  yield all([tradeSaga()]);
}

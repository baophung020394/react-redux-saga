import { all, put, takeEvery } from "redux-saga/effects";
import tradeSaga from "./trade/saga";

function* workerSaga() {
  console.log('worker');
  yield put({type: 'ACTION_FROM_WORKER'});
}
export default function* rootSaga() {
  yield takeEvery('Hello', workerSaga)
  // yield all([tradeSaga()]);
}

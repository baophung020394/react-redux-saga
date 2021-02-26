import actions from "./actions";
import { put, takeLatest, all, fork, call } from "redux-saga/effects";
import { GetListTrade } from "../../model/dataApi";

function* getListTradeSaga(action: any) {
  try {
    let { response, status, message } = yield call(
      GetListTrade,
      action.page,
      action.size
    );
    if (status) {
      yield put({
        type: actions.GET_TRADE_SUCCESS,
        listTrade: response.data || [],
      });
    } else {
      yield put({
        type: actions.GET_TRADE_FAILED,
        error: message,
      });
    }
  } catch (error) {
    yield put({
      type: actions.GET_TRADE_FAILED,
      error: error,
    });
  }
}
export function* watchFetchProfiles() {
  yield takeLatest(actions.GET_TRADE, getListTradeSaga);
}

export default function* rootSaga() {
  yield all([fork(watchFetchProfiles)]);
}

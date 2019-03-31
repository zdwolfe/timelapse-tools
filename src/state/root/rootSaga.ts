import { all, fork } from "redux-saga/effects";

import { watchSayHelloAsync } from "../hello/helloSaga";

function* rootSaga() {
  yield all([
    fork(watchSayHelloAsync)
  ]);
}

export default rootSaga;

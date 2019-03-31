import { call, takeEvery, put } from "redux-saga/effects";

import { IHelloResult } from "./helloResult";
import { HelloAction, ISayHelloAsyncAction, sayHelloResult } from "./helloActions";
import { helloApi } from "./helloApi";

export function* sayHelloAsync(action: ISayHelloAsyncAction): IterableIterator<any> {
  const result: IHelloResult = yield call(helloApi, action.name);
  yield put(sayHelloResult(result.message))
}

export function* watchSayHelloAsync() {
  yield takeEvery(
    HelloAction.SayHelloAsync,
    sayHelloAsync
  )
}

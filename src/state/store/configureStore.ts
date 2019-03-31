import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "../root/rootReducer";
import rootSaga from "../root/rootSaga";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return store;
};


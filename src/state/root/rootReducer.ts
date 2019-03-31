import { combineReducers } from "redux";

import { helloReducer as hello, IHelloState } from "../hello/helloReducer";

export interface IRootState {
  hello: IHelloState
}

export const rootReducer = combineReducers<IRootState>({
  hello
});

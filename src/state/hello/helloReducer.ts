import {HelloAction, IHelloAction} from "./helloActions";

export interface IHelloState {
  message: string
}

export const INITIAL_STATE: IHelloState = {
  message: "Loading...."
};

export function helloReducer(
  state: IHelloState = INITIAL_STATE,
  action: IHelloAction
): IHelloState {
  switch (action.type) {
    case HelloAction.SayHelloAsync: {
      return state;
    }

    case HelloAction.SayHelloResult: {
      return {
        message: action.message
      };
    }

    default: {
      return state;
    }
  }
}

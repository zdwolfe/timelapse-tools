
export type IHelloAction = ISayHelloAsyncAction |
  ISayHelloResultAction;

export enum HelloAction {
  SayHelloAsync = "SayHelloAsync",
  SayHelloResult = "SayHelloResult"
}

export interface ISayHelloAsyncAction {
  type: HelloAction.SayHelloAsync,
  name: string
}

export interface ISayHelloResultAction {
  type: HelloAction.SayHelloResult,
  message: string
}

export function sayHello(name: string): ISayHelloAsyncAction {
  return {
    type: HelloAction.SayHelloAsync,
    name
  }
}

export function sayHelloResult(message: string): ISayHelloResultAction {
  return {
    type: HelloAction.SayHelloResult,
    message
  }
}

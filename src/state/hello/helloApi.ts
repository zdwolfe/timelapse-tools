import { IHelloResult } from "./helloResult";
import config from "../../config"

export function helloApi(name: string): Promise<IHelloResult> {
  const requestBody = {
    name
  };
  const request = {
    method: "POST",
    mode: "cors" as RequestMode,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  };
  const responsePromise = fetch(config.api.endpoint + "/hello", request);
  return responsePromise
    .then((res: Response) => {
      return res.json();
    }).then((resultJson: any) => {
      return {
        message: resultJson.message
      }
    })
    .catch((error: any) => {
      console.error("helloApi failed" + JSON.stringify(error));
      throw "helloApi failed";
    });
}

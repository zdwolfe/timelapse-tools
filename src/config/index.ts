import * as proces from "process";

interface ApiConfig {
  endpoint: string;
}

interface Config {
  api: ApiConfig
}

function getConfig(): Config {
  if (process.env["NODE_ENV"] === "production") {
    return {
      api: {
        endpoint: "https://asjo188lu2.execute-api.us-east-1.amazonaws.com/latest"
      }
    }
  } else {
    return {
      api: {
        endpoint: "http://localhost:5000/api"
      }
    }
  }
}

const config = getConfig();
export default config;

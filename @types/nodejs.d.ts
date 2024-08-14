import { ConfigurationModeType } from "../src/shared";

declare namespace NodeJS {
  export interface ProcessEnv {
    ASSET_PATH: string;
    NODE_ENV: ConfigurationModeType;
    BROWSER: "chrome" | "firefox";
    PORT: string;
  }
}

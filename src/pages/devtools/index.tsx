import React from "react";
import { createRoot } from "react-dom/client";
import { devtools } from "webextension-polyfill";
import "../../assets/scss/tailwind.scss";
import DevTools from "./DevTools";
import "./index.scss";

devtools.panels.create(
  "Dev Tools from chrome-extension-boilerplate-react",
  "icon-34.png",
  "src/pages/devtools/index.html",
);

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);
root.render(<DevTools />);

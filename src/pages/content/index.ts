import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { runtime } from "webextension-polyfill";
import "./index.scss";

const element = createElement(
  "div",
  { className: "banner-runtime" },
  `runtime id: ${runtime.id}`,
);

const container = document.body.insertBefore(
  document.createElement("span"),
  document.body.firstChild,
);

const root = createRoot(container);
root.render(element);

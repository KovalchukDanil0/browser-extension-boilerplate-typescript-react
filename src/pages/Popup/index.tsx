import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./Popup";

import "../../assets/css/tailwind.scss";
import "./index.scss";

const container = document.getElementById("app-container");
if (!container) {
  throw new Error("Critical Error: Root element not found");
}

const root = createRoot(container);
root.render(<Popup />);

import React from "react";
import { createRoot } from "react-dom/client";
import "../../assets/scss/tailwind.scss";
import "./index.scss";
import Panel from "./Panel";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);
root.render(<Panel />);

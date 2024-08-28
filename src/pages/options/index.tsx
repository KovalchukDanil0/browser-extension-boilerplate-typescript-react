import React from "react";
import { createRoot } from "react-dom/client";
import "../../assets/scss/tailwind.scss";
import "./index.scss";
import Options from "./Options";

const container = document.getElementById("root") as HTMLBodyElement;

const root = createRoot(container);
root.render(<Options title={"Settings"} />);

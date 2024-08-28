import React, { useState } from "react";
import { IconContext } from "react-icons";
import { SiReact, SiVite } from "react-icons/si";
import GreetingComponent from "../../containers/Greetings";
import "./index.scss";

const iconSettings = { color: "blue", size: "50px" };

export default function Popup() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-3">
        <a href="https://vitejs.dev" target="_blank">
          <IconContext.Provider value={iconSettings}>
            <SiVite className="logo" />
          </IconContext.Provider>
        </a>
        <a href="https://react.dev" target="_blank">
          <IconContext.Provider value={iconSettings}>
            <SiReact className="logo react" />
          </IconContext.Provider>
        </a>
      </div>
      <h1 className="text-center">Vite + React</h1>
      <div className="p-8">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>

      <GreetingComponent name="react" />
    </>
  );
}

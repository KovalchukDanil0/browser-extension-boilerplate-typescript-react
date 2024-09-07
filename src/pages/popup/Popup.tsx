import React, { useCallback, useState } from "react";
import { Button } from "react-daisyui";
import { IconContext } from "react-icons";
import { SiReact, SiVite } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import GreetingComponent from "../../containers/Greetings";
import "./index.scss";

const iconSettingsVite = { color: "#FFCD25", size: "10rem" };
const iconSettingsReact = { color: "#58C4DC", size: "10rem" };

export default function Popup() {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => setCount(count + 1), [count]);

  return (
    <>
      <div className="flex flex-row items-center justify-around gap-3">
        <a href="https://vitejs.dev" target="_blank">
          <IconContext.Provider value={iconSettingsVite}>
            <SiVite className="logo" />
          </IconContext.Provider>
        </a>
        <a href="https://react.dev" target="_blank">
          <IconContext.Provider value={iconSettingsReact}>
            <SiReact className="logo react" />
          </IconContext.Provider>
        </a>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <h1 className="mt-12 text-center text-4xl">Vite + React</h1>
        <Button color="primary" onClick={incrementCount}>
          count is {count}
        </Button>
        <p>
          Edit
          <code
            className={twMerge(
              "mb-6 block max-w-full break-inside-avoid overflow-auto border border-l-4 border-solid",
              "border-slate-800 border-l-orange-400 bg-slate-200 px-4 py-4 text-lg leading-3 text-red-700 dark:bg-slate-700",
            )}
          >
            src/pages/popup/Popup.tsx
          </code>
          and save to test extension
        </p>
        <p className="text-gray-500">
          Click on the Vite and React logos to learn more
        </p>

        <GreetingComponent name="react" />
      </div>
    </>
  );
}

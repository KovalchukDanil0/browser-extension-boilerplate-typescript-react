import React from "react";
import GreetingComponent from "../../containers/Greetings/GreetingComponent";

export default function Popup() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full bg-slate-800 p-3 text-center">
      <div className="flex h-full flex-col items-center justify-center text-base text-white">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="pointer-events-none h-8 animate-spin"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <GreetingComponent />
      </div>
    </div>
  );
}

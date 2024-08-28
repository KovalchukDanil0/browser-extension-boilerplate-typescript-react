import React from "react";

export default function NewTab() {
  return (
    <div className="text-center">
      <div className="flex h-full flex-col items-center justify-center text-base text-white">
        <p>
          Edit <code>src/pages/newtab/Newtab.tsx</code> and save to reload.
        </p>
        <a
          className="pointer-events-none mt-12 h-8 animate-spin text-lg"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>

        <h1 className="mt-20 text-xl">Use Vite!</h1>
      </div>
    </div>
  );
}

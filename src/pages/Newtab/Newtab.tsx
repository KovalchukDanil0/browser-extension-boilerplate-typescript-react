import React from "react";

export default function NewTab() {
  return (
    <div className="text-center">
      <div className="flex h-full flex-col items-center justify-center text-base text-white">
        <p>
          Edit <code>src/pages/Newtab/Newtab.js</code> and save to reload.
        </p>
        <a
          className="pointer-events-none h-8 animate-spin"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <h6>The color of this paragraph is defined using SASS.</h6>
      </div>
    </div>
  );
}

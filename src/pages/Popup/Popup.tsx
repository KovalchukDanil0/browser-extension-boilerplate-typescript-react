import React from "react";
import GreetingComponent from "../../containers/Greetings/GreetingComponent";
import "./Popup.scss";

export default function Popup() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <GreetingComponent />
      </header>
    </div>
  );
}

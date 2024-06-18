import React, { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  name?: string;
}

export default function GreetingComponent({ name }: Readonly<Props>) {
  return (
    <div>
      <p>Hello, {name}!</p>
      <img src="icon-128.png" alt="extension icon" />
    </div>
  );
}

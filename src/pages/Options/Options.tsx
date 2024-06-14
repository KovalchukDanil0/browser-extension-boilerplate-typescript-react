import React from "react";
import "./Options.scss";

interface Props {
  title: string;
}

export default function Options({ title }: Readonly<Props>) {
  return <div className="OptionsContainer">{title} Page</div>;
}

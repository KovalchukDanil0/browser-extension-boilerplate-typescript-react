import React from "react";

interface Props {
  title: string;
}

export default function Options({ title }: Readonly<Props>) {
  return (
    <div className="flex h-4 w-full items-center justify-center text-4xl">
      {title} Page
    </div>
  );
}

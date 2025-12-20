import React from "react";

type Props = {
  ratio?: number; // width/height, e.g. 16/9, 1, 4/3
  className?: string;
  children: React.ReactNode;
};

export default function Aspect({ ratio = 16/9, className = "", children }: Props) {
  // Uses native aspect-ratio; wraps children absolutely for Next/Image fill.
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: String(ratio) }}
    >
      {children}
    </div>
  );
}

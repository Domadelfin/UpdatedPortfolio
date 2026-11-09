import type { ComponentProps } from "react";

// A link that gets "scribbled in" behind its text on hover.
// The scribble is a single back-and-forth stroke drawn with stroke-dashoffset (see .scribble in globals.css).
export default function ScribbleLink({
  className = "",
  children,
  ...props
}: ComponentProps<"a">) {
  return (
    <a className={`scribble ${className}`} {...props}>
      <svg
        aria-hidden="true"
        className="scribble-svg"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <path
          pathLength={1}
          d="M5 9 L95 5 L4 16 L96 13 L6 24 L94 21 L5 32 L95 29 L10 36"
        />
      </svg>
      {children}
    </a>
  );
}

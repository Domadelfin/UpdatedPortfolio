"use client";

import { useEffect, useRef } from "react";

// The nav wraps onto extra lines on narrow screens, so its height isn't fixed.
// This keeps the --nav-h CSS variable (used to pad sections below the fixed nav)
// equal to the nav's real height. Renders an empty marker inside the <header>.
export default function NavHeightSync() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const header = ref.current?.parentElement;
    if (!header) return;
    const root = document.documentElement;
    const observer = new ResizeObserver(() => {
      root.style.setProperty("--nav-h", `${header.offsetHeight}px`);
    });
    observer.observe(header);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--nav-h");
    };
  }, []);

  return <span ref={ref} hidden />;
}

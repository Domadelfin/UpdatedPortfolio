"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string; // outer box (margins)
  contentClassName?: string; // padding around the content
};

// A scroll area with a hand-drawn scrollbar: the browser's own bar is hidden
// (Chrome on Windows ignores scrollbar colors) and a pencil track + marker thumb
// is drawn instead. Scrolling with the wheel, touch or keys still works natively.
export default function DoodleScroll({ children, className = "", contentClassName = "" }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ y: number; top: number } | null>(null);
  const [thumb, setThumb] = useState<{ size: number; offset: number } | null>(null);

  // Thumb size and position, as fractions of the track
  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.clientHeight === 0) return;
    const max = el.scrollHeight - el.clientHeight;
    if (max <= 1) return setThumb(null);
    const size = Math.max(el.clientHeight / el.scrollHeight, 0.12);
    setThumb({ size, offset: (el.scrollTop / max) * (1 - size) });
  }, []);

  // Recalculate when the area or its content changes size (e.g. the popup opens)
  useEffect(() => {
    const observer = new ResizeObserver(update);
    if (scrollRef.current) observer.observe(scrollRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [update]);

  // Pixels scrolled per pixel the thumb moves
  function ratio() {
    const el = scrollRef.current!;
    const trackH = trackRef.current!.clientHeight;
    return (el.scrollHeight - el.clientHeight) / (trackH * (1 - (thumb?.size ?? 1)));
  }

  function onThumbDown(e: PointerEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { y: e.clientY, top: scrollRef.current!.scrollTop };
  }

  function onThumbMove(e: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    scrollRef.current!.scrollTop = drag.current.top + (e.clientY - drag.current.y) * ratio();
  }

  // Clicking the track jumps the thumb's centre to that point
  function onTrackDown(e: PointerEvent<HTMLDivElement>) {
    if (!thumb) return;
    const rect = trackRef.current!.getBoundingClientRect();
    const target = (e.clientY - rect.top) / rect.height - thumb.size / 2;
    const el = scrollRef.current!;
    el.scrollTo({ top: (target / (1 - thumb.size)) * (el.scrollHeight - el.clientHeight), behavior: "smooth" });
  }

  return (
    <div className={`relative flex min-h-0 flex-col ${className}`}>
      <div ref={scrollRef} onScroll={update} className={`doodle-scroll ${contentClassName}`}>
        <div ref={contentRef}>{children}</div>
      </div>

      {thumb && (
        <div ref={trackRef} aria-hidden="true" className="doodle-scrollbar" onPointerDown={onTrackDown}>
          <div
            className="doodle-scrollbar-thumb"
            style={{ height: `${thumb.size * 100}%`, top: `${thumb.offset * 100}%` }}
            onPointerDown={onThumbDown}
            onPointerMove={onThumbMove}
            onPointerUp={() => (drag.current = null)}
            onPointerCancel={() => (drag.current = null)}
          />
        </div>
      )}
    </div>
  );
}

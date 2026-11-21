"use client";

import { useEffect, useState } from "react";
import ScribbleLink from "@/components/ScribbleLink";

type Props = {
  links: { href: string; label: string }[];
  resume: { href: string; fileName: string };
};

// The nav on phones and small tablets: a doodled ☰ button that drops down a card
// with the section links. Closes on a link tap, Escape, or a tap anywhere else.
export default function MobileMenu({ links, resume }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="doodle-btn px-3 py-1.5"
      >
        <svg
          viewBox="0 0 28 22"
          aria-hidden="true"
          className="block h-5 w-7"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2.6"
          strokeLinecap="round"
          style={{ filter: "url(#doodle-wobble)" }}
        >
          {open ? (
            <path d="M5 3 L23 19 M23 3 L5 19" />
          ) : (
            <path d="M3 4 C10 3 18 5 25 3.5 M3 11 C11 12 17 10 25 11 M3 18 C9 17.5 19 19 25 18" />
          )}
        </svg>
      </button>

      {/* Invisible layer over the page while the menu is open: a tap outside the menu
          only closes it, instead of also tapping whatever is underneath */}
      {open && (
        <div aria-hidden="true" onClick={close} className="fixed inset-x-0 top-(--nav-h) bottom-0" />
      )}

      {open && (
        <div id="mobile-menu" className="absolute inset-x-4 top-full mt-3">
          <ul className="doodle-box grid gap-1 px-6 py-5">
            {links.map((l) => (
              <li key={l.href}>
                <ScribbleLink href={l.href} onClick={close} className="font-hand block py-1 text-3xl">
                  {l.label}
                </ScribbleLink>
              </li>
            ))}
            <li className="mt-2 border-t-2 border-dashed border-(--ink-soft)/40 pt-3">
              <ScribbleLink
                href={resume.href}
                download={resume.fileName}
                onClick={close}
                className="font-hand block py-1 text-3xl font-bold"
              >
                Download resume ↓
              </ScribbleLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

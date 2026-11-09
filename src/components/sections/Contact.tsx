import EmailDraft from "@/components/EmailDraft";
import Section from "@/components/Section";
import ScribbleLink from "@/components/ScribbleLink";
import { contact, profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <div className="doodle-box mx-auto max-w-3xl px-8 py-10 text-center md:px-14">
        <p className="font-hand text-4xl font-bold md:text-5xl">{contact.heading}</p>

        {/* Availability, as highlighter-marked labels */}
        <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {contact.openTo.map((o) => (
            <li key={o} className="font-hand text-2xl">
              <span className="bg-[linear-gradient(transparent_55%,var(--marker-green)_55%)] px-1">
                ✓ {o}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-6 max-w-xl leading-relaxed">{contact.message}</p>

        <div className="mt-8">
          <p className="font-hand text-2xl">I can help with</p>
          <ul className="doodle-tags mt-3 flex flex-wrap justify-center gap-2">
            {contact.services.map((s) => (
              <li key={s}>
                <span className="doodle-tag">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Email call-to-action with a hand-drawn arrow pointing at it */}
        <div className="relative mt-10 inline-block">
          <Arrow />
          <EmailDraft email={contact.email} topics={contact.topics} />
        </div>

        <div className="mt-8 flex flex-wrap items-baseline justify-center gap-x-6 gap-y-2">
          <p className="text-ink-soft">or find me on</p>
          <ul className="flex justify-center gap-6">
            {contact.links.map((l) => (
              <li key={l.label}>
                <ScribbleLink
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doodle-link"
                >
                  {l.label}
                </ScribbleLink>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-hand mt-6 text-3xl -rotate-3">– {profile.name}</p>
      </div>
    </Section>
  );
}

// Curvy doodled arrow with a "say hi!" note, sitting to the left of the email button.
function Arrow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-full mr-3 hidden -translate-y-2/3 items-end gap-1 md:flex"
    >
      <span className="font-hand mb-5 -rotate-12 text-2xl whitespace-nowrap text-ink-soft">say hi!</span>
      <svg
        viewBox="0 0 80 60"
        className="h-14 w-20"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: "url(#doodle-wobble)" }}
      >
        <path d="M6 8 C 20 4, 40 10, 48 26 S 60 50, 74 50" />
        <path d="M64 42 L 74 50 L 62 56" />
      </svg>
    </div>
  );
}

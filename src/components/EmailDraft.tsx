"use client";

import { useRef, useState, type FormEvent } from "react";

type Props = {
  email: string;
  topics: string[];
};

// The email button in the Contact section. Clicking it opens a small form;
// submitting the form opens a pre-filled draft in Gmail or the visitor's email app.
// Nothing is sent from this site, so no backend or API keys are needed.
export default function EmailDraft({ email, topics }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const subject = `${topic}${name ? ` – from ${name}` : ""}`;
  const body = `Hi Dom,\n\n${message}\n\nBest,\n${name}`;

  function open() {
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  // Which submit button was pressed decides where the draft opens.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const via = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value");
    const q = (s: string) => encodeURIComponent(s);

    if (via === "gmail") {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${q(email)}&su=${q(subject)}&body=${q(body)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      window.location.href = `mailto:${email}?subject=${q(subject)}&body=${q(body)}`;
    }
    close();
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the address is visible anyway.
    }
  }

  return (
    <>
      <button type="button" onClick={open} className="doodle-btn break-all">
        {email}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="email-draft-title"
        className="doodle-dialog"
        // Clicking the dimmed backdrop (outside the card) closes the dialog
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="doodle-box w-[min(34rem,calc(100vw-2rem))] px-7 py-7 text-left">
          <div className="flex items-start justify-between gap-4">
            <h3 id="email-draft-title" className="text-4xl">
              Write me a note
            </h3>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="font-hand -mt-1 text-3xl leading-none"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 grid gap-4">
            <fieldset>
              <legend className="font-hand text-2xl">What&apos;s this about?</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {topics.map((t) => (
                  <label key={t} className="doodle-choice">
                    <input
                      type="radio"
                      name="topic"
                      value={t}
                      checked={topic === t}
                      onChange={() => setTopic(t)}
                      className="sr-only"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-1">
              <span className="font-hand text-2xl">Your name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="doodle-input"
              />
            </label>

            <label className="grid gap-1">
              <span className="font-hand text-2xl">Message</span>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me a bit about the role or project…"
                className="doodle-input resize-y"
              />
            </label>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <button type="submit" value="gmail" className="doodle-btn">
                Open in Gmail
              </button>
              <button type="submit" value="app" className="doodle-btn alt">
                Use my email app
              </button>
            </div>

            <p className="text-ink-soft">
              Prefer something else? Email me at {email}{" "}
              <button
                type="button"
                onClick={copyEmail}
                className="doodle-link font-hand text-xl"
              >
                {copied ? "copied!" : "(copy)"}
              </button>
            </p>
          </form>
        </div>
      </dialog>
    </>
  );
}

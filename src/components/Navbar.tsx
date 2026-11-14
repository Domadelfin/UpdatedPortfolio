import ScribbleLink from "@/components/ScribbleLink";
import { profile, sections } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="doodle-line fixed inset-x-0 top-0 z-10 bg-paper">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3">
        <a href="#home" className="font-hand text-3xl font-bold whitespace-nowrap">
          {profile.name}
        </a>
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {sections
            .filter((s) => s.id !== "home")
            .map((s) => (
              <li key={s.id}>
                <ScribbleLink href={`#${s.id}`} className="whitespace-nowrap">
                  {s.label}
                </ScribbleLink>
              </li>
            ))}
          <li>
            <ScribbleLink
              href={profile.resume.href}
              download={profile.resume.fileName}
              className="font-bold whitespace-nowrap"
            >
              Resume ↓
            </ScribbleLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import MobileMenu from "@/components/MobileMenu";
import NavHeightSync from "@/components/NavHeightSync";
import ScribbleLink from "@/components/ScribbleLink";
import { profile, sections } from "@/data/portfolio";

const links = sections
  .filter((s) => s.id !== "home")
  .map((s) => ({ href: `#${s.id}`, label: s.label }));

export default function Navbar() {
  return (
    <header className="doodle-line fixed inset-x-0 top-0 z-10 bg-paper">
      <NavHeightSync />
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-x-6 px-6 py-3">
        <a href="#home" className="font-hand text-3xl font-bold whitespace-nowrap">
          {profile.name}
        </a>

        {/* Inline links from md up; a hamburger menu below that */}
        <ul className="hidden flex-wrap gap-x-6 gap-y-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <ScribbleLink href={l.href} className="whitespace-nowrap">
                {l.label}
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
        <MobileMenu links={links} resume={profile.resume} />
      </nav>
    </header>
  );
}

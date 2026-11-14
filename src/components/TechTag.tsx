import {
  type SimpleIcon,
  siDart,
  siDjango,
  siDocker,
  siFlutter,
  siGithubactions,
  siGoogle,
  siInertia,
  siLaravel,
  siLinux,
  siNextdotjs,
  siNginx,
  siPostgresql,
  siRailway,
  siRender,
  siTailwindcss,
  siVuedotjs,
} from "simple-icons";

// Logos come from Simple Icons and are drawn in the ink color so they match
// the hand-drawn style. A name not listed here shows as a plain tag.
const icons: Record<string, SimpleIcon> = {
  Dart: siDart,
  Django: siDjango,
  Docker: siDocker,
  Flutter: siFlutter,
  "GitHub Actions": siGithubactions,
  "Google Sign-In": siGoogle,
  "Inertia.js": siInertia,
  Laravel: siLaravel,
  Linux: siLinux,
  "Next.js": siNextdotjs,
  Nginx: siNginx,
  PostgreSQL: siPostgresql,
  Railway: siRailway,
  Render: siRender,
  "Tailwind CSS": siTailwindcss,
  Vue: siVuedotjs,
};

export default function TechTag({ name }: { name: string }) {
  const icon = icons[name];
  return (
    <span className="doodle-tag inline-flex items-center gap-1.5">
      {icon && (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[0.95em] shrink-0" fill="currentColor">
          <path d={icon.path} />
        </svg>
      )}
      {name}
    </span>
  );
}

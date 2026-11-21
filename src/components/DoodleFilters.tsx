// Hidden SVG filters used by the .doodle-* classes in globals.css.
// Each one slightly displaces straight lines so borders look hand-drawn.
//
// Performance: these filters are drawn on the CPU for every element that uses them,
// so they're kept cheap. One octave of noise looks the same as two at this small
// displacement, and sRGB skips a color-space conversion on every pixel.
const filters = [{ id: "doodle-wobble", seed: 3 }];

export default function DoodleFilters() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: "absolute" }}
    >
      {filters.map((f) => (
        <filter key={f.id} id={f.id} colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="1"
            seed={f.seed}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      ))}
    </svg>
  );
}

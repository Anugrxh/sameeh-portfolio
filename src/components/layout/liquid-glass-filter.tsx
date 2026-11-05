import { lensMap } from "@/lib/lens-map";

/**
 * SVG filter behind the liquid-glass effect. Chromium applies it through
 * `backdrop-filter: url(#liquid-lens)`: the centre is frosted, a thin band at
 * the rim stays clear, and the whole backdrop is bent toward the edges like a
 * thick slab of glass. Other engines keep the plain blur fallback.
 */
export function LiquidGlassFilter() {
  return (
    <svg aria-hidden className="pointer-events-none absolute h-0 w-0 overflow-hidden">
      <filter id="liquid-lens" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feImage href={lensMap} preserveAspectRatio="none" result="map" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="soft" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="crispSoft" />
        <feComponentTransfer in="crispSoft" result="crisp">
          <feFuncR type="linear" slope="1.22" />
          <feFuncG type="linear" slope="1.22" />
          <feFuncB type="linear" slope="1.22" />
        </feComponentTransfer>
        <feColorMatrix in="map" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 1 0 0" result="rim" />
        <feComposite in="crisp" in2="rim" operator="in" result="rimClear" />
        <feComposite in="soft" in2="rim" operator="out" result="centreSoft" />
        <feMerge result="mixed">
          <feMergeNode in="centreSoft" />
          <feMergeNode in="rimClear" />
        </feMerge>
        <feDisplacementMap in="mixed" in2="map" scale="40" xChannelSelector="R" yChannelSelector="G" result="bent" />
        <feColorMatrix in="bent" type="saturate" values="1.7" />
      </filter>
    </svg>
  );
}

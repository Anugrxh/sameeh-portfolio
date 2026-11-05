export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="animate-drift-a absolute -left-[10%] -top-[25%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgba(70,96,255,0.28),rgba(70,96,255,0.06)_45%,transparent_72%)] will-change-transform" />
      <div className="animate-drift-b absolute -right-[20%] top-[25%] h-[65vmax] w-[65vmax] rounded-full bg-[radial-gradient(closest-side,rgba(36,170,210,0.2),rgba(36,170,210,0.04)_45%,transparent_72%)] will-change-transform" />
      <div className="animate-drift-c absolute -bottom-[30%] left-[15%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(closest-side,rgba(130,90,255,0.18),rgba(130,90,255,0.03)_45%,transparent_72%)] will-change-transform" />
      <div className="noise absolute inset-0 opacity-[0.045] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,transparent_30%,rgba(5,5,7,0.85)_100%)]" />
    </div>
  );
}

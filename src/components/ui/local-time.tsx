"use client";

import { useSyncExternalStore } from "react";

type LocalTimeProps = {
  timeZone: string;
  className?: string;
};

function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, 1000);
  return () => window.clearInterval(timer);
}

// Cache Components forbids reading the clock during prerender, so the server
// snapshot is empty and the time fills in on the client.
export function LocalTime({ timeZone, className }: LocalTimeProps) {
  const time = useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date()),
    () => null,
  );

  return (
    <span className={className} suppressHydrationWarning>
      {time ?? "--:--"}
    </span>
  );
}

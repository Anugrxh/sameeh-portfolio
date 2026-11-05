"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

// Cache Components forbids reading the clock during prerender, so the server
// snapshot is empty and the real year fills in on the client.
export function Year() {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);
  return <>{year ?? ""}</>;
}

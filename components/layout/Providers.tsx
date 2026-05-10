"use client";

import type { ReactNode } from "react";

// ThemeProvider removed — this is a light-only site and next-themes injects
// an inline <script> that React 19 warns on. Future providers (query clients,
// i18n, etc.) can be added here without re-introducing next-themes.
export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

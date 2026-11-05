import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { LiquidGlassFilter } from "@/components/layout/liquid-glass-filter";
import { LensSupport } from "@/components/layout/lens-support";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} · Product Ops, Data Science & GenAI`;
const description = profile.intro;

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: profile.name }],
  keywords: [
    "Sameeh K",
    "Product Operations",
    "Data Scientist",
    "GenAI Engineer",
    "LangChain",
    "FastAPI",
    "MCP",
    "Kozhikode",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <LiquidGlassFilter />
        <LensSupport />
        {children}
      </body>
    </html>
  );
}

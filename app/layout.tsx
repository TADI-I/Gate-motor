import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-display", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gaterepairspta.co.za"),
  title: "Gate Repairs Pretoria | 24/7 Gate Motor Repairs",
  description: "Fast gate motor repairs, electric fencing, garage doors, CCTV and alarm installations across Pretoria. Free quotes and 24/7 emergency support.",
  openGraph: {
    title: "Gate Repairs Pretoria",
    description: "Your gate should open. Every time. Fast repairs and security installations across Pretoria.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Gate Repairs Pretoria" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${dmSans.variable}`}>{children}</body></html>;
}

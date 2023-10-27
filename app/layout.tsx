import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tchitunda",
  description: "If you can imagine, we can project!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <link rel="shortcut icon" href="/static/favicon.svg" /> 
      <body>{children}</body>
    </html>
  );
}

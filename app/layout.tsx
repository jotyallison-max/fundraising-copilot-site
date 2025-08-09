
export const metadata = {
  title: "Fundraising Co‑Pilot",
  description: "Raise more with an AI co‑pilot for development & grants."
};
import "./globals.css";
import React from "react";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

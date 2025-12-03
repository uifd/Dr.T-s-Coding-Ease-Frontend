import type { Metadata } from "next";
import RootClient from "./wrappers";
import "./tailwind.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roboscribe",
  description: "Coding made easy with Dr. T",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/noscript.css" />
      </head>
      <body>
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}

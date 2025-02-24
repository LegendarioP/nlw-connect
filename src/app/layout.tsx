import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "NLW connect",
  description: "Project created on february by rocketseat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

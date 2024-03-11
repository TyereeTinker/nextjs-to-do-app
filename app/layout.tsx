import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TO-DO APP (NEXTJS)",
  description: "This project was created for learning NEXTJS and Tailwind CSS",
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

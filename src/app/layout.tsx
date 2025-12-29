import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harikishan TK | AI Engineer",
  description: "Portfolio of Harikishan TK - AI Engineer specializing in Machine Learning, Generative AI, and NLP",
  keywords: ["AI Engineer", "Machine Learning", "Generative AI", "Python", "LangChain", "NLP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-claude-bg min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

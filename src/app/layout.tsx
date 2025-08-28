import { ThemeProvider } from "@/contexts/theme-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arifayanidowu.vercel.app"),
  title: "Arifayan Idowu - Full Stack Developer & Software Engineer",
  description:
    "Full Stack Developer and Software Engineer specializing in modern web technologies. Experienced in React, Node.js, and cloud solutions.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Arifayan Idowu" }],
  creator: "Arifayan Idowu",
  openGraph: {
    title: "Arifayan Idowu - Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer and Software Engineer specializing in modern web technologies.",
    url: "https://arifayanidowu.vercel.app/",
    siteName: "Arifayan Idowu Portfolio",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "Arifayan Idowu - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arifayan Idowu - Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer and Software Engineer specializing in modern web technologies.",
    images: ["/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

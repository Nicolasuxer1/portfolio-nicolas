import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicolás Vargas — Product Designer",
  description:
    "Senior Product Designer specialising in SaaS and B2B products. Case studies in product thinking, interaction design, and design systems.",
};

// Runs synchronously before first paint — prevents flash of wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-canvas text-text-primary font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/background";
import { Navbar } from "@/components/nav";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anova ",
  description: "Anova Club Data Science",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "../public/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen`}
      >
        <div className="fixed inset-0 z-0">
          <Background />
        </div>
        <div className="relative mt-28   z-10 min-h-screen">
          <header className="px-4  md:px-8 lg:px-16">
            <Navbar />
          </header>
          <main className="px-4 md:px-8 lg:px-16">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}

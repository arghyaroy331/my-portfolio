import type { Metadata } from "next";
import "./globals.css";
import AfterglowBackground from "@/components/AfterglowBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arghya Roy | Aspiring Cloud Engineer",
  description:
    "Personal portfolio of Arghya Roy — Aspiring Cloud Engineer, DevOps, AWS, Linux, Terraform, and Software Developer.",
  keywords: [
    "Arghya Roy",
    "Cloud Engineer",
    "DevOps",
    "AWS",
    "Terraform",
    "Linux",
    "Software Developer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Grand+Hotel&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  const prefDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = saved || (prefDark ? 'dark' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans text-foreground antialiased selection:bg-primary/30 selection:text-white min-h-screen relative overflow-x-hidden flex flex-col justify-between">
        {/* Persistent Dribbble Mario Šimić animated background */}
        <AfterglowBackground />

        {/* Global Multi-page Floating Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <div className="relative z-10 flex-1 w-full pt-16 sm:pt-20">
          {children}
        </div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}

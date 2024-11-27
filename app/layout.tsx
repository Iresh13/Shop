import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navigation/navbar/navbar";
import Footer from "@/components/navigation/footer/footer";

const parkinsans = localFont({
  src: "./fonts/ParkinsansVF.ttf",
  variable: "--font-parkinsans",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "100 300 200 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Shopping",
  description: "Shop Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${parkinsans.className}  ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem={true}
          attribute="class"
        >
          <Navbar />
          {children}

          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

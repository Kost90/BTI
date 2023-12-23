import StoreProvider from "./StoreProvider";
import { Inter } from "next/font/google";
import CssBaseline from "@mui/material/CssBaseline";

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "МОЄ БТІ",
  description: "Оформлення нерухомості в Одесі",
};

export const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          <CssBaseline />
          <div className="layout">
            <Header />
            <main className="main">
              {children}
              <Footer />
            </main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}

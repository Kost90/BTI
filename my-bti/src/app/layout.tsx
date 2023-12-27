import StoreProvider from "./StoreProvider";
import { Inter } from "next/font/google";
import CssBaseline from "@mui/material/CssBaseline";

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ThemeContainer from "@/containers/themecontainer/ThemeContainer";

export const metadata: Metadata = {
  title: "ГЕСТІЯ-БТІ",
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
          <ThemeContainer>
            <Header />
            <main className="main">
              {children}
              <Footer />
            </main>
          </ThemeContainer>
        </StoreProvider>
      </body>
    </html>
  );
}

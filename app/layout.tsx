import type { Metadata } from "next";
import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"] });
import "./globals.css";
import ClerkProvider from "@/providers/clerk-provider";

export const metadata: Metadata = {
  title: "Foritu - Ders"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}

export default Layout;

import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Israfil Hossain",
  description: "Created by Israfil Hossain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

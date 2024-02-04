import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Countdown app",
  description: "Build for Anna Dalla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}

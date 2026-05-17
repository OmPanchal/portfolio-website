import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GeneralProvider } from "@/context/GeneralContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OP's Website",
  description: "My portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* <GeneralProvider> */}
      <body className="min-h-full flex flex-col">{children}</body>
      {/* </GeneralProvider> */}
    </html>
  );
}

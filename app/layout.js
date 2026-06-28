import { GeneralProvider } from "@/context/GeneralContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <GeneralProvider>
        <body className="min-h-full flex flex-col">{children}</body>
      </GeneralProvider>
    </html>
  );
}

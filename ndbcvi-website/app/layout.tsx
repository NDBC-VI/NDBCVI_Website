import "./globals.css";

import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <div id="portal" />
        <Footer />
      </body>
    </html>
  );
}

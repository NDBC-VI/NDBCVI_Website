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
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="./assets/pngs/church-logo.png"
        />
        <title>NDBCVI</title>
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

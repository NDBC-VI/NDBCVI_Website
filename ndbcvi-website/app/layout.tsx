import "./globals.css";

import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import { SanityDocument } from "sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { bannerQuery, eventsPopupQuery, faqPopupQuery } from "@/sanity/lib/queries";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const faqPopup: SanityDocument = await sanityFetch<SanityDocument>({ query: faqPopupQuery });
  const eventsPopup: SanityDocument = await sanityFetch<SanityDocument>({query: eventsPopupQuery});
  const banner: SanityDocument = await sanityFetch<SanityDocument>({ query: bannerQuery });

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
      <body>
        <Navbar eventsPopup={eventsPopup} faqPopup={faqPopup} banner={banner} />
        {children}
        <div id="portal" />
        <Footer />
      </body>
    </html>
  );
}

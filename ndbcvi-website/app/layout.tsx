import "./globals.css";

import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import { SanityDocument } from "sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { bannerQuery, eventsQuery, faqPopupQuery } from "@/sanity/lib/queries";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const faqPopup: SanityDocument = await sanityFetch<SanityDocument>({ query: faqPopupQuery });
  const banner: SanityDocument = await sanityFetch<SanityDocument>({ query: bannerQuery });
  const events: SanityDocument[] = await sanityFetch<SanityDocument[]>({query: eventsQuery});

  return (
    <html lang="en">
      <body className="relative">
        <Navbar banner={banner} events={events} faqPopup={faqPopup} />
        {children}
        <div id="portal" />
        <Footer />
      </body>
    </html>
  );
}

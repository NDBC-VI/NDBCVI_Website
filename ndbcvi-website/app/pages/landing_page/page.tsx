import Hero from "./sections/Hero";
import LeadingWithLove from "./sections/LeadingWithLove";
import CommunityLife from "./sections/CommunityLife";
import WorshipSection from "./sections/WorshipSection";
import BeABlessing from "./sections/BeABlessing";
import Testimonies from "./sections/Testimonies";
import MoreAboutNewDawn from "./sections/MoreAboutNewDawn";
import { SanityDocument } from "sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allInfoPopupsQuery } from "@/sanity/lib/queries";

const LandingPage = async () => {
  
  const allInfoPopups: SanityDocument[] = await sanityFetch<SanityDocument[]>({ query: allInfoPopupsQuery });

  return (
    <>
      <Hero />
      <LeadingWithLove />
      <CommunityLife />
      <WorshipSection />
      <BeABlessing infoPopups={allInfoPopups} />
      <Testimonies />
      <MoreAboutNewDawn />
    </>
  );
};

export default LandingPage;

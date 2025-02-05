import Hero from "./sections/Hero";
import LeadingWithLove from "./sections/LeadingWithLove";
import CommunityLife from "./sections/CommunityLife";
import WorshipSection from "./sections/WorshipSection";
import BeABlessing from "./sections/BeABlessing";
import Testimonies from "./sections/Testimonies";
import MoreAboutNewDawn from "./sections/MoreAboutNewDawn";
import { SanityDocument } from "sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { homePageQuery } from "@/sanity/lib/queries";

type homePageContentType = {
  locateUsLink: string,
  testimoniesLink: string,
  testimonies: SanityDocument[],
  infoPopups: SanityDocument[]
}

const LandingPage = async () => {
  const { locateUsLink, testimoniesLink, testimonies, infoPopups } = await sanityFetch<homePageContentType>({ query: homePageQuery });  

  return (
    <>
      <Hero />
      <LeadingWithLove />
      <CommunityLife />
      <WorshipSection locationLink={locateUsLink} />
      <BeABlessing infoPopups={infoPopups} />
      <Testimonies testimonies={testimonies} testimoniesShareLink={testimoniesLink} />
      <MoreAboutNewDawn />
    </>
  );
};

export default LandingPage;

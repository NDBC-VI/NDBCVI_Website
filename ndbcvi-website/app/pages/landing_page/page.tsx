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
import { getCountries, getCountryCallingCode } from "libphonenumber-js";

const LandingPage = async () => {
  
  const allInfoPopups: SanityDocument[] = await sanityFetch<SanityDocument[]>({ query: allInfoPopupsQuery });

  return (
    <>
      <div className="bg-white w-full h-[50vh] mt-[50vh] overflow-scroll">
        <ul>
          {/* {getCountries().map(country => <li>{country}</li>)} */}
          {getCountries().filter(country => getCountryCallingCode(country) === "44")}
        </ul>
      </div>
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

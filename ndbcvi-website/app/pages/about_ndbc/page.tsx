import AboutNDBC from "./sections/AboutNDBC";
import MoreAboutNewDawn from "./sections/MoreAboutNewDawn";
import CommunityLife from "./sections/CommunityLife";
import MissionAndVision from "./sections/MissionAndVision";
import { SanityDocument } from "sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { aboutPageQuery } from "@/sanity/lib/queries";
import { DeaconList, MinistryLeadList, ReverendList } from "@/app/types";
import { Reverends } from "./sections/Reverends";
import Deacons from "./sections/Deacons";
import MinistryLeads from "./sections/MinistryLeads";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";


const AboutNdbc = async () => {
  const aboutPage: SanityDocument = await sanityFetch<SanityDocument>({ query: aboutPageQuery });
  const images = aboutPage.aboutNdbcImages as SanityImageObject[];
  const communityActivities = aboutPage.communityActivities as SanityDocument[];
  const { reverendsSection, deaconsSection, ministryLeadsSection } = aboutPage;
  // console.log(aboutPage);

  return (
    <>
      <AboutNDBC images={images}/>
      <CommunityLife activities={communityActivities} />
      <MissionAndVision />
      <Reverends reverends={reverendsSection as ReverendList} />
      <Deacons deacons={deaconsSection as DeaconList} />
      <MinistryLeads ministryLeads={ministryLeadsSection as MinistryLeadList} />
      <MoreAboutNewDawn />
    </>
  );
};

export default AboutNdbc;

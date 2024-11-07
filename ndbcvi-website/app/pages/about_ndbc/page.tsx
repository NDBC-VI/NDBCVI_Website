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

const AboutNdbc = async () => {
  const people: SanityDocument[] = await sanityFetch<SanityDocument[]>({ query: aboutPageQuery });
  const reverends: ReverendList = people.find(list => list.title === "Reverends of NDBC") as unknown as ReverendList;
  const deacons: DeaconList = people.find(list => list.title === "Deacons 2024") as unknown as DeaconList;
  const ministryLeads: MinistryLeadList = people.find(list => list.title === "Ministry Leads") as unknown as MinistryLeadList;

  return (
    <>
      <AboutNDBC />
      <CommunityLife />
      <MissionAndVision />
      <Reverends reverends={reverends} />
      <Deacons deacons={deacons} />
      <MinistryLeads ministryLeads={ministryLeads} />
      <MoreAboutNewDawn />
    </>
  );
};

export default AboutNdbc;

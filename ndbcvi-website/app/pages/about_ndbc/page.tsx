import AboutNDBC from "./sections/AboutNDBC";
import MoreAboutNewDawn from "./sections/MoreAboutNewDawn";
import CommunityLife from "./sections/CommunityLife";
import MissionAndVision from "./sections/MissionAndVision";
import Deacons from "./sections/Deacons";
import MinistryLeads from "./sections/MinistryLeads";
import { SanityDocument } from "sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { aboutPageQuery } from "@/sanity/lib/queries";
import { PortableText, PortableTextBlock } from "next-sanity";
import { ReverendsList } from "@/app/test-sanity/ReverendsList";
import { PeopleList } from "@/app/test-sanity/PeopleList";



  interface ReverendList {
    title: string,
    description: PortableTextBlock,
    reverendList: SanityDocument[]
  }
  
  interface DeaconList {
    title: string,
    description: PortableTextBlock,
    deaconList: SanityDocument[]
  }

  interface MinistryLeadList {
    title: string,
    description: PortableTextBlock,
    ministryLeadList: SanityDocument[]
  }

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
      <div className='w-full flex flex-col items-center z-0'>
        <div className='w-full flex flex-row justify-between px-[5vw] mb-[5vh] text-right'>
          <h2 className='text-4xl font-semibold'>Reverends</h2>
          <div className='w-1/3 self-end'>
            <PortableText value={reverends.description} />
          </div>
        </div>
        <div className='w-full flex flex-row justify-center my-5'>
          <ReverendsList list={reverends.reverendList}  />
        </div>

        <div className='w-full flex flex-row justify-between px-[5vw] text-right mt-[15vh] mb-[5vh]'>
          <h2 className='text-4xl font-semibold'>Deacons</h2>
          <div className='w-1/3 self-end'>
            <PortableText value={deacons.description} />
          </div>        
        </div>
        <PeopleList list={deacons.deaconList} />

        <div className='w-full flex flex-row justify-between px-[5vw] text-right mt-[15vh] mb-[5vh]'>
          <h2 className='text-4xl font-semibold'>Ministry Leads</h2>
          <div className='w-1/3 self-end'>
            <PortableText value={ministryLeads.description} />
          </div>
        </div>
        <PeopleList list={ministryLeads.ministryLeadList} />
      </div>
      {/* <Deacons />
      <MinistryLeads /> */}
      <MoreAboutNewDawn />
    </>
  );
};

export default AboutNdbc;

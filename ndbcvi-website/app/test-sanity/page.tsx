import { sanityFetch } from '@/sanity/lib/fetch';
import { aboutPageQuery } from '@/sanity/lib/queries';

import { PortableText, SanityDocument } from 'next-sanity';
import { PeopleList } from './PeopleList';
import { ReverendsList } from './ReverendsList';

export const revalidate = 60;

export default async function Home() {
  
  // const allInfoPopups: SanityDocument[] = await sanityFetch<SanityDocument[]>({ query: allInfoPopupsQuery });
  // const events: SanityDocument[] = await sanityFetch<SanityDocument[]>({query: eventsQuery});
  const people: SanityDocument = await sanityFetch<SanityDocument>({ query: aboutPageQuery });
  // console.log(people);

  const reverends = people.find((list: SanityDocument) => list.title === "Reverends");
  const deacons = people.find((list: SanityDocument) => list.title === "Deacons 2024");
  const ministryLeads = people.find((list: SanityDocument) => list.title === "Ministry Leads 2024");

  return (
    <main className="w-full py-20 flex flex-col items-center mt-[100px]">

      {/* <div id="container" className='w-[90vw] h-[50vh] bg-white flex flex-row justify-center'>
        <div className='mx-1 rounded-xl cursor-pointer flex-[0.5] hover:flex-[1.5] transition-all ease-out duration-500 bg-red-200'></div>
        <div className='mx-1 rounded-xl cursor-pointer flex-[0.5] hover:flex-[1.5] transition-all ease-out duration-1000 bg-orange-200'></div>
        <div className='mx-1 rounded-xl cursor-pointer flex-[0.5] hover:flex-[1.5] transition-all ease-out duration-1000 bg-yellow-200'></div>
        <div className='mx-1 rounded-xl cursor-pointer flex-[0.5] hover:flex-[1.5] transition-all ease-out duration-1000 bg-green-200'></div>
        <div className='mx-1 rounded-xl cursor-pointer flex-[0.5] hover:flex-[1.5] transition-all ease-out duration-1000 bg-blue-200'></div>
        <div className='mx-1 rounded-xl cursor-pointer flex-[0.5] hover:flex-[1.5] transition-all ease-out duration-1000 bg-indigo-200'></div>
        <div className='mx-1 rounded-xl cursor-pointer flex-[0.5] hover:flex-[1.5] transition-all ease-out duration-1000 bg-violet-200'></div>
      </div> */}


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

      {/* <InvitationsSection popups={allInfoPopups} events={events} /> */}
    
    </main>

  );
}

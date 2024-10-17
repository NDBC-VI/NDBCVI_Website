import { sanityFetch } from '@/sanity/lib/fetch';
import { allInfoPopupsQuery } from '@/sanity/lib/queries';

import { SanityDocument } from 'next-sanity';
// import { Calendar } from '../components/Calendar';
import { InvitationsSection } from '../views/InvitationsSection';

export const revalidate = 60;

export default async function Home() {
  
  const allInfoPopups: SanityDocument[] = await sanityFetch<SanityDocument[]>({ query: allInfoPopupsQuery });
  
  return (
    <div className="w-full h-[300vh] pt-10 pb-20 flex flex-col items-center">


      <InvitationsSection popups={allInfoPopups} />
    
    </div>

  );
}

import { sanityFetch } from '@/sanity/lib/fetch';
import { allInfoPopupsQuery, bannerQuery, eventsQuery } from '@/sanity/lib/queries';

import { SanityDocument } from 'next-sanity';
import { InvitationsSection } from '../views/InvitationsSection';
import { Banner } from '../shared/components/Banner';

export const revalidate = 60;

export default async function Home() {
  
  const allInfoPopups: SanityDocument[] = await sanityFetch<SanityDocument[]>({ query: allInfoPopupsQuery });
  const banner: SanityDocument = await sanityFetch<SanityDocument>({ query: bannerQuery });
  const events: SanityDocument[] = await sanityFetch<SanityDocument[]>({query: eventsQuery});
  // const faqPopup: SanityDocument = await sanityFetch<SanityDocument>({ query: faqPopupQuery });
  
  return (
    <main className="w-full py-20 flex flex-col items-center bg-yellow-500 mt-[100px]">
      <Banner bannerProps={banner} />

      <InvitationsSection popups={allInfoPopups} events={events} />
    
    </main>

  );
}

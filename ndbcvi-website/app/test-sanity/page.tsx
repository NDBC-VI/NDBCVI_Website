import { sanityFetch } from '@/sanity/lib/fetch';
import { allInfoPopupsQuery, bannerQuery } from '@/sanity/lib/queries';

import { SanityDocument } from 'next-sanity';
import { InvitationsSection } from '../views/InvitationsSection';
import { Banner } from '../views/Banner';

export const revalidate = 60;

export default async function Home() {
  
  const allInfoPopups: SanityDocument[] = await sanityFetch<SanityDocument[]>({ query: allInfoPopupsQuery });
  const banner: SanityDocument = await sanityFetch<SanityDocument>({ query: bannerQuery });
  
  return (
    <div className="w-full h-[300vh] pt-10 pb-20 flex flex-col items-center">
      <Banner bannerProps={banner[0]} />
      <InvitationsSection popups={allInfoPopups} />
    
    </div>

  );
}

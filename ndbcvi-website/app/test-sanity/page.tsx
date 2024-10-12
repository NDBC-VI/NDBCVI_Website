import { sanityFetch } from '@/sanity/lib/fetch';
import { infoSectionsQuery, ministriesPopupImagesQuery } from '@/sanity/lib/queries';
import { SanityDocument } from 'sanity';

import { MinistryModal } from "../views/MinistryModal";
import singleImage from '@/sanity/schemaTypes/singleImage';

export const revalidate = 60;

export default async function Home() {

  const ministries = await sanityFetch<SanityDocument[]>({ query: infoSectionsQuery });
  const ministriesImages = await sanityFetch<SanityDocument[]>({ query: ministriesPopupImagesQuery });

  return (
    <div className="h-full w-full pt-10 pb-20 flex flex-col items-center bg-black">

      <MinistryModal images={ministriesImages} infoSections={ministries} />
      {/* <iframe src="https://calendar.google.com/calendar/embed?src=ndbcvidev%40gmail.com&ctz=Africa%2FLagos" style={{border:"0", width:"80vw", height:"60vh"}}></iframe> */}
    
    </div>

  );
}

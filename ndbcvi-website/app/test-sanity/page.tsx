import { sanityFetch } from '@/sanity/lib/fetch';
import { allInfoPopupsQuery } from '@/sanity/lib/queries';

import { InfoModal } from "../views/InfoModal";
import { InfoPopupProps } from '../types';
import { SanityDocument } from 'next-sanity';

export const revalidate = 60;

export default async function Home() {
  
  const allInfoPopups = await sanityFetch<SanityDocument[]>({ query: allInfoPopupsQuery });

  const activePopup = allInfoPopups.find(popup => popup.slug.current === "membership-popup");

  const infoModalProps: InfoPopupProps = {
    introduction: activePopup?.introduction,
    title: activePopup?.title,
    slug: { 
        current: activePopup?.slug.current,
    },
    headerImages: activePopup?.headerImages,
    infoSections: [...activePopup?.infoSections]
  }

  
  return (
    <div className="w-full pt-10 pb-20 flex flex-col items-center bg-black">

      <InfoModal {...infoModalProps} />
      {/* <iframe src="https://calendar.google.com/calendar/embed?src=ndbcvidev%40gmail.com&ctz=Africa%2FLagos" style={{border:"0", width:"80vw", height:"60vh"}}></iframe> */}
    
    </div>

  );
}

import { sanityFetch } from '@/sanity/lib/fetch';
import { allInfoPopupsQuery } from '@/sanity/lib/queries';

import { InfoModal } from "../views/InfoModal";
import { InfoPopupProps } from '../types';
import { SanityDocument } from 'next-sanity';

export const revalidate = 60;

export default async function Home() {
  
  const allInfoPopups: SanityDocument[] = await sanityFetch<SanityDocument[]>({ query: allInfoPopupsQuery });

  const activePopup = allInfoPopups.find(popup => popup.slug.current === "membership-popup");
  
  return (
    <div className="w-full h-[300vh] pt-10 pb-20 flex flex-col items-center bg-green-200">
      <div className='w-full absolute top-[90%] flex flex-row items-center bg-white'>
        {
          allInfoPopups.map((infoPopup: SanityDocument) => {
            const infoModalProps: InfoPopupProps = {
              introduction: infoPopup?.introduction,
              title: infoPopup?.title,
              slug: { 
                  current: infoPopup?.slug.current,
              },
              headerImages: infoPopup?.headerImages,
              infoSections: [...infoPopup?.infoSections]
            }
            return (
              <div key={infoPopup.slug.current} className='relative h-screen grow border-2'>
                <InfoModal {...infoModalProps} />
              </div>
            );
          })
        }
      </div>
      {/* <iframe src="https://calendar.google.com/calendar/embed?src=ndbcvidev%40gmail.com&ctz=Africa%2FLagos" style={{border:"0", width:"80vw", height:"60vh"}}></iframe> */}
    
    </div>

  );
}

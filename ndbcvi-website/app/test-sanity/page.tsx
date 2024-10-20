import { sanityFetch } from '@/sanity/lib/fetch';
import { allInfoPopupsQuery, bannerQuery, faqPopupQuery } from '@/sanity/lib/queries';

import { SanityDocument } from 'next-sanity';
import { InvitationsSection } from '../views/InvitationsSection';
import { Banner } from '../components/Banner';
import { FaqModalPropsType } from '../types';

export const revalidate = 60;

export default async function Home() {
  
  const allInfoPopups: SanityDocument[] = await sanityFetch<SanityDocument[]>({ query: allInfoPopupsQuery });
  const banner: SanityDocument = await sanityFetch<SanityDocument>({ query: bannerQuery });
  const faqPopup: SanityDocument = await sanityFetch<SanityDocument>({ query: faqPopupQuery });
  const faqModalTest: FaqModalPropsType = {
    title: faqPopup.title,
    slug: { 
        current: faqPopup.slug.current,
    },
    faqSections: faqPopup.faqSection,
    faqInfoSections: faqPopup.faqInfoSections
  }
  
  return (
    <div className="w-full pt-10 pb-20 flex flex-col items-center overflow-x-hidden">
      <Banner bannerProps={banner} />

      <InvitationsSection popups={allInfoPopups} test={faqModalTest} />
    
    </div>

  );
}

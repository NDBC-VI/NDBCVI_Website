import { sanityFetch } from '@/sanity/lib/fetch';
import { homePageQuery } from '@/sanity/lib/queries';

import { SanityDocument } from 'next-sanity';



export const revalidate = 60;

export default async function Home() {
  
  const homePageContent: SanityDocument = await sanityFetch<SanityDocument>({ query: homePageQuery });

 
  return (
    <main className="w-full py-20 flex flex-col items-center mt-[100px]">
      <div className="w-full h-[40vh] bg-blue-300">
        {homePageContent.locateUsLink}
      </div>
    </main>

  );
}

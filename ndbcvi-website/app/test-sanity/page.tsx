import { sanityFetch } from "@/sanity/lib/fetch";
import { infoSectionsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import InfoSections from "../components/InfoSections";


export default async function Home() {

  const infoSections = await sanityFetch<SanityDocument[]>({ query: infoSectionsQuery })
  return (
    <div>
      <h1 className="text-5xl text-center font-semibold" >Hello Wooooorld!!!!!</h1>
      <main>
        <InfoSections infoSections={infoSections} />
      </main>
    
    </div>

  );
}

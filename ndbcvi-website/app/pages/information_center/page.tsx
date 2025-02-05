import { sanityFetch } from "@/sanity/lib/fetch";
import HearFromYou from "./sections/HearFromYou";
import Maps from "./sections/Maps";
import { SanityDocument } from "next-sanity";
import { joinMinistryPageQuery } from "@/sanity/lib/queries";

type joinMinistryContentType = {
  contactOptions: SanityDocument[],
  submitLink: string
}
const InformationCenter = async () => {
  const { contactOptions, submitLink } = await sanityFetch<joinMinistryContentType>({ query: joinMinistryPageQuery });

  return (
    <>
      <HearFromYou contactOptions={contactOptions} submitLink={submitLink}/>
      <Maps />
    </>
  );
};

export default InformationCenter;

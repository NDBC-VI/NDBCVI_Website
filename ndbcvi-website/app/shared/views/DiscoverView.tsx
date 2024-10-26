import Link from "next/link";
import { ModalTemplate } from "../modals/ModalTemplate";
import { FaqModalContent } from "../modals/FaqModal/FaqModalContent";
import { EventsModalContent } from "../modals/EventsModal/EventsModalContent";
import { useNavBarContext } from "@/app/context/navBarContext";

const discoverLinks = [
  "About New Dawn",
  "Media",
  "Information Centre",
  "Events",
  "Donations",
  "Partners",
  "Hausa Church",
];
const DiscoverView = () => {
  const {events, faqPopup} = useNavBarContext();
  
  return (
    <div className="flex flex-col gap-[16px] justify-start">
      {discoverLinks.map((link, i) => {
        if(link === "Information Centre") {
          return (
            <ModalTemplate 
              modalActivator={
                <div>
                  <button type="button" className="text-[30px] font-[600]">
                    {link}
                  </button>
                </div>} 
              modalContent={<FaqModalContent faqs={faqPopup} />} 
            />
          )
        }

        else if(link === "Events") {
          return (
            <ModalTemplate 
              modalActivator={
                <div>
                  <button type="button" className="text-[30px] font-[600]">
                    {link}
                  </button>
                </div>} 
              modalContent={<EventsModalContent events={events} />}
            />
          )
        }
        return (
          <div key={i}>
            <button type="button" className="text-[30px] font-[600]">
              {link}
            </button>
          </div>
        );  
      })}    
    </div>
  );
};

export default DiscoverView;

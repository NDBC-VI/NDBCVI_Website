import { ModalTemplate } from "../modals/ModalTemplate";
import { FaqModalContent } from "../modals/FaqModal/FaqModalContent";
import { EventsModalContent } from "../modals/EventsModal/EventsModalContent";
import { useNavBarContext } from "@/app/context/navBarContext";
import Link from "next/link";
import { MouseEventHandler } from "react";

interface ViewProps {
  clickFn: MouseEventHandler<HTMLButtonElement>;
}

const discoverLinks = [
  { title: "About New Dawn", path: "/pages/about_ndbc", id: 1 },
  { title: "Media", path: "/pages/media", id: 2 },
  { title: "Information Center", path: "/pages/information_center", id: 3 },
  { title: "Events", path: "", id: 4 },
  { title: "Donations", path: "", id: 5 },
  { title: "Partners", path: "", id: 6 },
  { title: "Hausa Church", path: "", id: 7 },
];
const DiscoverView = ({ clickFn }: ViewProps) => {
  const {eventsPopup, faqPopup} = useNavBarContext();
  
  return (
    <div className='flex flex-col gap-[16px] justify-start'>
      {discoverLinks.map((link) => {
        if(link.title === "Information Centre") {
          return (
            <ModalTemplate 
              key={link.id}
              modalActivator={
                <div>
                  <button type="button" className="text-[30px] font-[600]">
                    {link.title}
                  </button>
                </div>} 
              modalContent={<FaqModalContent faqs={faqPopup} />} 
            />
          )
        }

        else if(link.title === "Events") {
          return (
            <ModalTemplate 
              key={link.id}
              modalActivator={
                <div>
                  <button type="button" className="text-[30px] font-[600]">
                    {link.title}
                  </button>
                </div>} 
              modalContent={<EventsModalContent />}
            />
          )
        }
        return (
          <Link
            key={link.id}
            href={link.path}
          >
            <button
              type="button"
              className="text-[30px] font-[600]"
              onClick={clickFn}
            >
              {link.title}
            </button>
          </Link>
        );  
      })}    
    </div>
  );
};

export default DiscoverView;

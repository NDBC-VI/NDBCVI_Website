import { ModalTemplate } from "../modals/ModalTemplate";
import { FaqModalContent } from "../modals/FaqModal/FaqModalContent";
import { EventsModalContent } from "../modals/EventsModal/EventsModalContent";
import { useNavBarContext } from "@/app/context/navBarContext";
import { MouseEventHandler } from "react";
import { MenuLink } from "./MenuLink";

interface ViewProps {
  clickFn: MouseEventHandler<HTMLButtonElement>;
}

const discoverLinks = [
  { title: "About New Dawn", path: "/pages/about_ndbc", id: 1 },
  { title: "Media", path: "/pages/media", id: 2 },
  { title: "Information Center", path: "", id: 3 },
  { title: "Events", path: "", id: 4 },
  { title: "Donations", path: "", id: 5 },
  { title: "Partners", path: "", id: 6 },
  { title: "Hausa Church", path: "", id: 7 },
];
const DiscoverView = ({ clickFn }: ViewProps) => {
  const {faqPopup} = useNavBarContext();
  
  return (
    <div className='flex flex-col gap-[16px] justify-start whitespace-nowrap'>
      {discoverLinks.map((link) => {
        if(link.title === "Information Center") {
          return (
            <ModalTemplate
              key={link.id}
              modalActivator={
                <MenuLink 
                  link={link}
                />
              }
              modalContent={<FaqModalContent faqs={faqPopup} />}
            />
          )
        }

        else if(link.title === "Events") {
          return (
            <ModalTemplate 
              key={link.id}
              modalActivator={
                <MenuLink 
                  link={link}
                />
              }
              modalContent={<EventsModalContent />} 
            />
          )
        }
        return (
          <MenuLink key={link.id} link={link} clickFn={clickFn}/>
        );  
      })}    
    </div>
  );
};

export default DiscoverView;

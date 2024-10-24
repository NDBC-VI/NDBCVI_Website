"use client";
import Link from "next/link";
import churchLogo from "../../assets/pngs/church-logo.png";
import menuIcon from "./../../assets/svgs/menu.svg";
import Image from "next/image";
import CustomBtn from "./CustomBtn";
import MenuModal from "../modals/MenuModal";
import { useState } from "react";
import { ModalTemplate } from "@/app/shared/modals/ModalTemplate";
import { EventsModalContent } from "@/app/views/modal-views/EventsModalContent";
import { SanityDocument } from "next-sanity";
import { Banner } from "./Banner";
import { FaqModalContent } from "@/app/views/modal-views/FaqModalContent";

const Navbar = ({banner, events, faqPopup}: {banner: SanityDocument, events: SanityDocument[], faqPopup: SanityDocument}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full flex flex-col">
      <Banner bannerProps={banner} />
      <nav className=" px-[60px] py-[20px] flex items-center justify-between text-white z-10 bg-black bg-opacity-40 backdrop-blur-lg">
        <div className="flex gap-[48px] items-center text-[20px] font-[500]">
          <Link
            href="/"
            children={
              <Image
                src={churchLogo}
                alt="Church logo"
                width={43.5}
                height={48}
              />
            }
          />
          <Link href="/pages/about_ndbc" children={<p>About NDBC</p>} />
          <ModalTemplate 
            modalActivator={<Link href=""><p>Events</p></Link>} 
            modalContent={<EventsModalContent events={events} />}
          />
          <ModalTemplate 
            modalActivator={<Link href=""><p>Information Center</p></Link>} 
            modalContent={<FaqModalContent faqs={faqPopup} />} 
          />
          {/* <Link href="" children={<p>Events</p>} /> */}
          {/* <Link href="" children={<p>Information Center</p>} /> */}
        </div>
        <CustomBtn
          title="Menu"
          icon={menuIcon}
          hasIcon
          btnFn={() => setIsOpen(true)}
        />
        <MenuModal onClose={() => setIsOpen(false)} isOpen={isOpen} />
      </nav>
    </div>
  );
};

export default Navbar;

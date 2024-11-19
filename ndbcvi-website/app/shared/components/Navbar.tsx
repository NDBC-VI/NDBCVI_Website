"use client";
import Link from "next/link";
import churchLogo from "../../assets/pngs/church-logo.png";
import menuIcon from "./../../assets/svgs/menu.svg";
import Image from "next/image";
import CustomBtn from "./CustomBtn";
import MenuModal from "../modals/MenuModal";
import { useState } from "react";
import { ModalTemplate } from "@/app/shared/modals/ModalTemplate";
import { EventsModalContent } from "../modals/EventsModal/EventsModalContent";
import { FaqModalContent } from "../modals/FaqModal/FaqModalContent";
import { SanityDocument } from "next-sanity";
import { NavBarContext } from "@/app/context/navBarContext";

const Navbar = ({
  banner,
  eventsPopup,
  faqPopup,
}: {
  banner: SanityDocument;
  eventsPopup: SanityDocument;
  faqPopup: SanityDocument;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <NavBarContext.Provider value={{ eventsPopup, faqPopup, banner }}>
      <div
        className={`fixed top-0 w-full flex flex-col transition ease-in duration-1500 ${bannerVisible && !isOpen ? "" : `-translate-y-[126px] lg:-translate-y-[62px]`}`}
        style={{ zIndex: 1 }}
      >
        <div
          id="banner"
          className={`w-full flex py-[18px] px-[20px] bg-[#1D1841] lg:justify-center lg:items-center z-20`}
        >
          <div className="w-[80%] flex flex-col gap-[18px] text-[16px] font-[500] text-left lg:flex-row justify-center">
            <div id="bannerText" className="max-h-[46px] lg:max-h-[26px] lg:max-w-[400px] overflow-hidden">
              <p className="text-white">{banner.content}</p>
            </div>
            <Link
              target="_blank"
              href={banner.link}
              className="text-white text-[16px] font-[500] underline"
            >
              {banner.linkText}
            </Link>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            onClick={() => setBannerVisible(false)}
            className="size-6 absolute right-10 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <nav className="px-[20px] md:px-[60px] py-[20px] flex items-center justify-between text-white z-10 bg-black bg-opacity-40 backdrop-blur-lg">
          <div className="flex gap-[48px] items-center text-[20px] font-[500]">
            <Link href="/">
              <Image
                src={churchLogo}
                alt="Church logo"
                width={43.5}
                height={48}
              />
            </Link>
            <Link href="/pages/about_ndbc">
              <p className="">About NDBC</p>
            </Link>
            <ModalTemplate
              modalActivator={
                <Link href="">
                  <p className="hidden md:block">Events</p>
                </Link>
              }
              modalContent={<EventsModalContent />}
            />
            <ModalTemplate
              modalActivator={
                <Link href="">
                  <p className="hidden md:block">Information Center</p>
                </Link>
              }
              modalContent={<FaqModalContent faqs={faqPopup} />}
            />
          </div>
          <div className="hidden md:block">
            <CustomBtn
              title="Menu"
              icon={menuIcon}
              hasIcon
              btnFn={() => setIsOpen(true)}
            />
          </div>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Image src={menuIcon} width={24} alt="menu icon" />
          </button>
          <MenuModal onClose={() => setIsOpen(false)} isOpen={isOpen} />
        </nav>
      </div>
    </NavBarContext.Provider>
  );
};

export default Navbar;

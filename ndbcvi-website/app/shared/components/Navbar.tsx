"use client";

import "../../globals.css"
import Link from "next/link";
import churchLogo from "../../assets/pngs/church-logo.png";
import menuIcon from "./../../assets/svgs/menu.svg";
import Image from "next/image";
import CustomBtn from "./CustomBtn";
import MenuModal from "../modals/MenuModal";
import { useEffect, useRef, useState } from "react";
import { ModalTemplate } from "@/app/shared/modals/ModalTemplate";
import { EventsModalContent } from "../modals/EventsModal/EventsModalContent";
import { FaqModalContent } from "../modals/FaqModal/FaqModalContent";
import { SanityDocument } from "next-sanity";
import { NavBarContext } from "@/app/context/navBarContext";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();
  const updateCurrentPage = () => {
    switch(pathname){
      case "/pages/about_ndbc":
        return "About NDBC";
        case "/pages/information_center":
          return "Information Center";
      case "/pages/media":
        return "Media";
      default:
        return "New Dawn Baptist Church";
    }
  }

  
  const bannerTextRef = useRef<HTMLDivElement>(null);
  const bannerTextContainerRef = useRef<HTMLDivElement>(null);
  const [scrollDuration, setScrollDuration] = useState(0);

  const scrollAnimationStyle = {
    animation: `scrollText ${scrollDuration}s linear infinite`,
  }
  
  useEffect(() => {
    let textLength = 0;
    let containerLength = 0;
    // If the screen is less than large, check if the text is taller than its container. Else, check if the text is longer than its container
    if(window.innerWidth <= 600) {
      textLength = bannerTextRef.current?.offsetHeight || 0;
      containerLength = bannerTextContainerRef.current?.offsetHeight || 0;
    }
    else {
      textLength = bannerTextRef.current?.offsetWidth || 0;
      containerLength = bannerTextContainerRef.current?.offsetWidth || 0;
    }
    
    if(textLength > containerLength) {
      setScrollDuration(textLength/50); // Calculate duration of one iteration of the scroll animation using a 50 characters/s rate
    }
  }, []);

  return (
    <NavBarContext.Provider value={{ eventsPopup, faqPopup, banner }}>
      <div
        className={`fixed top-0 w-full flex flex-col transition ease-in duration-[1500] ${bannerVisible && !isOpen ? "" : `-translate-y-[126px] lg:-translate-y-[62px]`}`}
        style={{ zIndex: 11 }}
      >
        <div
          id="banner"
          className={`w-full flex py-[18px] px-[20px] bg-[#1D1841] lg:justify-center lg:items-center ${bannerVisible && !isOpen ? '' : 'animate-[hideElement_2s_ease-in_1_forwards]'}`}
        >
          <div className="w-[90%] flex flex-col gap-[18px] text-[16px] font-[500] text-left lg:flex-row justify-center">
            <div ref={bannerTextContainerRef} id="bannerText" className="flex max-w-[90%] max-h-[46px] lg:max-h-[26px] lg:max-w-[40%] lg:justify-start overflow-hidden">
              <p ref={bannerTextRef} className={`text-white lg:shrink-0`} style={scrollAnimationStyle}>
                {banner.content}
              </p>
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

        <nav className="px-[20px] md:px-[60px] py-[20px] flex items-center justify-between text-white bg-black bg-opacity-40 backdrop-blur-lg">
          <div className="flex gap-[48px] items-center text-[20px] font-[500]">
            <Link href="/">
              <Image
                src={churchLogo}
                alt="Church logo"
                width={43.5}
                height={48}
              />
            </Link>
            <div className="hidden md:flex flex-row items-center gap-[48px]">
              <Link href="/pages/about_ndbc">
                <p>About NDBC</p>
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
          </div>
          <div id="pageName" className="md:hidden  text-[20px] font-[500]">
            {
              updateCurrentPage()
            }
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

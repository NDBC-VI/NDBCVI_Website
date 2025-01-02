"use client";

import churchLogo from "../../assets/pngs/church-logo.png";
import whiteMapPin from "../../assets/svgs/map-pin-white.svg";
import Image from "next/image";
import CustomBtn from "../components/CustomBtn";
import youtube from "../../assets/svgs/youtube-menu.svg";
import spotify from "../../assets/svgs/spotify-menu.svg";
import facebook from "../../assets/svgs/facebook-menu.svg";
import x from "../../assets/svgs/x-menu.svg";
import close_black from "../../assets/svgs/close-menu-black.svg";
import close_white from "../../assets/svgs/close-menu-white.svg";
import TabBtn from "../components/TabBtn";
import { useState, useMemo, MouseEventHandler, useEffect } from "react";
import DiscoverView from "../views/DiscoverView";
import TakeActionView from "../views/TakeActionView";
import { PortableText } from "next-sanity";
import { calcTimeDelta } from "react-countdown";
import { urlFor } from "@/sanity/lib/image";
import { useNavBarContext } from "@/app/context/navBarContext";

const modalTabs: string[] = ["Discover", "Take action"];

interface MenuModalProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

const MenuModal = ({ onClose, isOpen }: MenuModalProps) => {
  const { eventsPopup } = useNavBarContext();
  const upcomingEvent = eventsPopup?.upcomingEvents[0];

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (isOpen) {
        html.style.overflow = "hidden";
      } else {
        html.style.overflow = "";
      }
    }

    // Cleanup on component unmount
    return () => {
      if (html) {
        html.style.overflow = "";
      }
    };
  }, [isOpen]);

  const [isActive, setIsActive] = useState(modalTabs[0]);

  const { days, hours, minutes } = calcTimeDelta(upcomingEvent?.startDate);

  const view = useMemo(() => {
    switch (isActive) {
      case "Discover":
        return <DiscoverView clickFn={onClose} />;
      case "Take action":
        return <TakeActionView />;
    }
  }, [isActive, onClose]);

  return (
    <section
      className={`absolute z-20 top-0 ${
        isOpen ? "right-0" : "right-[-100%]"
      } bg-white w-full flex flex-col md:overflow-hidden md:flex-row-reverse transition-all duration-500 h-[104dvh] overflow-y-auto`}
    >
      <div className="md:w-1/2 p-10 text-black flex flex-col ">
        <div className="flex justify-between">
          <div className="flex gap-4">
            {modalTabs.map((tab, i) => (
              <TabBtn
                title={tab}
                key={i}
                active={isActive === tab}
                clickFn={() => setIsActive(tab)}
              />
            ))}
          </div>
          <button type="button" className="hidden md:block" onClick={onClose}>
            <Image src={close_black} alt="close icon" width={20} />
          </button>
        </div>

        <div className="mt-[45px]">{view}</div>
        <div className="flex flex-col-reverse gap-[24px] lg:gap-0 lg:items-end h-full lg:flex-row lg:justify-between mt-[48px] md:mt-0">
          <p className="text-[#757575] text-[18px] font-[500] align-bottom">
            © 2024 New Dawn Baptist Church
          </p>
          <div className="flex gap-[18px]">
            <Image
              src={youtube}
              alt="youtube"
              className="opacity-40 cursor-pointer hover:opacity-100"
            />
            <Image
              src={spotify}
              alt="spotify"
              className="opacity-40 cursor-pointer hover:opacity-100"
            />
            <Image
              src={facebook}
              alt="facebook"
              className="opacity-40 cursor-pointer hover:opacity-100"
            />
            <Image
              src={x}
              alt="x"
              className="opacity-40 cursor-pointer hover:opacity-100"
            />
          </div>
        </div>
        <div className="w-fit h-full absolute bottom-0 right-0 mr-10 mix-blend-difference">
          <button
            type="button"
            className="w-fit md:hidden sticky top-[3rem] left-[100%]"
            onClick={onClose}
          >
            <Image src={close_white} alt="close icon" width={20} />
          </button>
        </div>
      </div>
      <div className="md:w-1/2 bg-[#1D1841] p-10 h-fit md:h-auto">
        <Image src={churchLogo} alt="church logo" width={43} />
        <div className="flex flex-col gap-[36px] mt-[45px]">
          <div>
            <h2 className="text-[42px] font-[600] mb-[18px]">Upcoming Event</h2>
            <div className="flex gap-[16px]">
              <p className="text-[20px] font-[600]">
                {days} <span className="text-[#C4C4C4]">days</span>
              </p>
              <p className="text-[20px] font-[600]">
                {hours} <span className="text-[#C4C4C4]">hours</span>
              </p>
              <p className="text-[20px] font-[600]">
                {minutes} <span className="text-[#C4C4C4]">minutes</span>
              </p>
            </div>
          </div>
          <a
            className="flex gap-[6px] items-center text-[18px] font-[500] cursor-pointer underline"
            href={upcomingEvent?.googleMapsLink}
            target="_blank"
          >
            <Image src={whiteMapPin} alt="map pin" width={24} />
            <p className="text-[18px] font-[500] cursor-pointer underline">
              Open location in Maps
            </p>
          </a>
          <div
            style={{
              backgroundImage: `url(${urlFor(upcomingEvent?.image?.asset?._ref)})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="lg:w-1/2 relative rounded-[24px] h-[370px]"
          >
            <div className="bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 w-full h-full rounded-[24px]"></div>
            <div className="absolute bottom-0 p-[16px]">
              <h3 className="text-[28px] font-[600] leading-[35px] mb-[13px]">
                {upcomingEvent?.title}
              </h3>
              <div className="mb-[13px]">
                <PortableText value={upcomingEvent?.content} />
              </div>
              <CustomBtn title="Add to calendar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuModal;

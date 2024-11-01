import churchLogo from "../../assets/pngs/church-logo.png";
import mapPin from "../../assets/svgs/map-pin.svg";
import Image from "next/image";
import CustomBtn from "../components/CustomBtn";
import youtube from "../../assets/svgs/youtube-menu.svg";
import spotify from "../../assets/svgs/spotify-menu.svg";
import facebook from "../../assets/svgs/facebook-menu.svg";
import x from "../../assets/svgs/x-menu.svg";
import close from "../../assets/svgs/close-menu.svg";
import TabBtn from "../components/TabBtn";
import { useState, useMemo, MouseEventHandler } from "react";
import DiscoverView from "../views/DiscoverView";
import TakeActionView from "../views/TakeActionView";
import { PortableText, SanityDocument } from "next-sanity";
import { calcTimeDelta } from "react-countdown";
import { urlFor } from "@/sanity/lib/image";
import { useNavBarContext } from "@/app/context/navBarContext";

const modalTabs: string[] = ["Discover", "Take action"];

interface MenuModalProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

const MenuModal = ({onClose, isOpen }: MenuModalProps) => {
  const {events} = useNavBarContext();

  const [isActive, setIsActive] = useState(modalTabs[0]);

  const {days, hours, minutes} = calcTimeDelta(events[0].startDate);

  const view = useMemo(() => {
    switch (isActive) {
      case "Discover":
        return <DiscoverView />;
      case "Take action":
        return <TakeActionView />;
    }
  }, [isActive]);
  return (
    <section
      className={`absolute z-20 top-0 ${
        isOpen ? "right-0" : "right-[-100%]"
      } bg-white w-full h-screen  flex transition-all duration-500`}
    >
      <div className="w-1/2 bg-[#1D1841] p-10">
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
          <a className="flex gap-[6px] items-center text-[18px] font-[500] cursor-pointer underline" href={events[0].googleMapsLink} target="_blank">
            <Image src={mapPin} alt="map pin" width={24} />
            <p className="text-[18px] font-[500] cursor-pointer underline">
              Open location in Maps
            </p>
          </a>
          <div
            style={{
              backgroundImage: `url(${urlFor(events[0].image.asset._ref)})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="w-1/2 relative rounded-[24px] h-[370px]"
          >
            <div className="bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 w-full h-full rounded-[24px]"></div>
            <div className="absolute bottom-0 p-[16px]">
              <h3 className="text-[28px] font-[600] leading-[35px] mb-[13px]">
                {events[0].title}
              </h3>
              <div className="mb-[13px]">
                <PortableText value={events[0].content}/>
              </div>
              <CustomBtn title="Add to calendar" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-10 text-black flex flex-col ">
        <div className="flex justify-between">
          <div className="flex gap-[18px]">
            <Image src={youtube} alt="youtube" />
            <Image src={spotify} alt="spotify" />
            <Image src={facebook} alt="facebook" />
            <Image src={x} alt="x" />
          </div>
          <button type="button" onClick={onClose}>
            <Image src={close} alt="close icon" width={20} />
          </button>
        </div>
        <div className="flex mt-[75px] gap-4">
          {modalTabs.map((tab, i) => (
            <TabBtn
              title={tab}
              key={i}
              active={isActive === tab}
              clickFn={() => setIsActive(tab)}
            />
          ))}
        </div>
        <div className="mt-[45px]">{view}</div>
        <div className="flex items-end h-full">
          <p className="text-[#757575] text-[18px] font-[500] align-bottom">
            © 2024 New Dawn Baptist Church
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuModal;

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

const modalTabs: string[] = ["Discover", "Take action"];

interface MenuModalProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

const MenuModal = ({ onClose, isOpen }: MenuModalProps) => {
  const [isActive, setIsActive] = useState(modalTabs[0]);

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
            <h2 className="text-[42px] font-[600] mb-[18px]">Upcoming event</h2>
            <div className="flex gap-[16px]">
              <p className="text-[20px] font-[600]">
                07 <span className="text-[#C4C4C4]">days</span>
              </p>
              <p className="text-[20px] font-[600]">
                38 <span className="text-[#C4C4C4]">hours</span>
              </p>
              <p className="text-[20px] font-[600]">
                18 <span className="text-[#C4C4C4]">minutes</span>
              </p>
            </div>
          </div>
          <div className="flex gap-[6px] items-center">
            <Image src={mapPin} alt="map pin" width={24} />
            <p className="text-[18px] font-[500] cursor-pointer underline">
              Open location in Maps
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(https://s3-alpha-sig.figma.com/img/42eb/9575/a261892c28d9275d03f514abcc4d276c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwB119Oh0~oRZpwvb8E2puOidN2MdgTB6MSmH~yz~YHTWCf9XI-9FX8PSoWQ~r~fWXzo2ydPz9fH4JGd9Wyzrbff1hDI1DFuYEpWJOb7te9-akBWQv0r63SxsOMHsjXM7NAD2T6evo46sX0SlbUL8chIxMUX2lXuRpIf26mycuhfZi-Ah9-Bq-6xpyG9pQVvFzvVYL1j7FyESdqFOtDfo-qU8Zfv27cDb568WSAfGUMAT5yvCCVZnatRRVwZj4UQiO9lJ6kS5BtmIObH9iTAG04KoxlB7jFFW1dIuDE9rbgwfhytBtkkfXUx03dG9FG0xNaGXrmO6Jge9nvG7MZGlQ__)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="w-1/2 relative rounded-[24px] h-[370px]"
          >
            <div className="bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 w-full h-full rounded-[24px]"></div>
            <div className="absolute bottom-0 p-[16px]">
              <h3 className="text-[28px] font-[600] leading-[35px] mb-[13px]">
                Back to School Outreach
              </h3>
              <p className="mb-[13px]">
                In publishing and graphic design, lorem ipsum is a placeholder
                text used to demonstrate the visual form of a document.
              </p>
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

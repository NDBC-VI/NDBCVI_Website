import Image from "next/image";
import communityLife from "../assets/pngs/coomunity-life.png";
import whiteNavArrow from "../../../assets/svgs/nav-arrow-white.svg";
import greyNavArrow from "../../../assets/svgs/nav-arrow-grey.svg";

const CommunityLife = () => {
  return (
    <section className="bg-black text-white py-[90px] w-full overflow-x-scroll">
      <div className="px-2 text-center">
        <h2 className="text-[24px] lg:text-[48px] font-[600] mb-[18px]">Community life</h2>
        <p className="text-[18px] lg:leading-[25.2px] lg:text-[24px] lg:leading-[33.6px]">
          We believe in dynamic Christian worship as the foundation for daily
          life, and <br className="hidden md:block" /> we strive to teach sound Biblical principles with
          love as our guiding <br className="hidden md:block" /> principle.
        </p>
      </div>
      <div className="mt-[96px] flex flex-col items-center relative">
        <div className="text-center mb-10 lg:absolute lg:top-[22%] 2xl:left-[18%] lg:text-left lg:left-[7%]">
          <h2 className="text-[20px] lg:text-[48px] font-[600]">Activity name</h2>
          <p className="text-[16px] lg:text-[20px] leading-[26px]">
            Add mage description, age <br /> group, activity, fellowship etc.
          </p>
        </div>
        <button
          type="button"
          className="relative right-[22.5%] top-[622px] lg:right-0 lg:top-0 bg-[#202020] rounded-[100px] py-2 px-6 mb-6 text-[18px]"
        >
          Tag
        </button>
        <div className="relative">
          <Image src={communityLife} alt="community life image" width={336} />
        </div>
        <div className="flex gap-[6px] mt-6">
          <Image src={greyNavArrow} alt="nav arrow left" className="rotate-180"/>
          <Image src={whiteNavArrow} alt="nav arrow right" />
        </div>
      </div>
    </section>
  );
};

export default CommunityLife;

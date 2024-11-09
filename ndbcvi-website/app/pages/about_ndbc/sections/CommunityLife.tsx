import Image from "next/image";
import communityLife from "../assets/pngs/coomunity-life.png";
import navArrowWhite from "../../../assets/svgs/nav-arrow-white.svg";
import navArrowGrey from "../../../assets/svgs/nav-arrow-grey.svg";

const CommunityLife = () => {
  return (
    <section className="bg-black text-white py-[90px]">
      <div className="text-center">
        <h2 className="text-[48px] font-[600] mb-[18px]">Community life</h2>
        <p className="text-[24px] leading-[33.6px]">
          We believe in dynamic Christian worship as the foundation for daily
          life, and <br /> we strive to teach sound Biblical principles with
          love as our guiding <br /> principle.
        </p>
      </div>
      <div className="mt-[96px] flex flex-col items-center relative">
        <button
          type="button"
          className="bg-[#202020] rounded-[100px] py-2 px-6 mb-6 text-[18px]"
        >
          Tag
        </button>
        <div className="relative">
          <Image src={communityLife} alt="community life image" width={336} />
        </div>
        <div className="flex gap-[6px] mt-6">
          <Image src={navArrowGrey} alt="nav arrow left" className="rotate-180"/>
          <Image src={navArrowWhite} alt="nav arrow right" />
        </div>
        <div className="absolute top-[22%] 2xl:left-[18%] left-[7%]">
          <h2 className="text-[48px] font-[600]">Activity name</h2>
          <p className="text-[20px] leading-[26px]">
            Add mage description, age <br /> group, activity, fellowship etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityLife;

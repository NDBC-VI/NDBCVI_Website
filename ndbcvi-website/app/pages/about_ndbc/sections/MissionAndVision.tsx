import Image from "next/image";
import navArrowGrey from "../../../assets/svgs/nav-arrow-grey.svg";
import navArrowWhite from "../../../assets/svgs/nav-arrow-white.svg";
const MissionAndVision = () => {
  return (
    <section className="py-[120px] px-[40px]">
      <div className="max-w-[1392px] mx-auto flex gap-[24px]">
        <div className="bg-black text-white h-[460px] max-w-1/4 w-full rounded-[24px] flex items-end pb-[24px] pl-[36px]">
          <div className="w-full">
            <p className="text-[24px] font-[600] text-[#757575]">
              <span className="text-white">1</span>/3
            </p>
            <h2 className="text-[38px] font-[600]">
              Our <br /> Mission
            </h2>
            <div className="flex gap-[6px]">
              <Image src={navArrowGrey} alt="nav left icon" className="rotate-180"/>
              <Image src={navArrowWhite} alt="nav right icon" />
            </div>
          </div>
        </div>
        <div className=" bg-[#F6F6F6] rounded-[24px] flex grow">
          <div className="w-[33%] flex items-end px-[20px] mb-[36px]">
            <div>
              <h2 className="text-[36px] font-[600] mb-[30px]">Reveal</h2>
              <p className="text-[20px]">
                We believe in dynamic Christian worship as the foundation for
                daily life, and we strive to teach sound Biblical principles
                with love as our guiding principle.
              </p>
            </div>
          </div>
          <div className="w-[33%] border-x-[2px] flex items-end px-[20px] mb-[36px]">
            <div>
              <h2 className="text-[36px] font-[600] mb-[30px] heading-text">
                Raise
              </h2>
              <p className="text-[20px]">
                We believe in dynamic Christian worship as the foundation for
                daily life, and we strive to teach sound Biblical principles
                with love as our guiding principle.
              </p>
            </div>
          </div>
          <div className="w-[33%] flex items-end px-[20px] mb-[36px]">
            <div>
              <h2 className="text-[36px] font-[600] mb-[30px]">Restore</h2>
              <p className="text-[20px]">
                We believe in dynamic Christian worship as the foundation for
                daily life, and we strive to teach sound Biblical principles
                with love as our guiding principle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;

import Image from "next/image";
import navArrowLeft from "../../../assets/svgs/nav-arrow-left.svg";
import navArrowRight from "../../../assets/svgs/nav-arrow-right-white.svg";
import blackNavArrowRight from "../../../assets/svgs/nav-arrow-right-black.svg";
const MissionAndVision = () => {
  return (
    <section className="py-[120px] px-[40px]">
      <div className="w-full max-w-[1392px] mx-auto flex flex-col lg:flex-row gap-[24px]">
        <div className="bg-black text-white w-full h-[111px] rounded-[18px] flex justify-between items-end pb-[24px] pr-[24px] pl-[36px]
              lg:h-[460px] lg:w-1/4 lg:rounded-[24px] lg:flex-col lg:justify-end lg:items-start">
          <div className="flex flex-col">
            <p className="text-[18px] font-[500] lg:text-[24px] lg:font-[600] text-[#757575]">
              <span className="text-white">1</span>/3
            </p>
            <h2 className="text-[24px] lg:text-[38px] font-[600]">
              Our <br className="hidden lg:block" /> Mission
            </h2>
          </div>
          <div className="flex gap-[8px] lg:gap-[6px]">
            <Image src={navArrowLeft} alt="nav left icon" />
            <Image src={navArrowRight} alt="nav right icon" />
          </div>
        </div>
        <div className="w-full overflow-x-scroll flex gap-[1px]">
          {/* <div className="h-full w-fit flex grow"> */}
            <div className="h-[270px] w-[80%] shrink-0 mr-5 px-4 py-2 rounded-[18px] bg-[#F6F6F6] flex items-end
                  lg:h-full lg:w-[33%] lg:mr-0 lg:rounded-l-[24px] lg:rounded-r-none lg:border-r-[2px] lg:border-[#D9D9D9] lg:flex lg:px-[20px] lg:pb-[36px]">
              <div>
                <h2 className="text-[24px] lg:text-[36px] font-[600] mb-[30px]">Reveal</h2>
                <p className="text-[18px] lg:text-[20px]">
                  We believe in dynamic Christian worship as the foundation for
                  daily life, and we strive to teach sound Biblical principles
                  with love as our guiding principle.
                </p>
              </div>
            </div>
            <div className="h-[270px] w-[80%] shrink-0 mr-5 px-4 py-2 rounded-[18px] bg-[#F6F6F6] flex items-end
                  lg:h-full lg:w-[33%] lg:mr-0 lg:rounded-none lg:border-r-[2px] lg:border-[#D9D9D9] lg:flex lg:px-[20px] lg:pb-[36px]">
              <div>
                <h2 className="text-[24px] lg:text-[36px] font-[600] mb-[30px] heading-text">
                  Raise
                </h2>
                <p className="text-[18px] lg:text-[20px]">
                  We believe in dynamic Christian worship as the foundation for
                  daily life, and we strive to teach sound Biblical principles
                  with love as our guiding principle.
                </p>
              </div>
            </div>
            <div className="h-[270px] w-[80%] shrink-0 px-4 py-2 rounded-[18px] bg-[#F6F6F6] flex items-end
                  lg:h-full lg:w-[33%] lg:mr-0 lg:rounded-r-[24px] lg:rounded-l-none lg:flex lg:px-[20px] lg:pb-[36px]">
              <div>
                <h2 className="text-[24px] lg:text-[36px] font-[600] mb-[30px]">Restore</h2>
                <p className="text-[18px] lg:text-[20px]">
                  We believe in dynamic Christian worship as the foundation for
                  daily life, and we strive to teach sound Biblical principles
                  with love as our guiding principle.
                </p>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="lg:hidden flex gap-[8px] lg:gap-[6px]">
          <Image src={navArrowLeft} alt="nav left icon" />
          <Image src={blackNavArrowRight} alt="nav right icon" />
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;

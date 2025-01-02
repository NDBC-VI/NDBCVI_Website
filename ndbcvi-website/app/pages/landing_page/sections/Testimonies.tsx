import Image from "next/image";
import whiteRightArrow from "../../../assets/svgs/white-right-arrow.svg";
import whiteNavArrow from "../../../assets/svgs/nav-arrow-white.svg";
import greyNavArrow from "../../../assets/svgs/nav-arrow-grey.svg";

const Testimonies = () => {
  return (
    <section>
      <div className="max-w-[1512px] mx-auto flex flex-col md:flex-row text-white">
        <div className="md:w-1/2 bg-black flex items-center md:pl-[45px] px-[30px] md:px-0 py-[200px] md:py-0">
          <div>
            <h2 className="text-[45px]">Testimonies</h2>
            <div className="max-w-[423px] mt-[12px] mb-20">
              <p className="text-[20px]">
                We believe in dynamic Christian worship as the foundation for
                daily life, and we strive to teach sound Biblical principles.
              </p>
            </div>
            <button
              type="button"
              className="bg-transparent border border-white rounded-[100px] flex gap-2 py-3 px-[18px]"
            >
              <p className="text-[500]">Share with us</p>
              <Image src={whiteRightArrow} alt="right arrow" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="w-full px-[35px] py-[65px] bg-[#2C2563]">
            <p className="text-[23px] font-[300]">
              “In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. Lorem
              ipsum may be used as a placeholder before the final copy is
              available.”
            </p>
          </div>
          <div className="w-full bg-[#1D1841] p-[35px] flex justify-between items center">
            <h3 className="text-[40px]">Insert tag here</h3>
            <div className="flex gap-[6px] items center">
              <Image src={greyNavArrow} alt="nav left" className="rotate-180" />
              <Image src={whiteNavArrow} alt="nav right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;

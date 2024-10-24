import Image from "next/image";
import whiteRightArrow from "../../../assets/svgs/white-right-arrow.svg";
import navRightArrow from "../../../assets/svgs/nav-arrow-right.svg";
import navLeftArrow from "../../../assets/svgs/nav-arrow-left.svg";

const Testimonies = () => {
  return (
    <section>
      <div className="max-w-[1512px] mx-auto flex text-white">
        <div className="w-1/2 bg-black flex items-center pl-[45px]">
          <div>
            <h2 className="text-[45px] font-[600]">Testimonies</h2>
            <div className="max-w-[423px] mt-[12px] mb-[36px]">
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
        <div className="w-1/2">
          <div className="w-full bg-[#1D1841] p-[35px] flex justify-between items center">
            <h3 className="text-[40px] font-[600]">Insert tag here</h3>
            <div className="flex gap-[6px] items center">
              <Image src={navLeftArrow} alt="nac left" />
              <Image src={navRightArrow} alt="nac right" />
            </div>
          </div>
          <div className="w-full px-[35px] py-[65px] bg-[#2C2563]">
            <p className="text-[26px]">
              “In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. Lorem
              ipsum may be used as a placeholder before the final copy is
              available.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;

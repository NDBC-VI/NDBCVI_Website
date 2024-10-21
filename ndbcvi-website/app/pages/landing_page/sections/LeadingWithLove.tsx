import Image from "next/image";
import rightArrow from "../../../assets/svgs/right-arrow.svg";
const LeadingWithLove = () => {
  return (
    <section className="pl-[60px] pr-[83px] py-[120px]  ">
      <div className="max-w-[1512px] mx-auto flex gap-[236px]">
        <div className="w-1/2">
          <h1 className="text-[60px] font-[600] leading-[72.61px]">
            Leading with love
          </h1>
          <p className="text-[20px] mt-6">
            Join us and experience the love of God at NDBC
          </p>
          <button
            type="button"
            className="flex items-center gap-2 bg-[#2C2563] py-[13.5px] px-[18px] font-[500] rounded-[100px] text-white mt-[48px]"
          >
            <p>Learn more about us</p>
            <Image src={rightArrow} alt="right arrow" />
          </button>
        </div>
        <div className="flex flex-col w-[50%] leading-[33px] gap-[40px]">
          <p>
            At New Dawn Baptist Church (NDBC or New Dawn), we are a dynamic and
            Christ-centered community that believes in leading with love. Our
            ministry is centered around compassion, grace, and understanding,
            following the example of Jesus.
          </p>
          <p>
            We believe in dynamic Christian worship as the foundation for daily
            life, and we strive to teach sound Biblical principles with love as
            our guiding principle.
          </p>
          <p>
            Our goal is to create a community of acceptance and belonging where
            every person, regardless of background, is welcome to worship and
            grow in faith. With boldness and passion, we declare the truth and
            reveal and apply Biblical truth to every area of life. Join us and
            experience the love of God at NDBC
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadingWithLove;

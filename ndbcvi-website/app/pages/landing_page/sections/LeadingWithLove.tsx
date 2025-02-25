import Image from "next/image";
import rightArrow from "../../../assets/svgs/right-arrow.svg";
import heroImg from "../../../assets/pngs/hero-img.png";

const LeadingWithLove = () => {
  return (
    <section className="">
      <div className="max-w-[1512px] mx-auto flex flex-col md:flex-row ">
        <div className="md:w-1/2 md:px-[60px] px-[20px] py-[80px]">
          <h1 className="md:text-[55px] text-[36px]  leading-[72.61px] mb-[40px]">
            Leading with love
          </h1>
          <div className="flex flex-col  leading-[30px] gap-[24px]">
            <p>
              At New Dawn Baptist Church (NDBC or New Dawn), we are a dynamic
              and Christ-centered community that believes in leading with love.
              Our ministry is centered around compassion, grace, and
              understanding, following the example of Jesus.
            </p>
            <p>
              We believe in dynamic Christian worship as the foundation for
              daily life, and we strive to teach sound Biblical principles with
              love as our guiding principle.
            </p>
            <p>
              Our goal is to create a community of acceptance and belonging
              where every person, regardless of background, is welcome to
              worship and grow in faith. With boldness and passion, we declare
              the truth and reveal and apply Biblical truth to every area of
              life. Join us and experience the love of God at NDBC
            </p>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <Image src={heroImg} alt="hero img" className="object-fill h-full" />
          <div className="absolute bottom-[-3%] px-[30px] md:px-0 md:pl-[48px] text-white flex md:items-end w-full h-full">
            <div className="flex flex-col items-center justify-center md:items-start md:mb-[120px] w-full">
              <h3 className="md:text-[36px] text-center text-[24px] font-[500] leading-[32px] md:text-start md:font-[600] md:leading-[45px]">
                Join us and experience <br /> the love of God at NDBC
              </h3>
              <div>
                <button
                  type="button"
                  className="flex items-center gap-2 bg-[#2C2563] py-[13.5px] px-[18px] font-[500] rounded-[100px] text-white mt-[18px] md:mt-[28px]"
                >
                  <p>Learn more about us</p>
                  <Image src={rightArrow} alt="right arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingWithLove;

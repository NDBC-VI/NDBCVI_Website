import Image from "next/image";
import rightArrow from "../../../assets/svgs/right-arrow.svg";
import heroImg from "../../../assets/pngs/hero-img.png";

const LeadingWithLove = () => {
  return (
    <section>
      <div className="max-w-[1512px] mx-auto flex flex-col md:flex-row ">
        <div className="md:w-1/2 md:px-[60px] px-[20px] py-[80px]">
          <h1 className="md:text-[55px] text-[36px]  leading-[72.61px] mb-[40px]">
            Leading with love
          </h1>
          <div className="flex flex-col leading-[30px] gap-[24px]">
            <p>
              Welcome to New Dawn Baptist Church (NDBC), a thriving community of believers dedicated to faith, love, and service. 
              Whether you&rsquo;re a first-time visitor or a returning member, we&rsquo;re delighted to share this journey of faith with you. 
              At NDBC, we are committed to revealing Jesus, restoring people, and raising communities. We warmly invite you to 
              experience the worship, fellowship, and connection that make our church a true home
            </p>
          </div>
        </div>
        <div 
          style={{
              backgroundImage: `url(${heroImg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="md:w-1/2 relative text-white flex py-[80px] px-[30px] md:px-[48px] md:items-end">
          {/* <Image src={heroImg} alt="hero img" className="object-fill h-full" /> */}
          {/* <div className="absolute bottom-[-3%] px-[30px] md:px-0 md:pl-[48px] text-white flex md:items-end w-full h-full bg-red-500"> */}
            <div className="flex flex-col items-center justify-center md:items-start w-full py-1">
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
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default LeadingWithLove;

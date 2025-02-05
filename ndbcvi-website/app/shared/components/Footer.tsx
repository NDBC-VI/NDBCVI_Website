import youtube from "../../assets/svgs/youtube.svg";
import spotify from "../../assets/svgs/spotify.svg";
import x from "../../assets/svgs/x.svg";
import facebook from "../../assets/svgs/facebook.svg";
import churchLogo from "../../assets/pngs/church-logo.png";
import heroImg from "../../assets/pngs/hero-img.png";
import Image from "next/image";
import FooterServiceCard from "./FooterServiceCard";

const Footer = () => {
  return (
    <footer className="mt-0 flex flex-col lg:flex-row lg:h-[700px] items-center lg:items-start text-white">
      <div className="w-full h-full px-[20px] py-[50px] lg:w-1/2 lg:px-[60px] lg:pt-[60px] bg-[#1D1841]">
        <div className="flex justify-between">
          <Image src={churchLogo} alt="Church logo" width={43} />
          <div className="flex gap-[24px]">
            <Image src={youtube} alt="Youtube icon" />
            <Image src={spotify} alt="Spotify icon" />
            <Image src={facebook} alt="Facebook icon" />
            <Image src={x} alt="X icon" />
          </div>
        </div>
        <h3 className="mt-[36px] text-[24px] lg:text-[30px] font-[600]">
          New Dawn <br /> Baptist Church
        </h3>
        <div className="flex flex-col gap-[36px] mt-[36px]">
          <div>
            <p className="text-[18px] font-[500] text-[#C4C4C4] mb-[12px]">
              Explore more
            </p>
            <div className="flex flex-wrap gap-[16px] w-[90%] lg:w-full">
              <FooterServiceCard title="Service name" />
              <FooterServiceCard title="Service name" />
              <FooterServiceCard title="Service name" />
            </div>
          </div>
          <div>
            <p className="text-[18px] font-[500] text-[#C4C4C4] mb-[12px]">
              Church Hotline
            </p>
            <p className="text-[20px] font-[500]">01 879 6304 . 01 493 3385</p>
          </div>
          <div>
            <p className="text-[18px] font-[500] text-[#C4C4C4] mb-[12px]">
              Lagos Campus
            </p>
            <p className="text-[20px] font-[500]">
              1 Prince Yomi Daramola St, Oniru, Victoria Island, <br /> Lagos
              106104, Lagos
            </p>
          </div>
        </div>
        <p className="text-[18px] font-[500] text-[#C4C4C4] mt-[48px]">
          © 2024 New Dawn Baptist Church
        </p>
      </div>
      <div className="md:w-1/2 h-full">
        <div className="relative h-full">
          <img
            src={heroImg.src}
            alt="footer image"
            className="h-full object-cover"
          />
          <div className="w-full h-full absolute top-0 flex justify-center items-center">
            <div>
              <div className="text-[18px] font-[500] flex flex-col gap-[10px] lg:flex-row lg:gap-[26px] justify-center">
                <p>Sundays 8am - 11am</p>
                <p>Wednesdays 6pm - 8pm</p>
              </div>
              <h3 className="mt-4 text-[36px] font-[600] leading-[43.57px]">
                Come and worship with us
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// md:h-[105.32vh] xl:h-[101.6vh] 2xl:h-[74.1vh]

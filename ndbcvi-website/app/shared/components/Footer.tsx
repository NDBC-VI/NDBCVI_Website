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

    <footer className="mt-0 flex flex-col min-[820px]:flex-row items-center md:items-start text-white bg-[#1D1841]">
      <div className="w-full h-full px-[20px] py-[50px] min-[820px]:w-1/2 md:px-[60px] md:pt-[60px]">
        <div className="flex justify-between">
          <Image src={churchLogo} alt="Church logo" width={43} />
          <div className="flex gap-[24px]">
            <Image src={youtube} alt="Youtube icon" />
            <Image src={spotify} alt="Spotify icon" />
            <Image src={facebook} alt="Facebook icon" />
            <Image src={x} alt="X icon" />
          </div>
        </div>
        <h3 className="mt-[36px] text-[24px] md:text-[30px] font-[600]">
          New Dawn <br /> Baptist Church
        </h3>
        <div className="flex flex-col gap-[36px] mt-[36px]">
          <div>
            <p className="text-[18px] font-[500] text-[#C4C4C4] mb-[12px]">
              Explore more
            </p>
            <div className="flex flex-wrap gap-[16px] w-[90%] md:w-full">
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
      <div className="w-full h-[600px] min-[820px]:w-1/2 min-[820px]:min-h-[800px] relative">
        <div className="w-full h-full">
          <Image
            src={heroImg.src}
            alt="Footer Image – Church praising God"
            fill
          />
          <div className="w-full h-full absolute top-0 flex justify-center items-center">
            <div>
              <div className="w-full text-center text-[18px] font-[500] flex flex-col gap-[10px] min-[900px]:flex-row md:gap-[26px] justify-center">
                <p>Sundays 8am - 11am</p>
                <p>Wednesdays 6pm - 8pm</p>
              </div>
              <h3 className="mt-4 text-[36px] font-[600] text-center leading-[43.57px]">
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
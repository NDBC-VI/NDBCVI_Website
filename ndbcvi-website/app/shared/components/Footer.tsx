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
    <footer className="mt-0 flex flex-col lg:flex-row items-center text-white">
      <div className="w-full px-[20px] pt-[60px] pb-[62px] lg:w-1/2 lg:px-[60px] lg:pt-[109.5px] lg:pb-[64px] bg-[#1D1841]">
        <div className="flex justify-between">
          <Image src={churchLogo} alt="Church logo" width={43} />
          <div className="flex gap-[24px]">
            <Image src={youtube} alt="Youtube icon" />
            <Image src={spotify} alt="Spotify icon" />
            <Image src={facebook} alt="Facebook icon" />
            <Image src={x} alt="X icon" />
          </div>
        </div>
        <h3 className="mt-[36px] text-[24px] lg:text-[36px] font-[600]">
          New Dawn <br /> Baptist Church
        </h3>
        <div className="flex flex-col gap-[36px] mt-[36px]">
          <div>
            <p className="text-[18px] font-[500] text-[#C4C4C4] mb-[12px]">
              Explore more
            </p>
            <div className="flex flex-wrap gap-[16px] w-4/5 lg:w-full">
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
      <div className="w-full lg:w-1/2">
        <div
          className="flex justify-center items-center"
          style={{
            // height: "98.4vh",
            height: "100%",
            backgroundImage: `url(${heroImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center py-[47.3%] 2xl:py-[35.5%]">
            <div className="text-[18px] font-[500] flex flex-col gap-[10px] lg:flex-row lg:gap-[26px] pl-[30px]">
              <p>Sundays 8am - 11am</p>
              <p>Wednesdays 6pm - 8pm</p>
            </div>
            <h3 className="mt-[36px] text-[36px] font-[600] leading-[43.57px]">
              Come and worship with us
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

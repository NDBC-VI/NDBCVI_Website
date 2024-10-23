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
    <footer className="max-w-[1512px] mx-auto flex items-center text-white">
      <div className="w-1/2 px-[60px] pt-[60px] pb-[38px] bg-[#1D1841]">
        <div className="flex justify-between">
          <Image src={churchLogo} alt="Church logo" width={43} />
          <div className="flex gap-[24px]">
            <Image src={youtube} alt="Youtube icon" />
            <Image src={spotify} alt="Spotify icon" />
            <Image src={facebook} alt="Facebook icon" />
            <Image src={x} alt="X icon" />
          </div>
        </div>
        <h3 className="mt-[36px] text-[36px] font-[600]">
          New Dawn <br /> Baptist Church
        </h3>
        <div className="flex flex-col gap-[48px] mt-[48px]">
          <div>
            <p className="text-[18px] font-[500] text-[#C4C4C4] mb-[18px]">
              Explore more
            </p>
            <div className="flex gap-[16px]">
              <FooterServiceCard title="Service name" />
              <FooterServiceCard title="Service name" />
              <FooterServiceCard title="Service name" />
            </div>
          </div>
          <div>
            <p className="text-[18px] font-[500] text-[#C4C4C4] mb-[18px]">
              Church Hotline
            </p>
            <p className="text-[20px] font-[500]">01 879 6304 . 01 493 3385</p>
          </div>
          <div>
            <p className="text-[18px] font-[500] text-[#C4C4C4] mb-[18px]">
              Lagos Campus
            </p>
            <p className="text-[20px] font-[500]">
              1 Prince Yomi Daramola St, Oniru, Victoria Island, <br /> Lagos
              106104, Lagos
            </p>
          </div>
        </div>
        <p className="text-[18px] font-[500] text-[#C4C4C4] mt-[60px]">
          © 2024 New Dawn Baptist Church
        </p>
      </div>
      <div
        className="w-1/2 flex justify-center items-center"
        style={{
          height: "107.33vh",
          backgroundImage: `url(${heroImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className="flex text-[18px] font-[500]">
            <p>Sundays 8am - 11am</p>
            <p>Sundays 8am - 11am</p>
          </div>
          <h3 className="mt-[36px] text-[36px] font-[600] leading-[43.57px]">
            Come and worship with us
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import mapImg from "../../../assets/pngs/map-img.png";
import Link from "next/link";
import { GeneralCarousel } from "@/app/shared/components/GeneralCarousel";

const WorshipSection = ({ locationLink }: { locationLink: string } ) => {
  const serviceWorshipTimes = [
      <>
        <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full rounded-[10px]"></div>
        <img
          src="https://images.unsplash.com/photo-1596449316135-1f35a59e6eb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="info card img"
          className="object-cover rounded-[10px] w-full h-full"
        />
        <div className="absolute text-white bottom-0 px-[20px] pb-[30px] lg:mx-0 lg:pl-[36px] lg:pb-[48px]">
          <p className="text-[18px] mb-2">
            We believe in Christian worship as the foundation for daily life
          </p>
          <h2 className="text-[24px] lg:text-[40px] lg:leading-[45px]">
            Worship with us by <br /> 8am - 11am on Sundays
          </h2>
        </div>
      </>,
      <>
        <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full rounded-[10px]"></div>
        <img
          src="https://images.unsplash.com/photo-1596449316135-1f35a59e6eb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="info card img"
          className="object-cover rounded-[10px] w-full h-full"
        />
        <div className="absolute text-white bottom-0 px-[20px] pb-[30px] lg:mx-0 lg:pl-[36px] lg:pb-[48px]">
          <p className="text-[18px] mb-2">
            Our Hausa Service is full of fervent worship and praise
          </p>
          <h2 className="text-[24px] lg:text-[40px] lg:leading-[45px]">
            Worship with us by <br /> 11am - 1pm on Sundays
          </h2>
        </div>
      </>
  ];

  
  return (
    <section className="md:px-[60px] px-[20px] pt-[180px]">
      <div className="max-w-[1392px] md:h-[80vh] mx-auto flex md:flex-row flex-col gap-3">
        <div className="md:w-1/2 w-full h-1/3 md:h-full relative">
          <GeneralCarousel items={serviceWorshipTimes}/>
        </div>
        <div className="flex flex-col gap-2 h-full md:h-[99%] md:w-1/2 w-full">
          <div className="relative h-[80%] md:h-1/2">
            <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full rounded-[10px]"></div>
            <img
              src="https://images.unsplash.com/photo-1596449316135-1f35a59e6eb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="info card img"
              className="object-cover rounded-[10px] w-full h-full"
            />
            <div className="absolute text-white bottom-0 px-[20px] pb-[30px] lg:mx-0 lg:pl-[36px] lg:pb-[48px]">
              <p className="text-[18px] mb-2">
                We believe in Christian worship as the foundation for daily life
              </p>
              <h2 className="text-[24px] lg:text-[38px] lg:leading-[45px]">
                Worship with us by <br /> 6:30pm - 7:30pm on Wednesdays
              </h2>
            </div>
          </div>
          <div className="bg-[#F6F6F6] pt-[36px] pb-[24px] px-[36px] lg:pl-[36px] lg:pr-[78px] lg:py-[87px] rounded-[10px] flex md:flex-row flex-col gap-[18px] lg:gap-[48px] w-full md:h-1/2 lg:items-center">
            <div className="h-0 w-[80%] pb-[80%] lg:pb-0 lg:w-[550px] lg:h-[244px] flex self-center mx-auto justify-center relative">
              <Image src={mapImg} alt="map image" fill={true} />
            </div>
            <div className="w-[80%] lg:w-full mx-auto">
              <h2 className="text-[24px] lg:text-[36px] font-[600] lg:leading-[40px] mb-6">
                Locate our centre in VI,
                <br className="lg:hidden" /> Lagos
              </h2>
              <Link
                href={locationLink}
                target="_blank"
              >
                <p className="text-[16px] text-[#2C2563] font-[500] underline">
                  Open in Google Maps
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipSection;

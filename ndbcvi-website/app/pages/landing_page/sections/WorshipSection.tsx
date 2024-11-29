import Image from "next/image";
import mapImg from "../../../assets/pngs/map-img.png";
import Link from "next/link";
const WorshipSection = () => {
  return (
    <section className="md:px-[60px] px-[20px] pt-[120px]">
      <div className="max-w-[1392px] md:h-[80vh] mx-auto flex md:flex-row flex-col gap-3">
        <div className="md:w-1/2 w-full h-1/3 md:h-full relative">
          <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full rounded-[10px]"></div>
          <img
            src="https://images.unsplash.com/photo-1596449316135-1f35a59e6eb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="info card img"
            className="object-cover rounded-[10px] w-full h-full"
          />
          <div className="absolute text-white bottom-0 px-[20px] pb-[30px] lg:mx-0 lg:pl-[36px] lg:pb-[48px]">
            <p className="text-[18px] mb-[16px]">
              We believe in Christian worship as the foundation for daily life
            </p>
            <h2 className="text-[24px] lg:text-[40px] font-[600]">
              Worship with us by <br /> 8am - 11am on Sundays
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:h-[99%] md:w-1/2 w-full">
          <div className="relative lg:h-1/2">
            <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full rounded-[10px]"></div>
            <img
              src="https://images.unsplash.com/photo-1596449316135-1f35a59e6eb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="info card img"
              className="object-cover rounded-[10px] w-full h-full"
            />
            <div className="absolute text-white bottom-0 px-[20px] pb-[30px] lg:mx-0 lg:pl-[36px] lg:pb-[48px]">
              <p className="text-[18px] mb-[16px]">
                We believe in Christian worship as the foundation for daily life
              </p>
              <h2 className="text-[24px] lg:text-[40px] font-[600]">
                Worship with us by <br /> 6pm - 8pm on Wednesdays
              </h2>
            </div>
          </div>
          <div className="bg-[#F6F6F6] pt-[36px] pb-[24px] px-[20px] lg:pl-[36px] lg:pr-[78px] lg:py-[87px] rounded-[10px] flex md:flex-row flex-col gap-[18px] lg:gap-[48px] w-full lg:h-1/2 lg:items-center">
            <div className="h-0 w-[80%] pb-[80%] lg:pb-0 lg:w-[550px] lg:h-[244px] flex self-center mx-auto justify-center relative">
              <Image src={mapImg} alt="map image" fill={true} />
            </div>
            <div className="w-[80%] lg:w-full mx-auto">
              <h2 className="text-[24px] lg:text-[36px] font-[600] lg:leading-[43.57px] mb-6">
                Locate our centre in VI,<br className="lg:hidden"/> Lagos
              </h2>

              <Link
                href="https://www.google.com/maps/place/New+Dawn+Baptist+Church/@6.4281179,3.4498356,14z/data=!4m6!3m5!1s0x103bf513ff9bd641:0x596799a9108ac311!8m2!3d6.4245334!4d3.4463048!16s%2Fg%2F11cm10mf2g?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
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

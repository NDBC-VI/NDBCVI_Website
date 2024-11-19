import Image from "next/image";
import mapImg from "../../../assets/pngs/map-img.png";
import Link from "next/link";
const WorshipSection = () => {
  return (
    <section className="md:px-[60px] px-[20px] pt-[120px]">
      <div className="max-w-[1392px] mx-auto flex md:flex-row flex-col gap-3">
        <div className="md:w-1/2 w-full relative">
          <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full rounded-[10px]"></div>
          <img
            src="https://images.unsplash.com/photo-1596449316135-1f35a59e6eb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="info card img"
            className="object-cover rounded-[10px]  h-full"
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
        <div className="flex flex-col gap-2 md:w-1/2 w-full">
          <div className="relative">
            <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full rounded-[10px]"></div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1596449316135-1f35a59e6eb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="info card img"
                className="object-cover rounded-[10px] h-1/2"
              />
            </div>
            <div className="absolute text-white bottom-0 px-[20px] pb-[30px] lg:mx-0 lg:pl-[36px] lg:pb-[48px]">
              <p className="text-[18px] mb-[16px]">
                We believe in Christian worship as the foundation for daily life
              </p>
              <h2 className="text-[24px] lg:text-[40px] font-[600]">
                Worship with us by <br /> 6pm - 8pm on Wednesdays
              </h2>
            </div>
          </div>
          <div className="bg-[#F6F6F6] pl-[36px] pr-[78px] py-[87px] rounded-[10px] flex lg:flex-row flex-col gap-[48px] w-full items-center">
            <div className="w-full h-[250px] lg:w-[550px] lg:h-[244px] flex self-center mx-auto justify-center relative">
              <Image src={mapImg} alt="map image" fill={true} />
            </div>
            <div>
              <h2 className="text-[36px] font-[600] leading-[43.57px] mb-6">
                Locate our centre in VI, Lagos
              </h2>

              <Link
                href="https://www.google.com/maps/place/New+Dawn+Baptist+Church/@6.4281179,3.4498356,14z/data=!4m6!3m5!1s0x103bf513ff9bd641:0x596799a9108ac311!8m2!3d6.4245334!4d3.4463048!16s%2Fg%2F11cm10mf2g?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <p className="text-[#2C2563] font-[500] underline">
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

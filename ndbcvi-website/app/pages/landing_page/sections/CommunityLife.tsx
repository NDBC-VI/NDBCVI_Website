import CommunityLifeCard from "../components/CommunityLifeCard";
import heroImg from "../../../assets/pngs/hero-img.png";

const CommunityLife = () => {
  return (
    <section className="bg-[#F6F6F6] h-full lg:max-h-[700px] flex justify-center md:px-[40px] pt-[96px] relative overflow-hidden">
      <div className="w-full h-full flex flex-col text-center gap-[96px]">
        <div className="z-[1] py-[50px]">
          <h2 className="text-[48px] font-[600]">Community life</h2>
          <p className="text-[24px]  leading-[33.6px]">
            We believe in dynamic Christian worship as the foundation for daily
            life, and <br className="hidden md:block" /> we strive to teach
            sound Biblical principles with love as our guiding{" "}
            <br className="hidden md:block" /> principle.
          </p>
        </div>
        {/* <div className="grid grid-cols-4 gap-4 max-w-[1392px] mx-auto absolute left-0 2xl:left-[10%] bottom-[-25%] group-hover:top-0 px-[60px] transition duration-500 group"> */}
        <div className="w-full h-fit pb-[100px] px-[20px] gap-[1%] flex items-start overflow-x-scroll z-[0] hover:z-10 group lg:relative lg:bottom-[350px] lg:px-0 lg:py-0 lg:pl-[20px] lg:h-[650px] lg:items-end lg:overflow-y-hidden">
          <CommunityLifeCard
            name="Activity name"
            img={heroImg.src}
          />
          <CommunityLifeCard
            name="Activity name"
            img={heroImg.src}
          />
          <CommunityLifeCard
            name="Activity name"
            img={heroImg.src}
          />
          <CommunityLifeCard
            name="Activity name"
            img={heroImg.src}
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default CommunityLife;

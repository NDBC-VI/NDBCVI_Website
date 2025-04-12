import CommunityLifeCard from "../components/CommunityLifeCard";
import heroImg from "../../../assets/pngs/hero-img.png";

const CommunityLife = () => {
  return (
    <section className="bg-[#F6F6F6] h-full lg:max-h-[100vh] flex justify-center lg:px-[40px] pt-[120px] relative overflow-hidden">
      <div className="w-full h-full flex flex-col text-center lg:gap-[96px]">
        <div className="z-[1]">
          <h2 className="text-[40px]">Community life</h2>
          <p className="text-[20px]  leading-[33.6px]">
            Life is better when we do it together! At New Dawn Baptist Church, we have <br />
            vibrant communities where you can connect, grow, and <br /> 
            walk this faith journey with others.
          </p>
        </div>

        <div className="w-full h-fit px-[20px] pb-[100px] gap-[1%] flex justify-start items-start overflow-x-scroll z-[0] hover:z-10 group lg:relative lg:bottom-[90vh] lg:px-0 lg:py-0 lg:h-[150vh] lg:items-end lg:overflow-y-hidden">
          <div
            id="no-hover-zone"
            className="w-full h-[55%] absolute top-0 left-0 peer"
          ></div>
          <CommunityLifeCard name="Activity name" img={heroImg.src} />
          <CommunityLifeCard name="Activity name" img={heroImg.src} />
          <CommunityLifeCard name="Activity name" img={heroImg.src} />
          <CommunityLifeCard name="Activity name" img={heroImg.src} />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default CommunityLife;

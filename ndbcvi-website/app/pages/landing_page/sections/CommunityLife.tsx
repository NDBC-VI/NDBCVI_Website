import CommunityLifeCard from "../components/CommunityLifeCard";
import activityImg1 from "../../../assets/pngs/activity-img-1.png";
import activityImg2 from "../../../assets/pngs/activity-img-2.png";
import activityImg3 from "../../../assets/pngs/activity-img-3.png";

const CommunityLife = () => {
  return (
    <section className="bg-[#F6F6F6] flex justify-center px-[60px] pt-[96px]">
      <div className="flex flex-col text-center gap-[96px]">
        <div>
          <h2 className="text-[48px] font-[600] mb-[36px]">Community life</h2>
          <p className="text-[24px] leading-[33.6px]">
            We believe in dynamic Christian worship as the foundation for daily
            life, and <br /> we strive to teach sound Biblical principles with
            love as our guiding <br /> principle.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <CommunityLifeCard name="Activity name" img={activityImg1} />
          <CommunityLifeCard name="Activity name" img={activityImg2} />
          <CommunityLifeCard name="Activity name" img={activityImg3} />
          <CommunityLifeCard name="Activity name" img={activityImg1} />
        </div>
      </div>
    </section>
  );
};

export default CommunityLife;

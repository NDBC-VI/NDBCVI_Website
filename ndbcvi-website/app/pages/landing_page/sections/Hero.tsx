import CustomBtn from "@/app/shared/components/CustomBtn";
import heroImg from "../../../assets/pngs/hero-img.png";

const Hero = () => {
  return (
    <section
      style={{
        height: "100vh",
        backgroundImage: `url(${heroImg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "#fff",
      }}
      className="flex justify-center items-center pt-[170px]"
    >
      <div className="text-center">
        <h1 className="text-[60px] font-[600] leading-[72.61px]">
          A Place To Call Home. <br /> A Place To Find Purpose.
        </h1>
        <h3 className="mt-[36px] text-[24px] font-[500] mb-[48px] leading-[28.8px]">
          Know God. Find Freedom. Discover <br /> Purpose. Make a Difference
        </h3>
        <div className="flex gap-6 justify-center">
          <CustomBtn title="Service times" />
          <CustomBtn title="Plan a visit" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

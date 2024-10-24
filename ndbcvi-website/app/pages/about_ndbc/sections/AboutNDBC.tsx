import Image from "next/image";
import heroImg from "../../../assets/pngs/hero-img.png";

const AboutNDBC = () => {
  return (
    <section className="pt-[120px] px-[18px]">
      <div className="max-w-[1512px] mx-auto flex gap-[18px]">
        <div className="w-1/2 bg-[#F6F6F6] rounded-[24px] px-[24px] py-[45px] text-[20px]">
          <h2 className="text-[38px] font-[600] mb-[16px]">About NDBC</h2>
          <p>
            New Dawn Baptist Church (NDBC) was established on November 21st,
            2004, in Victoria Island, Lagos, with Dn Femi Frank Afolabi as the
            Church Leader. In 2007, the Church appointed its first full-time
            pastor, Samson Aderinto Adedokun. By March 29th, 2009, New Dawn had
            been restructured as an independent, self-governing Baptist Church,
            signifying a significant milestone in its growth and development.
          </p>
          <p className="text-[20px] my-[16px]">
            Since then, New Dawn Baptist Church has achieved many
            accomplishments in its mission to serve its community and spread the
            message of the gospel. Today, we are proud to be affiliated with the
            Nigerian Baptist Convention, as well as the Shalom Baptist
            Association and the Lagos Central Baptist Conference.
          </p>
          <p>
            New Dawn Baptist Church (NDBC) was established on November 21st,
            2004, in Victoria Island, Lagos, with Dn Femi Frank Afolabi as the
            Church Leader. In 2007, the Church appointed its first full-time
            pastor, Samson Aderinto Adedokun. By March 29th, 2009, New Dawn had
            been restructured as an independent, self-governing Baptist Church,
            signifying a significant milestone in its growth and development.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src={heroImg}
            alt="church logo"
            className="rounded-[24px] h-[108vh] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutNDBC;

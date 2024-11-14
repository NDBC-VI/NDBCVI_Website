"use server";

import Image from "next/image";
import heroImg from "../../../assets/pngs/hero-img.png";
import { ImageCarousel } from "@/app/shared/components/ImageCarousel";

const AboutNDBC = () => {
  return (
    <section className="py-[120px] px-[18px] w-full">
      <div className="max-w-[1512px] mx-auto flex flex-col lg:flex-row gap-[18px]">
        <div className="lg:w-1/2 md:bg-[#F6F6F6] rounded-[24px] px-[24px] py-[45px] text-[20px]">
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
        {/* <ImageCarousel 
          images={['/app/assets/pngs/hero-img.png', '/app/assets/pngs/hero-img.png', '/app/assets/pngs/hero-img.png']} 
          toolbarBottom={false} 
          buttonsPosition={""} 
          autoSlide={false} 
          autoSlideInterval={0} 
        /> */}
        <div className="w-full overflow-x-scroll flex gap-[3vw] lg:w-1/2 lg:block">
          <Image
            src={heroImg}
            alt="church logo"
            className="rounded-[24px] h-[470px] w-[330px] lg:h-[108vh] lg:w-full 2xl:h-[78vh] object-fill"
          />
          <Image
            src={heroImg}
            alt="church logo"
            className="lg:hidden rounded-[24px] h-[470px] w-[330px] lg:h-[108vh] lg:w-full 2xl:h-[78vh] object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutNDBC;

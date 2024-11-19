"use server";

import { ImageCarousel } from "@/app/shared/components/ImageCarousel";
import { ImageSlider } from "@/app/shared/components/ImageSlider";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

const AboutNDBC = ({images}: {images: SanityImageObject[]}) => {
  return (
    <section className="py-[150px] px-[18px] w-full">
      <div className="max-w-[1512px] mx-auto flex flex-col lg:h-[94vh] lg:flex-row gap-[18px]">
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
        <div className="hidden lg:block lg:w-1/2 lg:h-full flex">
          <div className="w-full pb-[16px] lg:h-full 2xl:h-[78vh] items-stretch">
            <ImageCarousel images={images} />
          </div>
        </div>
        <div className="w-full lg:hidden">
          <ImageSlider
            images={images}
            toolbarBottom={true}
            buttonsPosition={""} 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutNDBC;

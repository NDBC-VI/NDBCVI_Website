"use server";

import { FadeInOnViewWrapper } from "@/app/shared/animation/FadeInOnViewWrapper";
import { ImageCarousel } from "@/app/shared/components/ImageCarousel";
import { ImageSlider } from "@/app/shared/components/ImageSlider";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

const AboutNDBC = ({images}: {images: SanityImageObject[]}) => {
  return (
    <section className="py-[150px] px-[18px] w-full">
      <FadeInOnViewWrapper>
        <div className="max-w-[1512px] mx-auto flex flex-col items-center lg:flex-row gap-[18px]">
          <div className="lg:w-1/2 h-full md:bg-[#F6F6F6] rounded-[24px] px-[24px] py-[60px] text-[20px]">
            <h2 className="text-[38px] font-[600] mb-[16px]">About NDBC</h2>
            <p>
              Founded in 2004 in Victoria Island, Lagos, New Dawn Baptist Church is a Christ-centered congregation committed to nurturing faith 
              and building meaningful relationships within the body of Christ. As a self-governing church under the Nigerian Baptist Convention, 
              we are dedicated to transforming lives through sound teaching, Spirit-filled worship, and impactful outreach. Guided by our mission 
              to lead others in embracing, exalting, and expressing Jesus, we stand as a light of hope and love in our community, enabling 
              spiritual growth and discipleship.
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
      </FadeInOnViewWrapper>
    </section>
  );
};

export default AboutNDBC;

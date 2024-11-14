"use client";

import Image from "next/image";
import whiteNavArrow from "../../../assets/svgs/nav-arrow-white.svg";
import greyNavArrow from "../../../assets/svgs/nav-arrow-grey.svg";
import { PortableText, SanityDocument } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";

const CommunityLife = ({activities}: {activities: SanityDocument[]}) => {

  const images = activities.map(activity => activity.image);
  const [displayed, setDisplayed] = useState(0);
  const prev = () => {
    setDisplayed((curr) => (curr === 0 ? images.length - 1 : curr - 1));
}
const next = () => {
    setDisplayed((curr) => (curr === images.length - 1 ? 0 : curr + 1));
}

  return (
    <section className="bg-black text-white py-[90px] px-[20px] w-full overflow-x-scroll">
      <div className="px-2 text-center">
        <h2 className="text-[24px] lg:text-[48px] font-[600] mb-[18px]">Community life</h2>
        <p className="text-[18px] lg:leading-[25.2px] lg:text-[24px] lg:leading-[33.6px]">
          We believe in dynamic Christian worship as the foundation for daily
          life, and <br className="hidden md:block" /> we strive to teach sound Biblical principles with
          love as our guiding <br className="hidden md:block" /> principle.
        </p>
      </div>
      <div className="mt-[96px] w-full flex flex-col items-center relative">
        <div className="text-center mb-[24px] lg:absolute lg:top-[22%] 2xl:left-[18%] lg:text-left lg:left-[7%] lg:max-w-[425px]">
          <h2 className="text-[20px] lg:text-[48px] font-[600] mb-[12px]">{activities[displayed].activityName}</h2>
          <div className="text-[16px] font-[600] lg:text-[20px] leading-[26px]">
            <PortableText value={activities[displayed].description} />
          </div>
          {/* <p className="text-[16px] font-[600] lg:text-[20px] leading-[26px]">
            Add mage description, age <br /> group, activity, fellowship etc.
          </p> */}
        </div>
        <div className="w-full flex justify-center mb-[24px] hidden lg:flex">
          <button
            type="button"
            className="bg-[#202020] rounded-[100px] py-2 px-6 text-[18px]"
          >
            Tag
          </button>
        </div>
        <div className="w-[350px] overflow-x-hidden">
          <div className="w-full flex">
            {
              images.map((image, index) => (
                <div key={index} className={`relative w-[350px] h-[530px] shrink-0 transition-transform ease-in-out duration-500`} style={{transform: `translateX(-${displayed*100}%)`}}>
                  <Image src={urlFor(image.asset._ref).url()} fill={true} alt="community life image" className="rounded-[24px]"  />
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-[336px] flex justify-between lg:justify-center mt-[18px]">
          <button
            type="button"
            className="bg-[#202020] rounded-[100px] h-[37px] py-auto px-6 text-[18px] lg:hidden"
          >
            Tag
          </button>
          <div className="h-full flex gap-[6px]">
            <button onClick={prev}>
              <Image src={greyNavArrow} alt="nav arrow left" className="rotate-180"/>
            </button>
            <button onClick={next}>
              <Image src={whiteNavArrow} alt="nav arrow right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityLife;

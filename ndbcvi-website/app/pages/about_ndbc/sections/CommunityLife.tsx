"use client";

import Image from "next/image";
import whiteNavArrow from "../../../assets/svgs/nav-arrow-white.svg";
import { PortableText, SanityDocument } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";

const CommunityLife = ({ activities }: { activities: SanityDocument[] }) => {
  const images = activities.map((activity) => activity.image);
  const [displayed, setDisplayed] = useState(0);
  const prev = () => {
    setDisplayed((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };
  const next = () => {
    setDisplayed((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  return (
    <section className="bg-black text-white py-[90px] px-[20px] w-full overflow-x-scroll">
      <div className="px-2 text-center">
        <h2 className="text-[24px] lg:text-[40px]">Community life</h2>
        <p className="text-[18px] lg:leading-[33.6px] lg:text-[20px] ">
          We believe in dynamic Christian worship as the foundation for daily
          life, and <br className="hidden md:block" /> we strive to teach sound
          Biblical principles with love as our guiding{" "}
          <br className="hidden md:block" /> principle.
        </p>
      </div>
      <div className="mt-[96px] w-full flex flex-col items-center relative">
        <div className="w-full flex justify-center mb-[24px] ">
          <button
            type="button"
            className="bg-[#202020] rounded-[100px] py-2 px-6 text-[18px]"
          >
            Tag
          </button>
        </div>
        <div className="w-full lg:grid lg:grid-cols-[minmax(0,_1fr)_350px_minmax(0,_1fr)] lg:gap-[5%] lg:px-[2%]">
          <div className="w-full text-center mb-[24px] lg:flex lg:flex-col lg:justify-center lg:text-left lg:mb-0">
            <h2 className="text-[20px] lg:text-[40px] mb-[12px]">
              {activities[displayed].activityName}
            </h2>
            <div className="text-[16px] lg:text-[20px] leading-[26px]">
              <PortableText value={activities[displayed].description} />
            </div>
          </div>
          <div className="justify-self-center w-[350px] overflow-x-hidden">
            <div className="w-full flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative w-[350px] h-[530px] shrink-0 transition-transform ease-in-out duration-500`}
                  style={{ transform: `translateX(-${displayed * 100}%)` }}
                >
                  <Image
                    src={urlFor(image.asset._ref).url()}
                    fill={true}
                    alt="community life image"
                    className="rounded-[24px]"
                  />
                </div>
              ))}
            </div>
          </div>
          <div id="space-filler" />
        </div>
        <div className="w-[336px] flex justify-between lg:justify-center mt-[18px]">
          <button
            type="button"
            className="bg-[#202020] rounded-[100px] h-[37px] py-auto px-6 text-[18px] lg:hidden"
          >
            Tag
          </button>
          <div className="h-full flex gap-[6px]">
            <button onClick={prev} disabled={displayed === 0}>
              <Image
                src={whiteNavArrow}
                alt="nav arrow left"
                className={`rotate-180 ${displayed === 0 ? "opacity-40" : ""}`}
              />
            </button>
            <button onClick={next} disabled={displayed === images.length - 1}>
              <Image
                src={whiteNavArrow}
                alt="nav arrow right"
                className={`${displayed === images.length - 1 ? "opacity-40" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityLife;

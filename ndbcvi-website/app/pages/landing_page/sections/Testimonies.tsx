"use client";

import Image from "next/image";
import whiteRightArrow from "../../../assets/svgs/white-right-arrow.svg";
import whiteNavArrow from "../../../assets/svgs/nav-arrow-white.svg";
import greyNavArrow from "../../../assets/svgs/nav-arrow-grey.svg";
import { PortableText, SanityDocument } from "next-sanity";
import { useState } from "react";

const Testimonies = ({ testimonies, testimoniesShareLink }: { testimonies: SanityDocument[], testimoniesShareLink: string }) => {
  
  const [displayed, setDisplayed] = useState(0);
  const next = () => {
    if (displayed < testimonies.length - 1) {
      setDisplayed(displayed + 1);
    } 
  }
  const prev = () => {
    if (displayed > 0) {
      setDisplayed(displayed - 1);
    }
  }

  return (
    <section>
      <div className="max-w-[1512px] md:h-[75vh] mx-auto flex flex-col md:flex-row text-white">
        <div className="md:w-1/2 md:h-full bg-black flex items-center md:pl-[45px] px-[30px] md:px-0 py-[200px] md:py-0">
          <div>
            <h2 className="text-[45px]">Testimonies</h2>
            <div className="max-w-[423px] mt-[12px] mb-20">
              <p className="text-[20px]">
                We believe in dynamic Christian worship as the foundation for
                daily life, and we strive to teach sound Biblical principles.
              </p>
            </div>
            <button
              type="button"
              className="bg-transparent border border-white rounded-[100px]"
            >
              <a href={testimoniesShareLink} className="flex gap-2 py-3 px-[18px]">
                <p className="text-[500]">Share with us</p>
                <Image src={whiteRightArrow} alt="right arrow" />
              </a>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:h-full">
          <div className="w-full h-[75%] px-[35px] py-[65px] bg-[#2C2563] text-[23px] font-[300] overflow-scroll">
            <PortableText value={testimonies[displayed].testimony} />
          </div>
          <div className="w-full h-[25%] bg-[#1D1841] p-[35px] flex justify-between items-center">
            <h3 className="text-[40px]">{testimonies[displayed].label}</h3>
            <div className="flex gap-[6px] items center">
              <button onClick={prev} disabled={displayed === 0}>
                <Image src={displayed === 0 ? greyNavArrow : whiteNavArrow} alt="nav left" className="rotate-180" />
              </button>
              <button onClick={next} disabled={displayed === testimonies.length - 1}>
                <Image src={displayed === testimonies.length - 1 ? greyNavArrow : whiteNavArrow} alt="nav right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;

"use client";

import Image from "next/image";
import { useState } from 'react';
import greyNavArrow from "../../../assets/svgs/nav-arrow-grey.svg";
import whiteNavArrow from "../../../assets/svgs/nav-arrow-white.svg";
import blackNavArrow from "../../../assets/svgs/nav-arrow-black.svg";
const MissionAndVision = () => {

  const sections = [
    {
      title: "Vision",
      values: [
        {
          title: "Reveal",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        },
        {
          title: "Raise",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        },
        {
          title: "Restore",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        }
      ]
    },
    {
      title: "Mission",
      values: [
        {
          title: "Embrace",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        },
        {
          title: "Exalt",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        },
        {
          title: "Equip",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        },
        {
          title: "Express",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        }
      ]
    },
    {
      title: "Values",
      values: [
        {
          title: "The Authority of the Word of God",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        },
        {
          title: "Respect for Individuals",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        },
        {
          title: "Genuine Care for One Another",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        },
        {
          title: "Service to Christ",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        },
        {
          title: "Meaningful Worship",
          message: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle."
        },
      ]
    },
  ];

  const [sectionNum, setSectionNum] = useState(0);

  const prev = () => {
    setSectionNum(sectionNum - 1);
  }

  const next = () => {
    setSectionNum(sectionNum + 1);
  }

  return (
    <section className="py-[120px] pl-[40px] lg:px-[40px]">
      <div className="w-full max-w-[1392px] mx-auto flex flex-col lg:flex-row gap-[24px]">
        <div className="bg-black text-white w-11/12 h-fit rounded-[18px] flex justify-between items-end p-[24px]
              lg:h-[460px] lg:w-1/4 lg:rounded-[24px] lg:flex-col lg:justify-end lg:items-start lg:p-[36px]">
          <div className="flex flex-col">
            <p className="text-[18px] font-[500] lg:text-[24px] lg:font-[600] text-[#757575]">
              <span className="text-white">{sectionNum+1}</span>/3
            </p>
            <h2 className="text-[24px] lg:text-[38px] font-[600]">
              Our <br className="hidden lg:block" /> {sections[sectionNum].title}
            </h2>
          </div>
          <div className="flex gap-[6px]">
            <button onClick={prev} disabled={sectionNum == 0}>
              <Image src={ sectionNum == 0 ? greyNavArrow : whiteNavArrow } alt="nav left icon" className="rotate-180" />
            </button>
            <button onClick={next} disabled={sectionNum == 2}>
              <Image src={ sectionNum == 2 ? greyNavArrow : whiteNavArrow } alt="nav right icon" />
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-scroll flex gap-[1px]">         
          {
            sections[sectionNum].values.map((value: {title: string, message: string}, i: number) => (
              <div key={value.title} 
                className={`h-[270px] w-[80%] shrink-0 mr-5 px-4 py-2 rounded-[18px] bg-[#F6F6F6] flex items-end
                lg:h-full lg:w-[33%] lg:mr-0 ${i == 0 ? "lg:rounded-l-[24px] lg:rounded-r-none lg:border-r-[2px]" : i == sections[sectionNum].values.length - 1 ? "lg:rounded-r-[24px] lg:rounded-l-none" : "lg:rounded-none lg:border-r-[2px]"} lg:border-[#D9D9D9] lg:flex lg:px-[20px] lg:pb-[36px]`}>
                <div>
                  <div>
                    <h2 className="text-[24px] lg:text-[36px] font-[600] mb-[30px]">{value.title}</h2>
                    <p className="text-[18px] lg:text-[20px]">
                      {value.message}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="lg:hidden flex gap-[8px] lg:gap-[6px]">
          <Image src={greyNavArrow} alt="nav left icon" className="rotate-180" />
          <Image src={blackNavArrow} alt="nav right icon" />
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;

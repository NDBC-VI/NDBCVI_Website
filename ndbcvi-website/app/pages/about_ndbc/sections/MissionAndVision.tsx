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
          message: "We are passionate about making Jesus known — in our worship, our teaching, and our daily lives. Through Spirit-led services, sound doctrine, and intentional discipleship, we help people encounter the truth, love, and power of Christ."
        },
        {
          title: "Restore",
          message: "We believe in the transforming power of the gospel to heal brokenness. Whether spiritual, emotional, or relational, we trust God to restore wholeness as we walk with people in love, prayer, and community.  We also create a loving and grace-filled environment where people can find hope and purpose in Christ."
        },
        {
          title: "Raise",
          message: "Discipleship is central to our mission. We are committed to raising strong believers who are grounded in the Word, led by the Spirit, and empowered to grow, lead, and live out their faith in ways that transform their world."
        }
      ]
    },
    {
      title: "Mission",
      values: [
        {
          title: "Embrace",
          message: "We lead people into a genuine relationship with Jesus Christ, helping them encounter His grace and truth through the gospel."
        },
        {
          title: "Exalt",
          message: "We are committed to exalting Jesus in all we do — through heartfelt worship, obedient living, and lives that reflect His glory."
        },
        {
          title: "Equip",
          message: "We intentionally disciple and train believers, equipping them with the Word and spiritual tools needed to grow and serve effectively."
        },
        {
          title: "Express",
          message: "We express Christ’s love by reaching out to others with compassion, generosity, and the message of hope — both within and beyond our walls."
        }
      ]
    },
    {
      title: "Values",
      values: [
        {
          title: "The Authority of the Word of God",
          message: "We believe the Bible is the inspired Word of God and our ultimate guide for life and godliness. In all we teach and do, Scripture remains our foundation and final authority."
        },
        {
          title: "Respect for Individuals",
          message: "We value every person as uniquely made in God’s image. We strive to create a culture of honor, where all are treated with kindness, dignity, and grace."
        },
        {
          title: "Genuine Care for One Another",
          message: "We are committed to walking in love and building authentic relationships. Through prayer, encouragement, and presence, we show up for one another as a true family in Christ."
        },
        {
          title: "Service to Christ",
          message: "We serve with joy and purpose, using our gifts to glorify God and bless others. Every act of service, big or small, is part of our worship and devotion to Christ."
        },
        {
          title: "Meaningful Worship",
          message: "We believe worship is more than music — it’s a lifestyle. In every gathering and in our daily walk, we seek to honor God with sincere, Spirit-led worship from the heart."
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
                className={`h-[270px] w-[80%] shrink-0 mr-5 px-4 py-2 rounded-[18px] bg-[#F6F6F6] flex items-end transition-all translate-x-[]
                lg:h-full lg:w-[33%] lg:mr-0 ${i == 0 ? "lg:rounded-l-[24px] lg:rounded-r-none lg:border-r-[2px]" : i == sections[sectionNum].values.length - 1 ? "lg:rounded-r-[24px] lg:rounded-l-none" : "lg:rounded-none lg:border-r-[2px]"} lg:border-[#D9D9D9] lg:flex lg:px-[20px] lg:pb-[36px]`}>
                <div className="h-[285px] grid py-2 relative">
                    <h2 className="text-[24px] lg:text-[36px] font-[600] mb-[30px]">{value.title}</h2>
                    <div className="overflow-scroll">
                      <p className="text-[18px] lg:text-[20px] mb-[30px]">
                        {value.message}
                      </p>
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 w-full
                        bg-gradient-to-t from-[#F6F6F6] to-transparent" />
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

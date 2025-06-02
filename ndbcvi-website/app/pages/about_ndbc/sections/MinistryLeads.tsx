"use client";
import { useState } from "react";
import Image from "next/image";
import { PortableText, SanityDocument } from "next-sanity";
import { PeopleList } from "../components/PeopleList";
import { MinistryLeadList } from "@/app/types";
import greyNavArrow from "../../../assets/svgs/nav-arrow-grey.svg";
import blackNavArrow from "../../../assets/svgs/nav-arrow-black.svg";
import { InfiniteScrollingWrapper } from "@/app/shared/animation/InfiniteScrollingWrapper";

type CardGroup = {
  groups: Array<SanityDocument[]>
}

const MinistryLeads = ({
  ministryLeads,
}: {
  ministryLeads: MinistryLeadList;
}) => {

  const displayGroups: CardGroup = { groups: [] };
  for(let i=0; i<ministryLeads.ministryLeadList.length; i+=11) {
    const ministryLeadGroup: SanityDocument[] = ministryLeads.ministryLeadList.slice(i, i+10);
    displayGroups.groups.push(ministryLeadGroup);
  }

  const [display, setDisplay] = useState(0);

  const prev = () => {
    setDisplay(display-1);
  }

  const next = () => {
    setDisplay(display+1);
  }

  return (
    <section className="w-full pl-[40px] pt-[60px] lg:pt-[150px] flex flex-col items-center z-0 lg:px-[40px] overflow-x-hidden">
      <div
        className="w-full flex flex-col items-start
                lg:flex-row lg:justify-between lg:mb-[5vh] lg:text-right"
      >
        <h2 className="text-[24px] mb-[16px] lg:text-[40px]">Ministry Leads</h2>
        <div className="text-[16px] mb-[16px] lg:w-3/5 lg:text-[20px]">
          <PortableText value={ministryLeads.description} />
        </div>
      </div>
      {/* <PeopleList list={displayGroups.groups[display]} /> */}
      <div className="w-full overflow-x-hidden">
        <InfiniteScrollingWrapper duration="35s">
          <PeopleList list={ministryLeads.ministryLeadList} />
        </InfiniteScrollingWrapper>
      </div>
      {/* <div className="flex gap-[6px] items-center">
        <button onClick={prev} disabled={display == 0}>
          <Image src={ display == 0 ? greyNavArrow : blackNavArrow } alt="nav left icon" className="rotate-180" />
        </button>
        <p className="text-[20px] font-[500]">{display+1} / {displayGroups.groups.length}</p>
        <button onClick={next} disabled={display == displayGroups.groups.length-1}>
          <Image src={ display == displayGroups.groups.length-1 ? greyNavArrow : blackNavArrow } alt="nav right icon" />
        </button>
      </div> */}
    </section>
  );
};

export default MinistryLeads;

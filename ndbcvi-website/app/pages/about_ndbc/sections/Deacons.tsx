
import { PortableText } from "next-sanity";
import { PeopleList } from "../components/PeopleList";
import { DeaconList } from "@/app/types";
import { InfiniteScrollingWrapper } from "@/app/shared/animation/InfiniteScrollingWrapper";

const Deacons = ({ deacons }: { deacons: DeaconList }) => {
  return (
    <section className="w-full pt-[60px] lg:pt-[150px] flex flex-col items-center z-0 lg:px-[40px] overflow-x-hidden">
      <div
        className="w-full flex flex-col items-start text-left
                lg:flex-row lg:justify-between lg:mb-[5vh] lg:text-right"
      >
        <h2 className="text-[24px] mb-[16px] lg:text-[40px]">Deacons</h2>
        <div className="text-[16px] mb-[16px] lg:w-3/5 lg:text-[20px]">
          <PortableText value={deacons.description} />
        </div>
      </div>
      <div className="w-full overflow-x-hidden">
        <InfiniteScrollingWrapper animationDuration="35s" >
          <PeopleList list={deacons.deaconList} />
        </InfiniteScrollingWrapper>
      </div>
    </section>
  );
};

export default Deacons;

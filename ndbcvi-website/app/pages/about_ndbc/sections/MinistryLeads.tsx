import { PortableText } from "next-sanity";
import { PeopleList } from "../components/PeopleList";
import { MinistryLeadList } from "@/app/types";

const MinistryLeads = ({ministryLeads}: {ministryLeads: MinistryLeadList}) => {
  return (
    <section className="w-full pl-[40px] pt-[60px] lg:pt-[150px] flex flex-col items-center z-0 lg:px-[40px]">
      <div className='w-full flex flex-col items-start
                lg:flex-row lg:justify-between lg:mb-[5vh] lg:text-right'>
        <h2 className='text-[24px] mb-[16px] font-[600] lg:text-[48px]'>Ministry Leads</h2>
        <div className='text-[16px] mb-[16px] lg:w-3/5 lg:text-[24px]'>
          <PortableText value={ministryLeads.description} />
        </div>
      </div>
      <PeopleList list={ministryLeads.ministryLeadList} />
    </section>
  );
};

export default MinistryLeads;

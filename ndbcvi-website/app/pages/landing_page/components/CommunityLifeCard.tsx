import { FadeInOnViewWrapper } from "@/app/shared/animation/FadeInOnViewWrapper";
import { SlideInOnView } from "@/app/shared/animation/SlideInOnView";
import Image from "next/image";

interface CommunityLifeCardProps {
  name: string;
  img: string;
  order: number
}

const CommunityLifeCard = ({ name, img, order }: CommunityLifeCardProps) => {
  return (
    <div className="w-[85vw] md:w-[40vw] h-[70vh] shrink-0 lg:w-[24.25%] lg:translate-y-[300px] lg:group-hover:opacity-40 lg:hover:!opacity-100 peer-hover:!opacity-100 group/item">
      <SlideInOnView animation_duration={1000} delay={(0.25 * order).toString()}>
        <div className="w-full h-full transition-all duration-500 ease-out lg:group-hover/item:translate-y-[-30vh]">
          <div className="bg-[#E3E3E3] py-2 px-6 rounded-[100px] inline-block">
            <p className="text-[18px] font-[500]">{name}</p>
          </div>
          <div className="mt-4 w-full h-full relative">
            <Image
              src={img}
              alt="Activity card img"
              className="w-full h-full rounded-[24px] object-cover"
              fill
            />
          </div>
        </div>
      </SlideInOnView>
    </div>
  );
};

export default CommunityLifeCard;

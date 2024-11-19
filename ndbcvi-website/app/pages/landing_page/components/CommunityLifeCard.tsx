import Image from "next/image";

interface CommunityLifeCardProps {
  name: string;
  img: string;
}

const CommunityLifeCard = ({ name, img }: CommunityLifeCardProps) => {
  return (
    <div className="w-[80%] h-[400px] lg:[590px] shrink-0 md:w-[24.25%] md:group-hover:opacity-40 md:hover:!opacity-100 group/item">
      <div className="w-full h-full transition-all duration-500 ease-out md:group-hover/item:translate-y-[-60%]">
        <div className="bg-[#E3E3E3] py-2 px-6 rounded-[100px] inline-block">
          <p className="text-[18px] font-[500]">{name}</p>
        </div>
        <div className="mt-6 w-full h-full relative">
        <Image
            src={img}
            alt="Activity card img"
            className="w-full h-full rounded-[36px]"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityLifeCard;

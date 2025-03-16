import Image from "next/image";

interface CommunityLifeCardProps {
  name: string;
  img: string;
}

const CommunityLifeCard = ({ name, img }: CommunityLifeCardProps) => {
  return (
    <div className="w-[85vw] md:w-[40vw] h-[70vh] shrink-0 lg:w-[24.25%] lg:group-hover:opacity-40 lg:hover:!opacity-100 peer-hover:!opacity-100 group/item">
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
    </div>
  );
};

export default CommunityLifeCard;

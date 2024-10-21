import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface CommunityLifeCardProps {
  name: string;
  img: StaticImport;
}

const CommunityLifeCard = ({ name, img }: CommunityLifeCardProps) => {
  return (
    <div>
      <div className="bg-[#E3E3E3] py-2 px-6 rounded-[100px]">
        <p className="text-[18px] font-[500]">{name}</p>
      </div>
      <div className="mt-6">
        <Image src={img} alt="Activity card img" width={336} />
      </div>
    </div>
  );
};

export default CommunityLifeCard;

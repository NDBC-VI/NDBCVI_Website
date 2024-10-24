interface CommunityLifeCardProps {
  name: string;
  img: string;
}

const CommunityLifeCard = ({ name, img }: CommunityLifeCardProps) => {
  return (
    <div className="">
      <div className="bg-[#E3E3E3] py-2 px-6 rounded-[100px]">
        <p className="text-[18px] font-[500]">{name}</p>
      </div>
      <div className="mt-6 w-full h-full">
        <img
          src={img}
          alt="Activity card img"
          className="w-full h-full rounded-[36px]"
        />
      </div>
    </div>
  );
};

export default CommunityLifeCard;

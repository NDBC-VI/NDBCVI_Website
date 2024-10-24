import CustomBtn from "./CustomBtn";
import rightArrow from "../../assets/svgs/reusable-right-arrow.svg";

interface ReusableCardComponentProps {
  imgUrl: string;
  title: string;
  body: string;
}

const ReusableCardComponent = ({
  imgUrl,
  title,
  body,
}: ReusableCardComponentProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-[500px] relative  w-full pl-[32px] group overflow-hidden"
    >
      <div className="bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 w-full h-full "></div>
      <div className="text-white absolute bottom-[-8.5%] group-hover:bottom-[8%] transition-all duration-500 flex flex-col gap-5">
        <h3 className="text-[30px] font-[600]">{title}</h3>
        <div className="w-[280px]">
          <p>{body}</p>
        </div>
        <div>
          <CustomBtn title="Learn more" hasIcon icon={rightArrow} />
        </div>
      </div>
    </div>
  );
};

export default ReusableCardComponent;

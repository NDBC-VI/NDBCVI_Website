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
        height: "520px",
        position: "relative",
      }}
      className="h-[520px] relative  w-full pl-[32px]"
    >
      <div className="bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 w-full h-full "></div>
      <div className="text-white absolute bottom-[8%] flex flex-col gap-5">
        <h3 className="text-[30px] font-[600]">{title}</h3>
        <div className="w-[280px]">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default ReusableCardComponent;

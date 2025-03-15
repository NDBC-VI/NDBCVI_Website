import "@/app/globals.css";

interface ReusableCardComponentProps {
  imgUrl: string;
  title: string;
  body: string;
  rounded?: string;
  button?: JSX.Element;
  imgFit?: string;
}

const ReusableCardComponent = ({
  imgUrl,
  title,
  body,
  rounded = "none",
  button,
  imgFit = "cover",
}: ReusableCardComponentProps) => {
  const containerQuery = `
    @container card (max-width: 200px) {
      *:not(#dim-bg) {
        visibility: hidden;
      }
    }
    @container card (max-width: 600px) {
      #card-text {
        width: 90%;
        height: 150px;
        overflow: scroll;
      }
    }
  `;

  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: `${imgFit}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        containerType: "inline-size",
        containerName: "card",
      }}
      className={`h-[500px] relative w-full px-[16px] lg:pl-[32px] group overflow-hidden rounded-${rounded}`}
    >
      <div
        id="dim-bg"
        className="bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 w-full h-full "
      ></div>
      <div className={`text-white absolute ${button ? "bottom-[-5%]" : "bottom-0"} group-hover:bottom-[5%] transition-all duration-500 flex flex-col`}>
        <h3 className="text-[30px] font-[600]">{title}</h3>
        <div id="card-text h-fit">
          <p className="leading-[24px]">{body}</p>
          <style>{containerQuery}</style>
        </div>
        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500">{button}</div>
      </div>
    </div>
  );
};

export default ReusableCardComponent;

import '@/app/globals.css';

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
  rounded = 'none',
  button,
  imgFit = "cover"
}: ReusableCardComponentProps) => {

  const containerQuery = `
    @container card (max-width: 200px) {
      * {
        visibility: hidden;
      }
    }
  `

  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: `${imgFit}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        containerType: "inline-size",
        containerName: "card"
      }}
      className={`h-[500px] relative w-full pl-[32px] group overflow-hidden rounded-${rounded}`}
    >
      <div className="bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 w-full h-full "></div>
      <div className="text-white absolute bottom-[-8.5%] group-hover:bottom-[8%] transition-all duration-500 flex flex-col gap-5">
        <h3 className="text-[30px] font-[600]">{title}</h3>
        <div className="w-[280px]">
          <p className="text">{body}</p>
          <style>
            {containerQuery}
          </style>
        </div>
        <div>
          {button}
        </div>
      </div>
    </div>
  );
};

export default ReusableCardComponent;

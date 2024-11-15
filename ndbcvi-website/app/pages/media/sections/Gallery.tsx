import Image from "next/image";
import communityLife from "../../about_ndbc/assets/pngs/coomunity-life.png";
import blackNavArrow from "../../../assets/svgs/nav-arrow-black.svg";


const Gallery = () => {
  return (
    <section className="px-[20px] md:px-0">
      <div className="flex justify-start md:justify-center">
        <div className="text-left md:text-center">
          <h2 className="text-[24px] md:text-[48px] font-[600] mb-[18px]">Gallery</h2>
          <p className="text-[16px] md:text-[24px] leading-[33.6px]">
            Explore our moments with us
          </p>
        </div>
      </div>
      {/* <div className="md:bg-[#F6F6F6] rounded-[24px] flex max-w-[1512px] mx-auto my-[24px] md:my-[60px] md:rounded-none overflow-x-hidden"> */}
      <div className="md:bg-[#F6F6F6] rounded-[24px] flex w-full mx-auto my-[24px] md:my-[60px] md:rounded-none overflow-x-hidden">
        <div className="w-full py-[80px] shrink-0 bg-[#F6F6F6] md:w-[33%]">
          <div className="text-center mb-[40px]">
            <h2 className="text-[36px] font-[600]">Event name</h2>
            <p className="underline">See more images</p>
          </div>
          <div className="flex justify-center">
            <Image src={communityLife} alt="community life image" width={336} />
          </div>
        </div>
        <div className="md:border-x-[2px] w-full md:w-[33%] py-[80px] shrink-0">
          <div className="text-center mb-[40px]">
            <h2 className="text-[36px] font-[600]">Event name</h2>
            <p className="underline">See more images</p>
          </div>
          <div className="flex justify-center">
            <Image src={communityLife} alt="community life image" width={336} />
          </div>
        </div>
        <div className="w-full md:w-[33%] py-[80px] shrink-0">
          <div className="text-center mb-[40px]">
            <h2 className="text-[36px] font-[600]">Event name</h2>
            <p className="underline">See more images</p>
          </div>
          <div className="flex justify-center">
            <Image src={communityLife} alt="community life image" width={336} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="md:hidden h-full flex gap-[6px]">
          <button>
            <Image src={blackNavArrow} alt="nav arrow left" className={`rotate-180 opacity-40`} />
          </button>
          <button>
            <Image src={blackNavArrow} alt="nav arrow right"/>
          </button>
        </div>
        <button
          type="button"
          className="hidden md:block border border-[#121212] rounded-[100px] py-3 px-6 text-[#121212]"
        >
          Load more
        </button>
      </div>
    </section>
  );
};

export default Gallery;

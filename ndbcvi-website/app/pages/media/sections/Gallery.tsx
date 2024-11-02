import Image from "next/image";
import communityLife from "../../about_ndbc/assets/pngs/coomunity-life.png";
const Gallery = () => {
  return (
    <section className="">
      <div className="flex justify-center">
        <div className="text-center">
          <h2 className="text-[48px] font-[600] mb-[18px]">Gallery</h2>
          <p className="text-[24px] leading-[33.6px]">
            Explore our moments with us
          </p>
        </div>
      </div>
      <div className="bg-[#F6F6F6] flex max-w-[1512px] mx-auto my-[60px] ">
        <div className="w-[33%] py-[80px]">
          <div className="text-center mb-[40px]">
            <h2 className="text-[36px] font-[600]">Event name</h2>
            <p className="underline">See more images</p>
          </div>
          <div className="flex justify-center">
            <Image src={communityLife} alt="community life image" width={336} />
          </div>
        </div>
        <div className="border-x-[2px] w-[33%] py-[80px]">
          <div className="text-center mb-[40px]">
            <h2 className="text-[36px] font-[600]">Event name</h2>
            <p className="underline">See more images</p>
          </div>
          <div className="flex justify-center">
            <Image src={communityLife} alt="community life image" width={336} />
          </div>
        </div>
        <div className="w-[33%] py-[80px]">
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
        <button
          type="button"
          className="border border-[#121212] rounded-[100px] py-3 px-6 text-[#121212]"
        >
          Load more
        </button>
      </div>
    </section>
  );
};

export default Gallery;

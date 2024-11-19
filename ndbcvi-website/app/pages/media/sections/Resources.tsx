const Resources = () => {
  return (
    <section>
      {/* <div className="max-w-[1512px] w-full flex flex-col md:flex-row text-white"> */}
      <div className="w-full flex flex-col md:flex-row text-white">
        <div className="bg-black w-full px-[20px] py-[96px] md:w-1/2 flex items-center md:pl-[82px]">
          <h2 className="text-[36px] md:text-[60px] font-[600]">
            NDBC <br />
            Resources
          </h2>
        </div>
        <div className="w-full px-[20px] md:w-1/2 bg-[#2C2563] py-[120px] md:px-[60px] flex items-center">
          <div>
            <h2 className="text-[24px] md:text-[36px] font-[600] mb-[28px]">
              Explore Resources
            </h2>
            <p className="text-[20px] mb-[36px] md:text-[24px] md:mb-[60px]">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
            <button
              type="button"
              className="py-3 px-6 border border-white rounded-[100px]"
            >
              Share with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;

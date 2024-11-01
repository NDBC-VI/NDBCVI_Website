const Resources = () => {
  return (
    <section>
      <div className="max-w-[1512px] mx-auto flex text-white">
        <div className="bg-black w-1/2 flex items-center pl-[82px]">
          <h2 className="text-[60px] font-[600]">
            NDBC <br />
            Resources
          </h2>
        </div>
        <div className="w-1/2 bg-[#2C2563] py-[120px] px-[60px] flex items-center">
          <div>
            <h2 className="text-[36px] font-[600] mb-[28px]">
              Explore Resources
            </h2>
            <p className="text-[24px] mb-[60px]">
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

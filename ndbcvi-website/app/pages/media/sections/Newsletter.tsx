import React from "react";

const Newsletter = () => {
  return (
    <section className="py-[120px]">
      <div className="text-center mb-[48px]">
        <h2 className="text-[24px] md:text-[48px] font-[600] mb-[18px]">
          Subscribe to<br className="md:hidden"/> our newsletter
        </h2>
        <p className="text-[16px] md:text-[24px] leading-[33.6px]">
          We believe in dynamic Christian worship as the foundation for daily
          life, <br /> and we strive to teach sound Biblical principles
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full flex flex-col items-center gap-6 md:flex-row">
          <input
            type="text"
            className="border rounded-[100px] py-3 px-6 w-4/5 md:w-[396px]"
            placeholder="Enter email address"
          />
          <button
            type="button"
            className="border border-[#121212] rounded-[100px] py-3 px-6 w-2/5 text-[#121212]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

import React from "react";

const Newsletter = () => {
  return (
    <section className="py-[120px]">
      <div className="text-center mb-[48px]">
        <h2 className="text-[48px] font-[600] mb-[18px]">
          Subscribe to our newsletter
        </h2>
        <p className="text-[24px] leading-[33.6px]">
          We believe in dynamic Christian worship as the foundation for daily
          life, <br /> and we strive to teach sound Biblical principles
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-6">
          <input
            type="text"
            className="border rounded-[100px] py-3 px-6 w-[396px]"
            placeholder="Enter email address"
          />
          <button
            type="button"
            className="border border-[#121212] rounded-[100px] py-3 px-6 text-[#121212]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

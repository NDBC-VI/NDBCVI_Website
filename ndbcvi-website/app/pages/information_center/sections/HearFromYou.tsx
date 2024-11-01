import CustomInput from "../components/CustomInput";
import CustomTextArea from "../components/CustomTextArea";

const HearFromYou = () => {
  return (
    <section className="pt-[150px] pb-[120px] max-w-[1392px] mx-auto px-[60px]">
      <div className="flex justify-between items-end">
        <div className="w-[45%]">
          <h2 className="text-[38px] font-[600] mb-[24px]">
            We’d love to hear from you
          </h2>
          <p className="text-[20px]">
            Volunteers works tirelessly to build a welcoming and inclusive
            community for all who seek to know God and experience the love and
            grace of Jesus Christ.
          </p>
        </div>
        <div className="flex gap-[18px]">
          <button
            type="button"
            className="py-3 px-6 border border-[#121212] text-[#2C2563] rounded-[100px]"
          >
            info@ndbcvi.org
          </button>
          <button
            type="button"
            className="py-3 px-6 border border-[#121212] text-[#2C2563] rounded-[100px]"
          >
            info@ndbcvi.org
          </button>
          <button
            type="button"
            className="py-3 px-6 border border-[#121212] text-[#2C2563] rounded-[100px]"
          >
            info@ndbcvi.org
          </button>
        </div>
      </div>
      <form className="mt-[120px] max-w-[944px] mx-auto flex flex-col gap-[48px]">
        <CustomInput type="text" placeholder="First and last name *" />
        <CustomInput type="text" placeholder="Email address *" />
        <CustomInput type="text" placeholder="What are you interested in? *" />
        <CustomTextArea placeholder="Message *" />
        <div>
          <button
            type="submit"
            className="border border-[#121212] text-[#121212] px-6 py-3 rounded-[100px]"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default HearFromYou;

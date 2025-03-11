import { SanityDocument } from "next-sanity";
import CustomInput from "../components/CustomInput";
import CustomTextArea from "../components/CustomTextArea";

const HearFromYou = ({ contactOptions, submitLink }: { contactOptions: SanityDocument[], submitLink: string }) => {
  // const buttonTexts = ["info@ndbcvi.org", "01 879 6304", "01 879 6304"];
  return (
    <section className="pt-[150px] pb-[120px] max-w-[1392px] mx-auto px-[60px]">
      <div className="w-full flex flex-col gap-[24px] md:flex-row md:justify-between md:items-end">
        <div className="w-full md:w-[50%]">
          <h2 className="text-[36px] md:text-[40px] mb-2">
            We’d love to hear from you
          </h2>
          <p className="text-[20px]">
            Volunteers works tirelessly to build a welcoming and inclusive
            community for all who seek to know God and experience the love and
            grace of Jesus Christ.
          </p>
        </div>
        <div className="flex flex-wrap gap-[18px]">
          {contactOptions.map((contact) => (
            <a 
              key={contact._type === "contactEmail" ? contact.emailAddress : contact.phoneNumber} 
              href={contact._type === "contactEmail" ? `mailto:${contact.emailAddress}` : `tel:${contact.phoneNumber}`}>
              <button
                type="button"
                className="text-[14px] py-2 px-3 md:px-7 md:text-[16px] border border-[#121212] text-[#2C2563] rounded-[100px]"
              >
                {contact._type === "contactEmail" ? contact.emailAddress : contact.phoneNumber}
              </button>
            </a>
          ))}
        </div>
      </div>
      <form className="mt-[120px] max-w-[944px] mx-auto flex flex-col gap-[48px]">
        <CustomInput type="text" placeholder="First and last name *" />
        <CustomInput type="text" placeholder="Email address *" />
        <CustomInput type="text" placeholder="What are you interested in? *" />
        <CustomTextArea placeholder="Message *" />
        <div>
          <a href={submitLink}>
            <button
              type="submit"
              className="border border-[#121212] text-[#121212] px-6 py-3 rounded-[100px]"
            >
              Submit
            </button>
          </a>
        </div>
      </form>
    </section>
  );
};

export default HearFromYou;

import CustomBtn from "@/app/shared/components/CustomBtn";
import ReusableCardComponent from "@/app/shared/components/ReusableCardComponent";
import rightArrow from "@/app/assets/svgs/reusable-right-arrow.svg";

const prompts = [
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/7ab9/f7c3/5e56b436301c21aa48c6c80115b8932d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jOII8CgREA29GZ4QriCh-JGepEv2UTN1sHhvTaFX1qtxXq0xbEzBH7qrji5d9Kloh1toZ85P1K1GXLNz2Dice7MQToCBbEHbjdBVtz16VLUF4Hqs1ty5gZRck2yH0j6PE0E~Fpn~~JaY6E-gGSlVV3FSHFi~Aw9usK4KnXroxB4s1Sg926Nz4GLolqhKuYDwo1pn0bXiwhm6Ac1n~8AFTY3acz-E3T4GthFYopwmnyY2k-UpiqippQ1x4Rr5Y09GE6fJhVyrenf-TQdjuoZJMdboeLQxRCLa4A9u8nEwwTyS2gNRmmq4SVlmca~G~PuQyLlRM5gCxH-UcaILbVsbFg__",
    title: "Speak with us",
    body: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle.",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/c399/a4aa/cbd312b546258322b4fb6eadc0c8c032?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IyDNnirv4hQwGIadAd6fo-r9E82LqJug7esRDAPYgqJYGMe1QRoP4b6f6pWRvXi4of-VnTRH7FZO4fpf6Et5A8w6ROAIk~038tWrcRRGCFlNUgVnOYsZkcPHL5h8tWLfCeHG9RuEby6g-lNGn91k5GpQ46hoDYd5lMnj~ulhU1gd8tLHeeMo5TtChB8e27dnctpsGgykc7tgZo2Pk8xzVoqW3jmWlwYNGxOEb0XtmANDy0oS3mkqlhBYJgkqw54yBxuuWJBKaBoBn8Zn13hgVuTwKRm~9UxahhH-og5rhvCLNv2XNJmEgTZkIayw5-9rMAWXxtUyUuYgVZ1uzRmf6w__",
    title: "Speak with us",
    body: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle.",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/3dc6/ac7e/02f63cd84abc597b4ee10623f3b5f3d5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XASqBOty83pJI0A6ylSwFL6TgexOyvYXMyFmpmHMWzp1AX9oB~xGH54V6Yg0KGjkON05yNM9jQHqVRcjA-W6HaE9pW8YpzwAaghhINNWFhtzk9KhOwl3FfMDK0-kM5V8eP8QpaPo9aWb3BJg692M0RycZbbnPPQP0WbQxMZqg2DJAQJ~lx0JDsk0dJQtUXPx5pJOYZnTKbL-Jez-8SKVYO-fvgzBlE3mVBvAiI15iNAfR1P5kfaNwD~h3f6oeq7QU18UddEz0NHxJFFtNFSxv~COmUo9j5JuOXJ~9GAKAkoBhbge~eRTciwz~nKMz0FneSs6v6DVRyvoa0GeZgfUmA__",
    title: "Speak with us",
    body: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle.",
  },
];

const MoreAboutNewDawn = () => {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1512px] mx-auto">
        <div className="text-center">
          <h2 className="text-[40px]">More about New Dawn</h2>
          <p className="text-[20px] leading-[33.6px]">
            Join us and experience the love of God at NDBC
          </p>
        </div>
        <div className="pt-[60px] flex flex-col md:flex-row">
          {prompts.map((prompt, i) => (
            <ReusableCardComponent
              key={i}
              imgUrl={prompt.imgUrl}
              title={prompt.title}
              body={prompt.body}
              button={
                <CustomBtn title={"Learn more"} hasIcon icon={rightArrow} />
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreAboutNewDawn;

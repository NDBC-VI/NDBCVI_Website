import ReusableCardComponent from "@/app/shared/components/ReusableCardComponent";
import { ModalTemplate } from "@/app/shared/modals/ModalTemplate";
import { BasicModalPropsType } from "@/app/types";
import { BasicModalContent } from "@/app/shared/modals/BasicModal/BasicModalContent";
import { urlFor } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";
import CustomBtn from "@/app/shared/components/CustomBtn";
import rightArrow from "@/app/assets/svgs/reusable-right-arrow.svg";

const BeABlessing = ({ infoPopups }: { infoPopups: SanityDocument[] }) => {
  return (
    <section className="py-[120px]">
      <div className="text-center">
        <h2 className="text-[48px] font-[600] mb-[18px]">Be a Blessing</h2>
        <p className="text-[24px] leading-[33.6px]">
          Join us and experience the love of God at NDBC
        </p>
      </div>
      <div className="max-w-[1512px] mx-auto pt-[60px] flex flex-col md:flex-row">
        {infoPopups.map((infoPopup: SanityDocument) => {
          const basicModalProps: BasicModalPropsType = {
            introduction: infoPopup?.introduction,
            title: infoPopup?.title,
            slug: {
              current: infoPopup?.slug.current,
            },
            thumbnailImage: infoPopup?.thumbnailImage,
            thumbnailCaption: infoPopup?.thumbnailCaption,
            headerImages: infoPopup?.headerImages,
            infoSections: infoPopup?.infoSections,
          };
          return (
            <div className="w-full" key={infoPopup.slug.current}>
              <ModalTemplate
                modalActivator={
                  <ReusableCardComponent
                    key={infoPopup.slug.current}
                    imgUrl={urlFor(infoPopup.thumbnailImage.asset._ref).url()}
                    title={infoPopup.title}
                    body={infoPopup.thumbnailCaption}
                    button={
                      <CustomBtn
                        title={"Learn more"}
                        hasIcon
                        icon={rightArrow}
                      />
                    }
                  />
                }
                modalContent={<BasicModalContent {...basicModalProps} />}
              />
            </div>
          );
        })}
        {/* {prompts.map((prompt, i) => (
          <ReusableCardComponent
            key={i}
            imgUrl={prompt.imgUrl}
            title={prompt.title}
            body={prompt.body}
          />
        ))} */}
      </div>
    </section>
  );
};

export default BeABlessing;

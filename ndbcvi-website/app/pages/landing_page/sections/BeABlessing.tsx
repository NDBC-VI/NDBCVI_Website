import ReusableCardComponent from "@/app/shared/components/ReusableCardComponent";
import { ModalTemplate } from "@/app/shared/modals/ModalTemplate";
import { BasicModalPropsType } from "@/app/types";
import { BasicModalContent } from "@/app/shared/modals/BasicModal/BasicModalContent";
import { urlFor } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";

// const prompts = [
//   {
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/7ab9/f7c3/5e56b436301c21aa48c6c80115b8932d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LJLEWehhGrJHMMfarfFT49VGla-pD73dSLPkeqI52xxYiNDT7dxrWV7Y-XYo69yN96nsKkFHFWqJLLcKIQR46P8Bz-Sk-NMRfop0z-42PGogWDgd0ouCAmVq6xvM5HAdXnDJ~7x7wOuMp-ITJsJcWl4krKdTDvwzUIabO4jzbskPdd07TzPSqsix4iBd4~83cJXDl67EjprC-GGP48~LrZBztLtln0Yf9ipsQKhVCSUzerGaj-q91Hzba0kENTreg7ViUWo-JlftheSJN3hiPB0v2VwfV72Astg4xq4k1ccMldRoReWCeCspoIt6GFwhm2lRVmFthdJtT4L4lwMsXA__",
//     title: "Ministry",
//     body: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle.",
//   },
//   {
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/c399/a4aa/cbd312b546258322b4fb6eadc0c8c032?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EfGDOE6eybNfg0vrfEVKH7JWMBgaXmB7KW8eFqz5U-OIFOwH0pxpkuFlB41kcNGFdpJ1L~FFne8pcGe4kLI4d75tc3tufijWlTFXQ4zh96RfHioMcxcKT1xgIQ17Kvd0bBXLpm2S~4GRWy4slTYyVWkEper~dV4cXQKUJGd54j0zwo2s4x8~D8GZNSJfMjDck4de7blUkqCsOq0nTD-ivuLtgWKH-Klug4wHovIR1v6w9IpoWalnN1KwafVbmxnWItlQ6Y2U1nXaYQuwzqiDtf7ZdcEI5m240PsGqh~bvxInboU~bP404XbCchqZqN6~OjpwF0suglwIMwjtZCMbyg__",
//     title: "Outreach",
//     body: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle.",
//   },
//   {
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/3dc6/ac7e/02f63cd84abc597b4ee10623f3b5f3d5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKbcV9GU2jZcOl96l6a~PG5BJU-DrYxJhUdJpeSB~dFD8EGjCRhyYSdVsI1LxbkGhq-zETT1wuoSvpk72Mu-dhZm-xRxZm8~sRhoNHgpfrt-bZrvXq~ocd29ibPSIX3~jOtYCvm6c-INUe2UwLaKrTrsAUW~kQp7aa2yA8xlYdd66~E~FwPFWY0k0yWgr4SloCCooIMUC8elvkIuqW7-MwWH5KO8QoYEblXMv2xoy4kKj6G06M9as5fxl0EPoyoF5C6WGKcDbepW-VWDvU3vcCMqEQY9jRzVT91nC03T7bl9exaTRivih68McCay-0LtA3jQAcNirtRKZ2Yq9Ppu7Q__",
//     title: "Membership",
//     body: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle.",
//   },
//   {
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/dc73/0b9a/b1d13ef75fbcfa9da5898fcf2c0a15bf?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FECQQZQyrDKGtXg6Y7ZEm9eFP318D~5EPfiBp3dTvenPXAxaDIAOgIozZgiubLtrTCTf~~hqGc5gyFHSa6qNCl5hjdN8lU~cllpWFz5vmq4uPMGSZAABYn8rUjFilzMgAWHSsmL4qgTRSLoZ1k42jReQgM0vBEEcoJwRK3xCBdsdvOiWXa-QRPD3y1rIbyJIZqd1nUjwum94ZS9CvkvXnsiGEAAXDzHHfeMVSYiiCcweVnVv2~tsQPTupxB-v3xEnGM5rJ2qsVvTVj2s2l5LzuNSx9a4tLHFwBsvEQpJermERH6b5pSU0mmcwUrNlHMALEx22tFQnV5NvCy-lN-TCA__",
//     title: "Giving",
//     body: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle.",
//   },
// ];

const BeABlessing = ({infoPopups}: {infoPopups: SanityDocument[]}) => {
  return (
    <section className="py-[120px]">
      <div className="text-center">
        <h2 className="text-[48px] font-[600] mb-[18px]">Be a Blessing</h2>
        <p className="text-[24px] leading-[33.6px]">
          Join us and experience the love of God at NDBC
        </p>
      </div>
      <div className="max-w-[1512px] mx-auto pt-[60px] flex">
        {
          infoPopups.map((infoPopup: SanityDocument) => {
            const basicModalProps: BasicModalPropsType = {
                introduction: infoPopup?.introduction,
                title: infoPopup?.title,
                slug: { 
                    current: infoPopup?.slug.current,
                },
                thumbnailImage: infoPopup?.thumbnailImage,
                thumbnailCaption: infoPopup?.thumbnailCaption,
                headerImages: infoPopup?.headerImages,
                infoSections: infoPopup?.infoSections
            }
            return (
              <div className="w-full" key={infoPopup.slug.current} >
                <ModalTemplate 
                    modalActivator={<ReusableCardComponent key={infoPopup.slug.current} imgUrl={urlFor(infoPopup.thumbnailImage.asset._ref).url()} title={infoPopup.title} body={infoPopup.thumbnailCaption} />} 
                    modalContent={<BasicModalContent {...basicModalProps}/>} 
                />
              </div>
            );
        })
        }
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

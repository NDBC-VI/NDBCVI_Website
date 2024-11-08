import { SanityImageObject } from "@sanity/image-url/lib/types/types"
import { PortableTextBlock } from "sanity"

type InfoSectionType = {
    slug: {
        current: string,
    },
    title: string,
    content: PortableTextBlock[],
    subInfoSections: InfoSectionType[]
}

type FaqSectionType = {
    slug: {
        current: string,
    },
    title: string,
    faqs: FaqType[],
}

type FaqModalPropsType = {
    title: string,
    slug: { 
        current: string,
    },
    faqSections: FaqSectionType[],
    faqInfoSections: InfoSectionType[]
}

type FaqType = {
    title: string,
    slug: { 
        current: string,
    },
    content: PortableTextBlock
}

type BasicModalPropsType = {
    introduction: InfoSectionType,
    title: string,
    slug: { 
        current: string,
    },
    thumbnailImage: SanityImageObject,
    thumbnailCaption: string,
    headerImages: SanityImageObject[],
    infoSections: InfoSectionType[],
}

type ModalContextType = {
    isOpen: boolean,
    handleOpen: () => void,
    handleClose: () => void,
    modalContent: JSX.Element,
    scrollIntoTheView: (e: React.MouseEvent, id: string) => void,
    handleScroll: () => void,
    modalScrollPosition: number,
}

type PersonType = {
    name: string,
    slug: {
        current: string
    },
    photo: SanityImageObject,
    bio: PortableTextBlock,
    link: string,
    linkText: string
}

export type { InfoSectionType, FaqSectionType, BasicModalPropsType, FaqModalPropsType, FaqType, ModalContextType, PersonType }
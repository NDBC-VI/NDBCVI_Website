import { SanityImageObject } from "@sanity/image-url/lib/types/types"
import { RefObject } from "react"
import { PortableTextBlock, SanityDocument } from "sanity"

type InfoSectionType = {
    slug: {
        current: string,
    },
    title: string,
    content: PortableTextBlock[],
    subInfoSections: InfoSectionType[],
    summary: PortableTextBlock[]
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
    thumbnailImage: SanityImageObject,
    thumbnailCaption: string,
    headerImages: SanityImageObject[],
    slug: {
        current: string,
    },
    title: string,
    content: InfoSectionType,
    subInfoSections: InfoSectionType[],
    summary: PortableTextBlock[]
}

type BasicInfoModalPropsType = {
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

type ScrollLinkType = {
    title: string,
    slug: string
}

type ModalContextType = {
    isOpen: boolean,
    domReady: boolean,
    handleOpen: () => void,
    handleClose: () => void,
    modalContent: JSX.Element,
    scrollIntoTheView: (e: React.MouseEvent, id: string) => void,
    handleScroll: () => void,
    modalScrollPosition: number,
    scrollSmallScreen: RefObject<HTMLDivElement>
    scrollLargeScreen: RefObject<HTMLDivElement>
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

interface ReverendList {
    title: string,
    description: PortableTextBlock,
    reverendList: PersonType[]
}

interface DeaconList {
    title: string,
    description: PortableTextBlock,
    deaconList: SanityDocument[]
}

interface MinistryLeadList {
    title: string,
    description: PortableTextBlock,
    ministryLeadList: SanityDocument[]
}

export type { InfoSectionType, FaqSectionType, BasicModalPropsType, BasicInfoModalPropsType, FaqModalPropsType, FaqType, ScrollLinkType, ModalContextType, PersonType, ReverendList, DeaconList, MinistryLeadList }
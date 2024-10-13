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

type InfoSectionRef = {
    _ref: string,
    _type: string,
    _key: string
}

type InfoPopupProps = {
    introduction: InfoSectionType,
    title: string,
    slug: { 
        current: string,
    },
    headerImages: SanityImageObject[],
    infoSections: InfoSectionType[],
}

export type { InfoSectionType, InfoPopupProps, InfoSectionRef }
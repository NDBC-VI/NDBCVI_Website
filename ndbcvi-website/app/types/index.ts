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

type BasicModalProps = {
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
    scrollIntoTheView: (e: React.MouseEvent, id: string) => void
}


export type { InfoSectionType, BasicModalProps, InfoSectionRef, ModalContextType }
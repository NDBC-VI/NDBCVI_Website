import { groq } from "next-sanity";

export const allInfoPopupsQuery = groq`*[_type == "infoPopup"] | order(displayOrder) {
        title,
        slug,
        introduction,
        thumbnailImage,
        thumbnailCaption,
        headerImages,
        infoSections[]->
    }`;


export const bannerQuery = groq`*[_type == "banner"][0]`;

export const faqPopupQuery = groq`*[_type == "faqPopup"][0] {
    title,
    slug,
    faqSection[]->{
        title,
        slug,
        faqs[]->
    },
    faqInfoSections[]->
}`

export const eventsQuery = groq`*[_type == "events"] | order(dateTime) {
    title,
    slug,
    image,
    content,
    dateTime,
    googleMapsLink
}`



// // Get a single post by its slug
// export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
//     title, description, mainImage, body
// }`;

// // Get all post slugs
// export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
//     "params": { "slug": slug.current }
// }`;
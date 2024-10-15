import { groq } from "next-sanity";

// Get all Info Sections
export const allInfoSectionsQuery = groq`*[_type == "infoSection"]`;

export const allInfoPopupsQuery = groq`*[_type == "infoPopup"] | order(displayOrder) {
        title,
        slug,
        introduction,
        thumbnailImage,
        thumbnailCaption,
        headerImages,
        infoSections[]->
    }`;


// // Get a single post by its slug
// export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
//     title, description, mainImage, body
// }`;

// // Get all post slugs
// export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
//     "params": { "slug": slug.current }
// }`;
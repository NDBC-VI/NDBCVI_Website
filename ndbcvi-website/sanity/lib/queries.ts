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

export const eventsPopupQuery = groq`*[_type == "eventsPopup"][0] {
  "data": *[_type == "eventsPopup"][0] {
    title,
    images,
    "eventIds": events[]._ref
    },
    "upcomingEvents": *[_type == "events" && _id in *[_type == "eventsPopup"][0].events[]._ref && startDate > now() && dateTime(startDate) < dateTime(now()) + 30 * 24 * 60 * 60] | order(startDate) {
        title,
        slug,
        image,
        content,
        startDate,
        endDate,
        location,
        googleMapsLink
    }
}`

export const eventsQuery = groq`*[_type == "events" && startDate > now() && dateTime(startDate) < dateTime(now()) + 30 * 24 * 60 * 60] | order(startDate) {
    title,
    slug,
    image,
    content,
    startDate,
    location,
    googleMapsLink
}`
// ----------------------------------------------------------------------------------------------------------------------------------------
export const homePageQuery = groq`*[_type == "homePage"][0] {
    locateUsLink,
    testimoniesLink,
    testimonies[] -> {
        testimony,
        label
    },
    infoPopups[] -> {
        title,
        slug,
        introduction,
        thumbnailImage,
        thumbnailCaption,
        headerImages,
        infoSections[]->
    }
}`

export const aboutPageQuery = groq`*[_type == "aboutPage"][0] {
    aboutNdbcImages[],
    communityActivities[] -> {
        activityName,
        slug,
        image,
        description
    },
    reverendsSection -> {
        description,
        reverendList[]->
    },
    deaconsSection -> {
        description,
        deaconList[]->
    },
    ministryLeadsSection -> {
        description,
        ministryLeadList[]->
    }
}`

export const joinMinistryPageQuery = groq`*[_type == "joinMinistryPage"][0] {
    contactOptions[] ->,
    submitLink
}`

export const bannerQuery = groq`*[_type == "banner"][0]`;

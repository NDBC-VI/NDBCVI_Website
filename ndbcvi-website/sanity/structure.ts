import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet

const singletons = ["homePage", "aboutPage", "joinMinistryPage", "banner", "eventsPopup", "faqPopup"];
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title("Home Page")
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePageSingleton')
            .title("Home Page")
        ),
      S.listItem()
        .title("About Page")
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPageSingleton')
            .title("About Page")
        ),
      S.listItem()
        .title("\"Join A Ministry\" Page")
        .child(
          S.document()
            .schemaType('joinMinistryPage')
            .documentId('joinMinistryPageSingleton')
            .title("\"Join A Ministry\" Page")
        ),
      S.listItem()
        .title("Banner")
        .child(
          S.document()
            .schemaType('banner')
            .documentId('BannerSingleton')
            .title("Banner")
        ),
      S.listItem()
        .title("Events Popup")
        .child(
          S.document()
            .schemaType('eventsPopup')
            .documentId('EventsPopupSingleton')
            .title("Events")
        ),
      S.listItem()
        .title("FAQ Popup")
        .child(
          S.document()
            .schemaType('faqPopup')
            .documentId('FAQPopupSingleton')
            .title("FAQs")
        ),
      ...S.documentTypeListItems().filter(
        (docType) => !singletons.includes(docType.getId() as string)
      )])

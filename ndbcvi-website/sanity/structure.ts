import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet

const singletons = ["homePage", "aboutPage"];
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
      ...S.documentTypeListItems().filter(
        (docType) => !singletons.includes(docType.getId() as string)
      )])

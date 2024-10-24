import { type SchemaTypeDefinition } from 'sanity'
import infoSection from './infoSection'
import infoPopup from './infoPopup'
import banner from './banner'
import expandablePanel from './expandablePanel'
import faqSection from './faqSection'
import faqPopup from './faqPopup'
import event from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [infoSection, infoPopup, banner, expandablePanel, faqSection, faqPopup, event],
}

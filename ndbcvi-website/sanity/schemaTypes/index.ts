import { type SchemaTypeDefinition } from 'sanity'
import infoSection from './infoSection'
import infoPopup from './infoPopup'
import banner from './banner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [infoSection, infoPopup, banner],
}

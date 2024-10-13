import { type SchemaTypeDefinition } from 'sanity'
import infoSection from './infoSection'
import singleImage from './singleImage'
import infoPopup from './infoPopup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [infoSection, singleImage, infoPopup],
}

import { type SchemaTypeDefinition } from 'sanity'
import infoSection from './infoSection'
import singleImage from './singleImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [infoSection, singleImage],
}

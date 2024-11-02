import { type SchemaTypeDefinition } from 'sanity'
import infoSection from './infoSection'
import infoPopup from './infoPopup'
import banner from './banner'
import faqSection from './faqSection'
import faqPopup from './faqPopup'
import event from './event'
import churchLeader from './churchLeader'
import reverendList from './reverendList'
import deaconList from './deaconList'
import ministryLeadList from './ministryLeadList'
import reverend from './reverend'
import faq from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [infoSection, infoPopup, banner, faq, faqSection, faqPopup, event, churchLeader, reverend, reverendList, deaconList, ministryLeadList],
}

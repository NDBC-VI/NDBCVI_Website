import React from 'react'
import { SanityDocument } from 'next-sanity'
import InfoSection from './InfoSection'

const InfoSections = ({ infoSections = [] }: { infoSections: SanityDocument[] }) => {

    return (
    <div>
        { infoSections.map(section => {
            return (
                <div key={section._id} >
                    <InfoSection infoSection={section} />
                </div>
            )
        })}
    </div>
    )
}

export default InfoSections
const faqPopup = {
    name: 'faqPopup',
    title: 'FAQ Popup',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
        },
        {
            name: 'faqSection',
            title: 'FAQ Section',
            type: 'array',
            of: [
                {
                    name: 'faqSectionRef',
                    title: 'FAQ Section Reference',
                    type: 'reference',
                    weak: false,
                    to: [{type: 'faqSection'}]
                }
            ]
        },
        {
            name: 'faqInfoSections',
            title: 'FAQ Info Sections',
            type: 'array',
            of: [
                {
                    name: 'infoSectionRef',
                    title: 'Info Section Reference',
                    type: 'reference',
                    weak: false,
                    to: [{type: 'infoSection'}]
                }
            ]
        }
    ]
}

export default faqPopup;
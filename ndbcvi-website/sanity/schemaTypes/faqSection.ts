const faqSection = {
    name: 'faqSection',
    title: 'FAQ Sections',
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
            name: 'faqs',
            title: 'Frequently Asked Questions',
            type: 'array',
            of: [
                {
                    name: 'expandablePanelRef',
                    title: 'Expandable Panel Reference',
                    type: 'reference',
                    weak: false,
                    to: [{type: 'expandablePanel'}]
                }
            ]
        }
    ]
}

export default faqSection;
const faq = {
    name: 'faq',
    title: 'FAQs',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Question',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
        },
        {
            name: 'content',
            title: 'Answer',
            type: 'array',
            of: [{ type: 'block' }]
        },
    ]
}

export default faq;
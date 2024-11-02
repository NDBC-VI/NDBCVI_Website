const banner = {
    name: 'banner',
    title: 'Banner',
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
            name: 'content',
            type: 'string'
        },
        {
            name: 'link',
            type: 'url'
        },
        {
            name: 'linkText',
            type: 'string'
        }
    ]
}

export default banner;
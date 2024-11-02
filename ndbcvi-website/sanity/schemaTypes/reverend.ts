const reverend = {
    name: 'reverend',
    title: 'Reverends',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'bio',
            type: 'array',
            of: [{ type: 'block' }]
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

export default reverend;
const churchLeader = {
    name: 'churchLeader',
    title: 'Church Leaders',
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
    ]
}

export default churchLeader;
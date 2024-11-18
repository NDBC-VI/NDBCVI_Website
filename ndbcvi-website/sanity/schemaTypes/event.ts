const event = {
    name: 'events',
    title: 'Events',
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
            name: 'image',
            title: 'Image',
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
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'startDate',
            title: 'Start',
            type: 'datetime'
        },
        {
            name: 'endDate',
            title: 'End',
            type: 'datetime'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'googleMapsLink',
            type: 'url'
        }
    ]
}

export default event;
const eventsPopup = {
    name: 'eventsPopup',
    title: 'Events Popup',
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
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
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
                }
            ]
        },
        {
            name: 'events',
            title: 'Scheduled Events',
            type: 'array',
            of: [
                {
                    name: 'eventRef',
                    title: 'Events',
                    type: 'reference',
                    weak: false,
                    to: [{type: 'events'}]
                }
            ]
        },
    ]
}

export default eventsPopup;
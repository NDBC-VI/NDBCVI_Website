const infoPopup = {
    name: 'infoPopup',
    title: 'Info Popups',
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
            name: 'displayOrder',
            type: 'number'
        },
        {
            name: 'thumbnailImage',
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
            name: 'thumbnailCaption',
            type: 'string'
        },
        {
            name: 'headerImages',
            title: 'Header Images',
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
            name: 'introduction',
            title: 'Introduction',
            type: 'infoSection'
        },
        {
            name: 'infoSections',
            title: 'Info Sections',
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

export default infoPopup;
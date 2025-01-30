const aboutPage = {
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        {
            name: 'aboutNdbcImages',
            title: 'About NDBC Images',
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
            name: 'communityActivities',
            title: 'Community Activities',
            type: 'array',
            of: [
                {
                    name: 'communityLifeActivity',
                    title: 'Activity',
                    type: 'reference',
                    weak: false,
                    to: [{type: 'communityActivity'}]
                }
            ]
        },
        {
            name: 'reverendsSection',
            title: 'Reverends',
            type: 'reference',
            weak: false,
            to: [{type: 'reverendList'}]
        },
        {
            name: 'deaconsSection',
            title: 'Deacons',
            type: 'reference',
            weak: false,
            to: [{type: 'deaconList'}]
        },
        {
            name: 'ministryLeadsSection',
            title: 'Ministry Leads',
            type: 'reference',
            weak: false,
            to: [{type: 'ministryLeadList'}]
        }
    ]
}

export default aboutPage;
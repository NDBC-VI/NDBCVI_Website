const ministryLead = {
    name: 'ministryLeadsList',
    title: 'Ministry Leads',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'ministryLeadList',
            title: 'Ministry Leads',
            type: 'array',
            of: [
                {
                    name: 'churchLeaderRef',
                    title: 'Church Leader',
                    type: 'reference',
                    weak: false,
                    to: [{type: 'churchLeader'}]
                },
                {
                    name: 'reverendRef',
                    title: 'Reverend',
                    type: 'reference',
                    weak: false,
                    to: [{type: 'reverend'}]
                }
            ]
        }
    ]
}

export default ministryLead;
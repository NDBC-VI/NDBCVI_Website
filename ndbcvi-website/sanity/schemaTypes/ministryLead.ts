const ministryLead = {
    name: 'ministryLead',
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
                    title: 'Ministry Lead',
                    type: 'reference',
                    weak: false,
                    to: [{type: 'churchLeader'}]
                }
            ]
        }
    ]
}

export default ministryLead;
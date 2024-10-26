const reverend = {
    name: 'reverend',
    title: 'Reverends',
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
            name: 'reverendList',
            title: 'Reverends of New Dawn Baptist Church V.I.',
            type: 'array',
            of: [
                {
                    name: 'churchLeaderRef',
                    title: 'Reverend',
                    type: 'reference',
                    weak: false,
                    to: [{type: 'churchLeader'}]
                }
            ]
        }
    ]
}

export default reverend;
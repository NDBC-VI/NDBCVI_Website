const reverendList = {
    name: 'reverendList',
    title: 'Reverends List',
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

export default reverendList;
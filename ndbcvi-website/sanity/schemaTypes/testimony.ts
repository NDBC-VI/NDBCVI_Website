const testimony = {
    name: 'testimony',
    title: 'Testimonies',
    type: 'document',
    fields: [
        {
            name: 'testimony',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'label',
            type: 'string'
        }
    ]
}

export default testimony;
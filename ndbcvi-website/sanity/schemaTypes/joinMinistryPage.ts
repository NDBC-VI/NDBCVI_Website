const joinMinistryPage = {
    name: 'joinMinistryPage',
    title: 'Join A Ministry Page',
    type: 'document',
    fields: [
        {
            name: 'contactOptions',
            type: 'array',
            of: [
                {
                    name: 'emailContact',
                    type: 'reference',
                    weak: true,
                    to: [{ type: 'contactEmail' }]
                },
                {
                    name: 'phoneContact',
                    type: 'reference',
                    weak: true,
                    to: [{ type: 'contactPhone' }]
                }
            ]
        },
        {
            name: 'submitLink',
            type: 'url',
        }
    ]
}

export default joinMinistryPage;
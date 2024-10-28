const deaconList = {
    name: 'deaconList',
    title: 'Deacon List',
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
            name: 'deaconList',
            title: 'Deacons of New Dawn Baptist Church V.I.',
            type: 'array',
            of: [
                {
                    name: 'churchLeaderRef',
                    title: 'Deacon',
                    type: 'reference',
                    weak: false,
                    to: [{type: 'churchLeader'}]
                }
            ]
        }
    ]
}

export default deaconList;
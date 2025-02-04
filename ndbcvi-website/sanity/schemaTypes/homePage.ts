const homePage = {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'locateUsLink',
            type: 'url'
        },
        {
            name: 'testimoniesLink',
            type: 'url'
        },
        {
            name: 'testimonies',
            type: 'array',
            of: [{ 
                name: 'testimonyRef',
                type: 'reference',
                weak: true,
                to: [{ type: 'testimony' }]
            }]
        },
        {
            name: 'infoPopups',
            title: '\"Be a Blessing\" popups',
            type: 'array',
            of: [{
                name: 'infoPopupRef',
                type: 'reference',
                weak: true,
                to: [{ type: 'infoPopup' }]

            }]
        }
    ]
}

export default homePage;
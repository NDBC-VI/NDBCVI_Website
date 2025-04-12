import { Rule, ValidationContext } from "sanity";

const event = {
    name: 'events',
    title: 'Events',
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
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'startDate',
            title: 'Start',
            type: 'datetime'
        },
        {
            name: 'endDate',
            title: 'End',
            type: 'datetime'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'mapsLink',
            type: 'url',
            validation: (rule: Rule) => rule.custom((link: string, context: ValidationContext) => {
                if(link == undefined && context.document?.onlineMeetingLink == undefined) {
                    return "Include a location link if this event is not being held online";
                }
                return true;
            })
        },
        {
            name: 'onlineMeetingLink',
            type: 'url',
            validation: (rule: Rule) => rule.custom((link: string, context: ValidationContext) => {
                if(link == undefined && context.document?.mapsLink == undefined) {
                    return "Include a meeting link if this event is not being held in person";
                }
                return true;
            })
        }
    ]
}

export default event;
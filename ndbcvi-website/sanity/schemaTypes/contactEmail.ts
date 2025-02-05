import { Rule } from "@sanity/types";

const contactEmail = {
    name: 'contactEmail',
    type: 'document',
    fields: [
        {
            name: "emailAddress",
            type: "string",
            validation: (rule: Rule) => rule.required().email()
        }
    ]
}

export default contactEmail;
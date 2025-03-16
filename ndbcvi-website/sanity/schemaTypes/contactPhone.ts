import parsePhoneNumberFromString from "libphonenumber-js";
import { Rule } from "@sanity/types";
import PhoneInput from "@/app/sanity-components/PhoneInput";

const contactPhone = {
    name: 'contactPhone',
    type: 'document',
    fields: [
        {
            name: "Name",
            type: "string"
        },
        {
            name: "countryCode",
            type: "string",
            hidden: true
        },
        {
            name: "phoneNumber",
            type: "string",
            components: {
                input: PhoneInput,
            },
            validation: (rule: Rule) => 
                rule.custom((phone: string) => {
                    if(!phone) {
                        return "Phone number is required";
                    }
                    const phoneNumber = parsePhoneNumberFromString(phone);
                    console.log(phone);
                    if (!phoneNumber || !phoneNumber.isValid()) {
                        return 'Invalid phone number for the selected country';
                    }
                    return true;
                })
        }
    ]
}

export default contactPhone;
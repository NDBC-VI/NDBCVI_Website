import React, { useState } from 'react';
import { set, StringInputProps } from 'sanity';
import { AsYouType, parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';

const PhoneInput = (props: StringInputProps) => {
    const [phoneNumber, setPhoneNumber] = useState(props.value || '+234');
    
    const countryCode = 'NG'; // Default country code

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawInput = event.target.value;
        const formatter = new AsYouType(countryCode as CountryCode);
        const parsedPhone = parsePhoneNumberFromString(rawInput, countryCode as CountryCode);


        // Format the phone number automatically
        const formatted = parsedPhone?.formatInternational() || rawInput;
        setPhoneNumber(formatter.input(rawInput));
        props.onChange(set(formatted));
    };

    return (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {/* Phone Number Input */}
        <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter phone number"
            style={{ padding: '5px', width: '200px' }}
            aria-label='Phone Number input'
        />
        </div>
    );
};

export default PhoneInput;

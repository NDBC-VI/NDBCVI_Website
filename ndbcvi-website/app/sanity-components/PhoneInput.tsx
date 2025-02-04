import React, { useState } from 'react';
import { set, StringInputProps } from 'sanity';
import { parsePhoneNumberFromString, getCountries, getCountryCallingCode, CountryCode } from 'libphonenumber-js';

const countryList = getCountries().map((country) => ({
    code: country,
    callingCode: `+${getCountryCallingCode(country)}`,
    }));

const PhoneInput = (props: StringInputProps) => {
    const [countryCode, setCountryCode] = useState('+234'); // Default country code
    const [phoneNumber, setPhoneNumber] = useState(props.value || '');

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCountryCode(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawInput = event.target.value;
        const parsedPhone = parsePhoneNumberFromString(rawInput, countryCode.replace('+', '') as CountryCode);

        // Format the phone number automatically
        const formatted = parsedPhone?.formatNational() || rawInput;
        setPhoneNumber(formatted);
        props.onChange(set(formatted));
    };

    return (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {/* Country Code Dropdown */}
        <select value={countryCode} onChange={handleCountryChange} style={{ padding: '5px' }}>
            {countryList.map(({ code, callingCode }) => (
            <option key={code} value={callingCode}>
                {callingCode} ({code})
            </option>
            ))}
        </select>

        {/* Phone Number Input */}
        <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter phone number"
            style={{ padding: '5px', width: '200px' }}
        />
        </div>
    );
};

export default PhoneInput;

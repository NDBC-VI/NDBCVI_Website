"use client";
import { useState } from "react";

interface CustomInputProps {
  type: "email" | "text";
  placeholder: string;
}

const CustomInput = ({ type, placeholder }: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // validateInput(inputValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full relative">
      <input
        aria-label="Email/Phone Number Input"
        type={type === "email" || type === "text" ? "text" : "text"}
        className={`w-full pb-3 text-[24px] text-[#C4C4C4] border-b-[2px] focus:outline-none ${
          !isFocused ? "border-b-[#D9D9D9]" : "border-b-[#121212]"
        }`}
        placeholder={!isFocused ? placeholder : ""}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        value={inputValue}
      />
    </div>
  );
};

export default CustomInput;

"use client";
import { useState } from "react";

interface CustomTextAreaProps {
  placeholder: string;
}

const CustomTextArea = ({ placeholder }: CustomTextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full relative">
      <textarea
        className={`w-full pb-3 text-[24px] text-[#C4C4C4] border-b-[2px] outline-none resize-none ${
          !isFocused ? "border-b-[#D9D9D9]" : "border-b-[#121212]"
        }`}
        placeholder={!isFocused ? placeholder : ""}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        value={inputValue}
        rows={2}
      />
    </div>
  );
};

export default CustomTextArea;

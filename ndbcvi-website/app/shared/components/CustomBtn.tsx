import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

interface CustomBtnProps {
  title: string;
  icon?: StaticImport;
  hasIcon?: boolean;
  btnFn?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomBtn = ({ title, icon, hasIcon = false, btnFn }: CustomBtnProps) => {
  return (
    <button
      type="button"
      className="py-[6px] px-5 border border-white rounded-[100px] flex items-center gap-[6px] font-[500] cursor-pointer"
      onClick={btnFn}
    >
      <p className="text-[14px]">{title}</p>
      {hasIcon && (
        <Image src={icon ?? ""} alt="button icon" className="w-[13px]" />
      )}
    </button>
  );
};

export default CustomBtn;

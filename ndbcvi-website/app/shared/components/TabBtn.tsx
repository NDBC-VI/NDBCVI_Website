import React, { MouseEventHandler } from "react";

interface TabBtnProps {
  title: string;
  active: boolean;
  clickFn: MouseEventHandler<HTMLButtonElement>
}

const TabBtn = ({ title, active, clickFn }: TabBtnProps) => {
  return (
    <button
      type="button"
      className={`${
        active ? "text-black" : "text-[#757575]"
      } bg-[#F6F6F6] font-[500] py-2 px-6 rounded-[100px]`}
      onClick={clickFn}
    >
      {title}
    </button>
  );
};

export default TabBtn;

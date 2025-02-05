import React from "react";

interface FooterServiceCardProps {
  title: string;
}

const FooterServiceCard = ({ title }: FooterServiceCardProps) => {
  return (
    <button
      type="button"
      className="border border-white rounded-[100px] text-[14px] py-2 px-5"
    >
      {title}
    </button>
  );
};

export default FooterServiceCard;

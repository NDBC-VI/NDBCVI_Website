import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CustomBtnProps {
  title: string;
  icon?: StaticImport;
  isMenu?: boolean;
}

const CustomBtn = ({ title, icon, isMenu = false }: CustomBtnProps) => {
  return (
    <button
      type="button"
      className="py-2 px-6 border border-white rounded-[100px] flex items-center gap-[6px] font-[500]"
    >
      <p>{title}</p>
      {isMenu && <Image src={icon ?? ""} alt="button icon" />}
    </button>
  );
};

export default CustomBtn;

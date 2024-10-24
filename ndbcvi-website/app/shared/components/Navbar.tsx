"use client";
import Link from "next/link";
import churchLogo from "../../assets/pngs/church-logo.png";
import menuIcon from "./../../assets/svgs/menu.svg";
import Image from "next/image";
import CustomBtn from "./CustomBtn";
import MenuModal from "../modals/MenuModal";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" px-[60px] py-[20px] flex items-center justify-between fixed top-0 text-white w-full z-10 bg-black bg-opacity-40 backdrop-blur-lg">
      <div className="flex gap-[48px] items-center text-[20px] font-[500]">
        <Link
          href="/"
          children={
            <Image
              src={churchLogo}
              alt="Church logo"
              width={43.5}
              height={48}
            />
          }
        />
        <Link href="/pages/about_ndbc" children={<p>About NDBC</p>} />
        <Link href="" children={<p>Events</p>} />
        <Link href="" children={<p>Information Center</p>} />
      </div>
      <CustomBtn
        title="Menu"
        icon={menuIcon}
        hasIcon
        btnFn={() => setIsOpen(true)}
      />
      <MenuModal onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;

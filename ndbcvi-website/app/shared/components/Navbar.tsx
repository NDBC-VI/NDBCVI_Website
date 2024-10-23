import Link from "next/link";
import churchLogo from "../../assets/pngs/church-logo.png";
import menuIcon from "./../../assets/svgs/menu.svg";
import Image from "next/image";
import CustomBtn from "./CustomBtn";
const Navbar = () => {
  return (
    <nav className=" px-[60px] py-[25px] flex items-center justify-between fixed top-0 text-white w-full z-10 bg-black bg-opacity-40 backdrop-blur-lg">
      <div className="flex gap-[48px] items-center text-[20px] font-[500]">
        <Image src={churchLogo} alt="Church logo" width={43.5} height={48} />
        <Link href="" children={<p>About NDBC</p>} />
        <Link href="" children={<p>Events</p>} />
        <Link href="" children={<p>Information Center</p>} />
      </div>
      <CustomBtn title="Menu" icon={menuIcon} isMenu />
    </nav>
  );
};

export default Navbar;

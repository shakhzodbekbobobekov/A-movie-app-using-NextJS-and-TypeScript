import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from 'react';
import { AiOutlineSearch, AiOutlineUser , AiOutlineLogout} from "react-icons/ai";
import { BiBellMinus } from "react-icons/bi";
import { AuthContext } from '../../context/auth.context';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const {logout} = useContext(AuthContext)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${scrolled && "bg-red-500"}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
          <Image
            className={"cursor-pointer object-contain"}
            src={"/logo.svg"}
            alt={"logo"}
            width={56}
            height={56}
          />

          <ul className="space-x-4 md:flex hidden">
            <li className="navLink">Home</li>
            <li className="navLink">Movies</li>
            <li className="navLink">TV Shows</li>
            <li className="navLink">New</li>
            <li className="navLink">Popular</li>
          </ul>
        </div>
        <div className="flex items-center text-sm font-light space-x-4 ">
          <AiOutlineSearch className="h-6 w-6 cursor-pointer" />
          <p className="hidden lg:flex">Kids</p>
          <BiBellMinus className="h-6 w-6 cursor-pointer" />
          <Link href={"/account"}>
            <AiOutlineUser className="h-6 w-6 cursor-pointer" />
          </Link>
          <AiOutlineLogout className="h-6 w-6 cursor-pointer" onClick={logout} />
          
        </div>
      </header>
    </>
  );
};

export default Header;

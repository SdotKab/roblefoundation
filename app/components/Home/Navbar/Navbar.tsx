"use client"

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

type Props = {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={`transition-all ${navBg ? "bg-[#284475] bg-opacity-95 shadow-md" : "fixed"} duration-200 h-[12vh] z-[100] fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Link
            href="/#home"
          >
            <h1 className="text-bold text-xl md:text-2xl text-white">The Roble Foundation</h1>
          </Link>
        </div>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className={`text-white text-semibold hover:text-secondary-500 transition-all duration-500`}
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Button */}
        <div className="hidden lg:flex items-center space-x-10">
          <Link className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
          href="/#contact"
          >
            DONATE
          </Link>
        </div>
        {/* Burger Menu */}
        <HiBars3BottomRight
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
          onClick={openNav}
        />
      </div>
    </div>
  );
}

export default Navbar;

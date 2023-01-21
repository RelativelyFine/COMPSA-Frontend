import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import navItems from "./navItems";
import MobileNav from "./MobileNav";
import CircuitSubMenu from "./CircuitSubMenu";

const colortheme = (color, type) => {
  if (color === "light") {
    if (type === "background") {
      return "bg-[#aea2e336]";
    }
    if (type === "text") {
      return "text-black";
    }
  } else {
    if (type === "background") {
      return "bg-[#1e0d44d5]";
    }
    if (type === "text") {
      return "text-white";
    }
  }
};

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div
      className={`z-50 fixed w-screen h-[53px] sm:h-[70px] top-0 backdrop-blur ${colortheme(
        props.color,
        "background"
      )}`}
    >
      <div className="flex justify-between items-center w-full h-full pl-2 pr-8 align-items 2xl:px-8">
        <div className="flex h-10 w-10">
          <Image
            src="/logo.png"
            alt="Compsa logo in purple"
            width="40"
            height="40"
          />
        </div>
        <div>
          <ul className="hidden md:flex">
            {navItems.map(({ text, href }) => (
              <Link href={href} key={text}>
                <button>
                  <li
                    className={`ml-10 pt-2 text-lg hover:border-b-2 border-current font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none ${colortheme(
                      props.color,
                      "text"
                    )}`}
                  >
                    {text}
                  </li>
                </button>
              </Link>
            ))}
            <li className="ml-10 text-lg hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none bg-white p-1 px-2 rounded-xl">
              <CircuitSubMenu isMobile={false} />
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden square-full cursor-pointer"
          >
            <AiOutlineMenuUnfold size={50} className="text-[#553ADD]" />
          </div>
          <MobileNav handleNav={handleNav} nav={nav} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

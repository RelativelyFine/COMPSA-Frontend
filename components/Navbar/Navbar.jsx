import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SiDiscord } from "react-icons/si";

import navItems from "./navItems";
import DesktopNavItem from "./DesktopNavItem";
import MobileNav from "./MobileNav";
import colortheme from "./colortheme";

import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import CircuitSubMenuItems from "./CircuitSubMenuItems";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`z-50 fixed w-screen h-[53px] sm:h-[70px] top-0 backdrop-blur ${colortheme(
        props.color,
        "background"
      )}`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 align-items 2xl:px-8">
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
            {navItems.map((item) => (
              <DesktopNavItem key={item.text} {...item} color={props.color} />
            ))}
            <li className="ml-10 text-lg hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none bg-white p-1 px-2 rounded-xl">
              <div className="">
                <Menu as="div" className="relative inline-block text-left ">
                  <div className="">
                    <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
                      CIRCUIT
                      <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-black"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <CircuitSubMenuItems />
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden square-full shadow-lg shadow-grey-700 cursor-pointer"
          >
            <AiOutlineMenuUnfold size={50} className="text-white" />
          </div>
          <MobileNav handleNav={handleNav} nav={nav} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SiDiscord } from "react-icons/si";

import navItems from "./navItems";
import DesktopNavItem from "./DesktopNavItem";
import MobileNavItem from "./MobileNavItem";
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
          <img src="/logonav.png" alt="/" width="40" height="40" />
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
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f6f1ff] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <img
                src="/logo.png"
                alt="/"
                width="80"
                height="80"
                min-width="80"
              />
              <div
                onClick={handleNav}
                className="square-full shadow-lg shadow-grey-700 cursor-pointer"
              >
                <AiOutlineMenuFold size={50} />
              </div>
            </div>
            <div className="border-b border-grey-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Are you keeping track of your compsa bits?
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul>
              <li>
                <div>
                  <Menu as="div" className="relative inline-block text-left ">
                    <div className="">
                      <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
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
                      <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <CircuitSubMenuItems />
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </li>
              {navItems.map((item) => (
                <MobileNavItem key={item.text} {...item} />
              ))}
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-black font-bold pb-5">
                Want Our Media?
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="https://ca.linkedin.com/company/queenscompsa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillLinkedin size={25} />
                  </div>
                </a>

                <a
                  href="https://discord.com/invite/3UdVP4erqE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <SiDiscord size={25} />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/queenscompsa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillFacebook size={25} />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/compsa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillInstagram size={25} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

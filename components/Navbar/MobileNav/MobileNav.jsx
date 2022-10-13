import React, { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SiDiscord } from "react-icons/si";

import navItems from "../navItems";
import MobileNavItem from "./MobileNavItem";
import SocialMediaItem from "./SocialMediaItem";

import {
  AiOutlineMenuFold,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import CircuitSubMenuItems from "../CircuitSubMenuItems";

const MobileNav = ({ handleNav, nav }) => (
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
          <Image
            src="/logo.png"
            alt="Compsa logo in purple"
            width="80"
            height="80"
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
            <SocialMediaItem
              icon={<AiFillLinkedin size={25} />}
              link="https://ca.linkedin.com/company/queenscompsa"
            />
            <SocialMediaItem
              icon={<SiDiscord size={25} />}
              link="https://discord.com/invite/3UdVP4erqE"
            />
            <SocialMediaItem
              icon={<AiFillFacebook size={25} />}
              link="https://www.facebook.com/queenscompsa"
            />
            <SocialMediaItem
              icon={<AiFillInstagram size={25} />}
              link="https://www.instagram.com/compsa/"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MobileNav;

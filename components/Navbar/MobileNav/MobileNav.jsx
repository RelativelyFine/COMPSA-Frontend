import React from "react";
import OptimizedImageWithFallback from "../../ErrorCollection/Fallback";
import {
  AiOutlineMenuFold,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { SiDiscord } from "react-icons/si";

import navItems from "../navItems";
import MobileNavItem from "./MobileNavItem";
import SocialMediaItem from "./SocialMediaItem";
import CircuitSubMenu from "../CircuitSubMenu";
import Link from "next/link";

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
          : "fixed left-[-120%] top-0 p-10 ease-in duration-500"
      }
    >
      <div>
        <div className="flex w-full items-center justify-between">
          <OptimizedImageWithFallback
            src="/logo.png"
            alt="Compsa logo in purple"
            width="80"
            height="80"
          />
          <div onClick={handleNav} className="square-full cursor-pointer">
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
            <CircuitSubMenu isMobile={true} />
          </li>
          <Link href="/">
            <li className="w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
              About
            </li>
          </Link>
          <Link href="/resources">
            <li className="w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
              Resources
            </li>
          </Link>
          <Link href="/contact">
            <li className="w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
              Contact
            </li>
          </Link>
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

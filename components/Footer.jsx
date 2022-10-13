import React from "react";
import Link from "next/link";

import {
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 container-style w-full bg-[#2e1844]">
      <div className="grid w-full px-[4vw] py-10 col-span-5">
        <h2 className="uppercase text-[1.7em] sm:text-[3vw] tracking-[0.1em] text-[#fff]">
          Stay Connected
        </h2>
        <div className="scale-[69%]">
          <div className="relative -left-[5vw] cursor-pointer hover:scale-101 ease-in duration-300 flex gap-2">
            <a
              href="https://www.instagram.com/compsa/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pr-4 cursor-pointer hover:scale-110 ease-in duration-100 flex gap-2">
                <AiFillInstagram className="fill-[#fff]" size={50} />
              </div>
            </a>
            <a
              href="https://ca.linkedin.com/company/queenscompsa"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pr-4 cursor-pointer hover:scale-110 ease-in duration-100 flex gap-2">
                <AiFillLinkedin className="fill-[#fff]" size={40} />
              </div>
            </a>
            <a
              href="mailto:feedback@compsa.queensu.ca"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pr-4 cursor-pointer hover:scale-110 ease-in duration-100 flex gap-2">
                <AiFillMail className="fill-[#fff]" size={40} />
              </div>
            </a>
            <a
              href="https://www.facebook.com/queenscompsa"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pr-4 cursor-pointer hover:scale-110 ease-in duration-100 flex gap-2">
                <AiFillFacebook className="fill-[#fff]" size={40} />
              </div>
            </a>
            <a
              href="https://discord.com/invite/3UdVP4erqE"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer hover:scale-110 ease-in duration-100 flex gap-2">
                <SiDiscord className="fill-[#fff]" size={40} />
              </div>
            </a>
          </div>
        </div>
        <h2 className="uppercase text-[0.8em] sm:text-[1vw] tracking-[0.1em] pt-4 text-[#fff]">
          ©2022 COMPSA. All rights reserved.
        </h2>
      </div>
      <div className=" invisible grid justify-items-start w-full px-[10%] py-10 col-span-7 sm:visible">
        <h2 className="uppercase text-[1.7em] sm:text-[3vw] tracking-[0.1em] text-[#fff]">
          Land Acknowledgement
        </h2>
        <p className=" text-[0.7em] sm:text-[1.5vw] tracking-[0.1em] text-[#fff]">
          Let us acknowledge that Queen’s is situated on traditional Anishinaabe
          (Ah- nish-in-ah-bay) and Haudenosaunee (Ho-den-o-show-nee) territory.
          We are grateful to be able to live, learn, and play on these lands.
        </p>
        <h2 className="uppercase text-[0.8em] sm:text-[1vw] tracking-[0.1em] pt-4 text-[#fff]">
          ©2022 COMPSA. All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;

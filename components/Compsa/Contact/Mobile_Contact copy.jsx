import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/contact_banner.png";
import robot from "../../../public/contact_robot.png";
import point from "../../../public/location_pointer.png";
import form_box from "../../../public/contact_form_box.png";
import port_box from "../../../public/contact_portdir.png";
function Mobile_Main() {
  return (
    <div className="bg-[#EEEBFD] pt-14">
      <div className="flex flex-row flex-nowrap justify-center pt-3">
        <h1 className="font-inter font-normal text-center tracking-widest text-black text-4xl">
          Contact Us
        </h1>
      </div>
      <div className="relative pt-28">
        <Image src={banner} alt="Banner" className="w-full h-1/2 z-3" />
        <Image
          src={robot}
          alt="Robot"
          className="absolute w-1/3 h-1/5 z-2 left-1/2 z-2 top-9"
        />
        <Image
          src={point}
          alt="Point"
          className="absolute z-2 z-2 bottom-[200px] left-1/2 transform -translate-x-1/2 mr-2"
        />
        <div className="grid absolute z-2 left-1/2 transform -translate-x-1/2 top-1/3 grid-cols-2 w-[80vw]">
          <Link href="/mobileContacts">
            <Image src={form_box} alt="Form Box" className="" />
          </Link>
          <Link href="/mobilePortfolios">
            <Image src={port_box} alt="Port Dir Box" className="" />
          </Link>
        </div>
        <div className="font-inter font-thin text-[8vw] tracking-widest absolute top-8 left-6">
          How can <br /> we help?
        </div>
        <div className="font-inter font-thin text-xl tracking-widest absolute bottom-28 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-center">
          Our Office is located in <br />{" "}
          <p className="underline">Goodwin Hall, Room 101</p>
        </div>
      </div>
    </div>
  );
}

export default Mobile_Main;

import React from 'react'
import Image from "next/image"
import arrow from "../../public/back_arrow.png"
import Link from "next/link"
import banner from "../../public/contact_banner.png"
import robot from "../../public/contact_robot.png"
import point from "../../public/location_pointer.png"
import form_box from "../../public/contact_form_box.png"
import port_box from "../../public/contact_portdir.png"


function Mobile_Main() {
  return (
    <div className='bg-[#EEEBFD] pt-14'>
        <div className='flex flex-row flex-nowrap justify-center pt-3'>
            <h1 className="font-inter font-normal text-center tracking-widest text-black text-4xl">
                Contact Us
            </h1>
        </div> 
        <div className='relative pt-28'>
            <Image src={banner} alt="Banner" className='w-full h-1/2 z-3'/>
            <Image src={robot} alt="Robot" className='absolute w-1/3 h-1/5 z-2 left-1/2 z-2 top-9'/>
            <Image src={point} alt="Point" className='absolute z-2 left-1/3 z-2 top-2/3 ml-12'/>
            <Link href="/mobile_contact_form"><Image src={form_box} alt="Form Box" className='absolute w-40 h-52 z-2 left-0 z-2 top-1/3 ml-8 pt-3'/></Link>
            <Link href="/mobile_contact_ports"><Image src={port_box} alt="Port Dir Box" className='absolute w-40 h-52 z-2 right-0 z-2 top-1/3 mr-8 pt-3'/></Link>
            <div className='font-inter font-thin text-2xl tracking-widest absolute top-8 left-6'>How can</div>
            <div className='font-inter font-thin text-2xl tracking-widest absolute top-16 left-6'>we help?</div>
            <div className='font-inter font-thin text-xl tracking-widest absolute bottom-28 right-16'>Our Office is located in</div>
            <div className='font-inter font-thin text-xl tracking-widest absolute bottom-20 right-12 mr-2 underline'>Goodwin Hall, Room 101</div>
        </div>
    </div>
  )
}

export default Mobile_Main
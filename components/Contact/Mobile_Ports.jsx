import React from 'react'
import Image from "next/image"
import arrow from "../../public/back_arrow.png"
import Link from "next/link"

const Mobile_Ports = () => {
    return (
      <div className='bg-[#EEEBFD] pt-16'>
        <div className='flex flex-row flex-nowrap justify-start gap-x-10 pt-3 mb-2'>
            <Link href="/mobile_contact">
                <button className='ml-4'>
                    <Image src={arrow} alt="Back Arrow" />
                </button>
            </Link>
            <h1 className="font-inter font-normal text-center tracking-widest text-black text-4xl">
                Contact Us
            </h1>
        </div> 
        <div className='flex justify-center pb-56 pt-14'>
            <div className='bg-white bg-opacity-50 rounded-3xl font-inter py-4 px-9'>
                <div className='text-lg tracking-widest font-inter font-thin'>Academics</div>
                <div className='border-t-2 border-black text-xs tracking-widest font-inter mb-3'>academics@compsa.queensu.ca</div>
                <div className='text-lg tracking-widest font-inter font-thin'>Events</div>
                <div className='border-t-2 border-black text-xs tracking-widest font-inter mb-3'>events@compsa.queensu.ca</div>
                <div className='text-lg tracking-widest font-inter font-thin'>Equity</div>
                <div className='border-t-2 border-black text-xs tracking-widest font-inter mb-3'>equity@compsa.queensu.ca</div>
                <div className='text-lg tracking-widest font-inter font-thin'>Internal Affairs</div>
                <div className='border-t-2 border-black text-xs tracking-widest font-inter mb-3'>internal@compsa.queensu.ca</div>
                <div className='text-lg tracking-widest font-inter font-thin'>Marketing</div>
                <div className='border-t-2 border-black text-xs tracking-widest font-inter mb-3'>marketing@compsa.queensu.ca</div>
                <div className='text-lg tracking-widest font-inter font-thin'>Professional Developement</div>
                <div className='border-t-2 border-black text-xs tracking-widest font-inter mb-3'>pd@compsa.queensu.ca</div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Mobile_Ports;
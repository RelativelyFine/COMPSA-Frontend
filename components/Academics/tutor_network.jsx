import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Arrow_left from '../../public/acad_arrow_l.png'
import Arrow_right from '../../public/acad_arrow_r.png'

const tutor_network = () => {
  return (
    <div>
      <div className='bg-[#EEEBFD]'>
        <h1 className='font-inter font-bold tracking-wider text-[#553ADD] text-center text-3xl pt-5 pb-5'>TUTOR NETWORK</h1>
      </div>
      <div className='bg-[#FCFCFC]'>
        <div className='flex flex-row justify-around pt-16 items-center'>
          <Link href="/">
            <button className=''>
                <Image className='h-9 w-8' src={Arrow_left} alt="Left Arrow" />
            </button>
          </Link>
          <div className='bg-[#EEEBFD] rounded-3xl px-8 pt-3 pb-3 w-1/3'>
            <h2 className='font-inter font-bold text-xl tracking-wider text-[#553ADD]'>Tutor Name</h2>
            <h5 className='font-inter font-bold text-md tracking-wide mt-2'>Offered Courses:</h5>
            <h5 className='font-inter font-normal text-md tracking-wider'>MISC 000, MISC 000, MISC 000</h5>
            <h5 className='font-inter font-bold text-md tracking-wide'>Price: $XX/hour</h5>
          </div>
          <div className='bg-[#EEEBFD] rounded-3xl px-8 pt-3 pb-3 w-1/3'>
            <h2 className='font-inter font-bold text-xl tracking-wider text-[#553ADD]'>Tutor Name</h2>
            <h5 className='font-inter font-bold text-md tracking-wide mt-2'>Offered Courses:</h5>
            <h5 className='font-inter font-normal text-md tracking-wider'>MISC 000, MISC 000, MISC 000</h5>
            <h5 className='font-inter font-bold text-md tracking-wide'>Price: $XX/hour</h5>
          </div>
        <Link href="/">
            <button className=''>
                <Image className='h-9 w-8' src={Arrow_right} alt="Right Arrow" />
            </button>
        </Link>
        </div>
        
        <div className='flex flex-row justify-around pt-4 pb-16 items-center'>
          <Image className='h-9 w-8 opacity-0' src={Arrow_left} alt="Left Arrow" />
          <div name="tutor" className='bg-[#553ADD] rounded-xl py-3 pb-3 w-1/3'>
            <h2 className='font-inter font-bold text-xs tracking-wider text-[#FFFFFF] text-center md:text-lg'>tutorname@queensu.ca</h2>
          </div>
          <div name="tutor" className='bg-[#553ADD] rounded-xl py-3 pb-3 w-1/3'>
            <h2 className='font-inter font-bold text-xs tracking-wider text-[#FFFFFF] text-center md:text-lg'>tutorname@queensu.ca</h2>
          </div>
          <Image className='h-9 w-8 opacity-0' src={Arrow_right} alt="Right Arrow" />
        </div>
      </div>
    </div>
  )
}

export default tutor_network
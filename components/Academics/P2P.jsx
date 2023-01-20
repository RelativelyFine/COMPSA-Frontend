import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import placeholder from '../../public/placeholder_image.png'
import Arrow_left from '../../public/acad_arrow_l.png'
import Arrow_right from '../../public/acad_arrow_r.png'

const P2P = () => {
  return (
    <div className='bg-[#FCFCFC]'>
      <h1 className='font-inter font-bold tracking-wider text-[#553ADD] text-center text-3xl pt-8'>P2P MENTORSHIP PROGRAM</h1>
      <h3 className='font-inter font-normal text-center text-[#200263] text-lg pt-3 pb-12'>Take a look at what we&apos;ve been working on!</h3>
      <div className='flex justify-center items-center flex-wrap mb-8 gap-10'>
        <div className='bg-[#DAD2FF] rounded-lg pl-5 py-5 w-1/2 h-52'>
          <h3 className='font-inter font-bold tracking-wide text-[#200263] text-lg'>WHAT IS P2P?</h3>
          <text className='font-inter font-normal text-[#200263] text-sm'>Insert bio here</text>
        </div>
        <div className='rounded-2xl w-1/2 mx-8 h-52 sm:mx-0 sm:w-1/4 mobileabout:w-52'>
            <Image className='h-full w-full' src={placeholder} alt="Placeholder Image" />
          </div>
      </div>
      <div className='flex justify-center pb-8 gap-10'>
        <Link href="/" className='block sm:hidden'>
              <button className=''>
                  <Image className='h-9 w-8' src={Arrow_left} alt="Left Arrow" />
              </button>
        </Link>
        <Link href="/"  className='block sm:hidden'>
          <button className=''>
              <Image className='h-9 w-8' src={Arrow_right} alt="Right Arrow" />
          </button>
        </Link>
      </div>
      <div className='flex justify-center sm:justify-around flex-wrap items-center gap-20 pb-12 sm:gap-0'>
        <Link href="/" className='hidden sm:block'>
              <button className=''>
                  <Image className='h-9 w-8' src={Arrow_left} alt="Left Arrow" />
              </button>
        </Link>
          <div className='rounded-2xl w-1/2 mx-8 h-52 sm:mx-0 sm:w-1/4 mobileabout:w-52'>
            <Image className='h-full w-full' src={placeholder} alt="Placeholder Image" />
          </div>
          <div className='rounded-2xl w-1/2 mx-8 h-52 sm:mx-0 sm:w-1/4 mobileabout:w-52'>
            <Image className='h-full w-full' src={placeholder} alt="Placeholder Image" />
          </div>
          <div className='rounded-2xl w-1/2 mx-8 h-52 sm:mx-0 sm:w-1/4 mobileabout:w-52'>
            <Image className='h-full w-full' src={placeholder} alt="Placeholder Image" />
          </div>
        <Link href="/" className='hidden sm:block'>
          <button className=''>
              <Image className='h-9 w-8' src={Arrow_right} alt="Right Arrow" />
          </button>
        </Link>
      </div>
      <div className='flex justify-center pb-12'>
        <Link href="/" className='bg-[#553ADD] rounded-2xl w-1/2'>
          <h3 className='text-center text-[#EEEBFD] font-inter font-bold tracking-wide text-2xl pt-4 sm:text-md'>P2P Mentorship Application</h3>
          <h5 className='text-center text-[#A897FF] font-inter font-bold tracking-wider text-sm pb-4 pt-1'>OCTOBER / 04 / 2022</h5>
        </Link>
      </div>
    </div>
  )
}

export default P2P
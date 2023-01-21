import React from 'react'
import Link from 'next/link'

const course_feedback = () => {
  return (
    <div className='bg-[#FCFCFC] pt-8'>
      <h1 className='font-inter font-bold tracking-wider text-[#553ADD] text-center text-3xl pb-9'>COURSE FEEDBACK</h1>
      <div className='flex justify-center pb-9'>
          <Link href="/" className='bg-[#DAD2FF] rounded-2xl w-1/2'>
            <h3 className='text-center text-[#200263] font-inter font-bold tracking-wide text-2xl pt-4 sm:text-md'>Academic Grievances Guide</h3>
            <h5 className='text-center text-[#A897FF] font-inter font-bold tracking-wider text-sm pb-4 pt-1'>OCTOBER / 04 / 2022</h5>
          </Link>
      </div>
      <div className='flex justify-center pb-9'>
          <Link href="/" className='bg-[#DAD2FF] rounded-2xl w-1/2'>
            <h3 className='text-center text-[#200263] font-inter font-bold tracking-wide text-2xl pt-4 sm:text-md'>Academic Grievances Form</h3>
            <h5 className='text-center text-[#A897FF] font-inter font-bold tracking-wider text-sm pb-4 pt-1'>OCTOBER / 04 / 2022</h5>
          </Link>
      </div>
    </div>
  )
}

export default course_feedback
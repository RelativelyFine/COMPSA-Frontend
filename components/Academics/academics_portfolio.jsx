import React from 'react'
import Link from 'next/link'

const academics_portfolio = () => {
  return (
    <div className='pb-9 bg-[#EEEBFD]'>
      <h1 className='font-inter font-bold tracking-wider text-[#553ADD] text-center text-3xl pb-9'>ACADEMICS PORTFOLIO</h1>
        <div className='flex justify-center pb-9'>
          <Link href="/" className='bg-[#553ADD] rounded-2xl w-1/2'>
            <h3 className='text-center text-[#EEEBFD] font-inter font-bold tracking-wide text-2xl pt-4 sm:text-md'>Tutorial Leader Application</h3>
            <h5 className='text-center text-[#A897FF] font-inter font-bold tracking-wider text-sm pb-4 pt-1'>OCTOBER / 04 / 2022</h5>
          </Link>
        </div>
        <div className='flex justify-center pb-9'>
          <Link href="/" className='bg-[#553ADD] rounded-2xl w-1/2'>
            <h3 className='text-center text-[#EEEBFD] font-inter font-bold tracking-wide text-2xl pt-4 sm:text-md'>Tutor Request Form</h3>
            <h5 className='text-center text-[#A897FF] font-inter font-bold tracking-wider text-sm pb-4 pt-1'>OCTOBER / 04 / 2022</h5>
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link href="/" className='bg-[#553ADD] rounded-2xl w-1/2'>
            <h3 className='text-center text-[#EEEBFD] font-inter font-bold tracking-wide text-2xl pt-4 sm:text-md'>Peer 2 Peer Mentor Application</h3>
            <h5 className='text-center text-[#A897FF] font-inter font-bold tracking-wider text-sm pb-4 pt-1'>OCTOBER / 04 / 2022</h5>
          </Link>
        </div>
    </div>
  )
}

export default academics_portfolio


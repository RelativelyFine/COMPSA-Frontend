import React from "react";
import Link from "next/link";
import OptimizedImageWithFallback from "../../ErrorCollection/Fallback";
import Arrow_left from "/public/acad_arrow_l.png";
import Arrow_right from "/public/acad_arrow_r.png";

const exam_tutorials = () => {
  return (
    <div className="bg-[#EEEBFD]">
      <h1 className="font-inter font-bold tracking-wider text-[#200263] text-center text-3xl py-8">
        EXAM TUTORIALS
      </h1>
      <div className="flex justify-center pb-8 gap-10">
        <Link href="/" className="block sm:hidden">
          <button className="">
            <OptimizedImageWithFallback
              className="h-9 w-8"
              src={Arrow_left}
              alt="Left Arrow"
            />
          </button>
        </Link>
        <Link href="/" className="block sm:hidden">
          <button className="">
            <OptimizedImageWithFallback
              className="h-9 w-8"
              src={Arrow_right}
              alt="Right Arrow"
            />
          </button>
        </Link>
      </div>
      <div className="flex justify-center sm:justify-around flex-wrap items-center gap-20 sm:gap-0">
        <Link href="/" className="hidden sm:block">
          <button className="">
            <OptimizedImageWithFallback
              className="h-9 w-8"
              src={Arrow_left}
              alt="Left Arrow"
            />
          </button>
        </Link>
        <div className="bg-[#553ADD] rounded-lg px-8 py-8 w-1/2 mx-8 sm:mx-0 sm:w-1/4">
          <h2 className="text-[#FFFFFF] font-inter font-bold text-[300%]">
            00
          </h2>
          <h3 className="text-[#FFFFFF] font-inter font-bold text-[150%]">
            Month
          </h3>
          <h6 className="text-[#FFFFFF] font-light text-lg tracking-wider">
            MISC 000
          </h6>
          <h6 className="text-[#FFFFFF] font-light text-lg tracking-wider">
            Building AUD
          </h6>
          <text className="text-[#FFFFFF] font-light text-lg tracking-wider">
            0:00PM-0:00PM
          </text>
        </div>
        <div className="bg-[#553ADD] rounded-lg px-8 py-8 w-1/2 mx-8 sm:mx-0 sm:w-1/4">
          <h2 className="text-[#FFFFFF] font-inter font-bold text-[300%]">
            00
          </h2>
          <h3 className="text-[#FFFFFF] font-inter font-bold text-[150%]">
            Month
          </h3>
          <h6 className="text-[#FFFFFF] font-light text-lg tracking-wider">
            MISC 000
          </h6>
          <h6 className="text-[#FFFFFF] font-light text-lg tracking-wider">
            Building AUD
          </h6>
          <text className="text-[#FFFFFF] font-light text-lg tracking-wider">
            0:00PM-0:00PM
          </text>
        </div>
        <div className="bg-[#553ADD] rounded-lg px-8 py-8 w-1/2 mx-8 sm:mx-0 sm:w-1/4">
          <h2 className="text-[#FFFFFF] font-inter font-bold text-[300%]">
            00
          </h2>
          <h3 className="text-[#FFFFFF] font-inter font-bold text-[150%]">
            Month
          </h3>
          <h6 className="text-[#FFFFFF] font-light text-lg tracking-wider">
            MISC 000
          </h6>
          <h6 className="text-[#FFFFFF] font-light text-lg tracking-wider">
            Building AUD
          </h6>
          <text className="text-[#FFFFFF] font-light text-lg tracking-wider">
            0:00PM-0:00PM
          </text>
        </div>
        <Link href="/" className="hidden sm:block">
          <button className="">
            <OptimizedImageWithFallback
              className="h-9 w-8"
              src={Arrow_right}
              alt="Right Arrow"
            />
          </button>
        </Link>
      </div>
      <Link href="/" className="flex justify-center py-8">
        <button className="bg-[#320B89] text-center px-4 py-3 rounded-md font-inter text-[#FFFFFF] font-bold text-base">
          Go to Tutorials Calendar
        </button>
      </Link>
    </div>
  );
};

export default exam_tutorials;

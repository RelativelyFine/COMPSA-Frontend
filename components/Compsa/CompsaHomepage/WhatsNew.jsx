import React from "react";
import Link from "next/link";

const WhatsNew = () => {
  return (
    <>
      <div className="grid w-full py-20 px-[4%] bg-white">
        <div className="self-center w-full leading-none text-center text-[2em] sm:text-[4vw] text-[#553ADD] font-bold">
          What&lsquo;s New?
        </div>
        <div className="pt-2 self-center w-full text-center text-[1em] sm:text-[2vw] text-[#200263]">
          Take a look at what we&lsquo;ve been working on!
        </div>
        <div className="flex flex-col w-full pt-10">
          <div className="bg-[#DAD2FF] px-[1.2em] py-[1.2em] sm:px-[4vw] sm:py-[2vw] rounded-2xl font-bold">
            <div className="text-[1em] sm:text-[2vw] text-[#553ADD]">
              09/06/2022
            </div>
            <div className="text-[2em] sm:text-[4vw] text-[#200263] pb-[1.5%]">
              Year Long Event
            </div>
            <div className="text-[1em] sm:text-[1.4vw] text-[#200263] pb-[1%]">
              Earn points in this year long event by participating in COMPSA
              events. Points will be tallied and the winner(s) will receive
              prizes!
            </div>
            <div className="pt-[0.5vw]">
              <Link href="/circuit/circuitHome">
                <div className=" bg-[#553ADD] w-[10em] sm:w-[25vw] text-white px-2 py-[1.2vw] text-center rounded-xl justify-self-center text-[1em] sm:text-[2vw] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
                  Know More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;

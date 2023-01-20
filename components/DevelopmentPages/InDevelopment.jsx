import { React } from "react";
import Link from "next/link";

function InDevelopment() {
  return (
    <div className="text-[#2e1844] text-[3vw] px-20 text-center min-h-[80vh] pt-[20%]">
      This page is still in development!. <br /> Please try again later...
      <Link href="/" className="flex justify-center align-middle pt-[10%]">
        <button className="transition px-[5vw] py-[2%] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#2e1844] text-white rounded-xl text-[1em] sm:text-[2vw]">
          Homepage
        </button>
      </Link>
    </div>
  );
}

export default InDevelopment;

import React from "react";
import Link from "next/link";

const SplashScreen = () => {
  return (
    <>
      <div className=" container-style w-full h-[60vw] text-center bg-gradient-to-b from-[#7762E0] to-[#EEEBFD] text-white"></div>
      <div className="absolute top-0 right-0 w-full h-[60vw] bg-laptopSwirl bg-cover z-10"></div>
    </>
  );
};

export default SplashScreen;

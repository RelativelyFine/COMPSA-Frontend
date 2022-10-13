import React from "react";
import Image from "next/image";

const Signup = () => {
  return (
    <>
      <div className="justify-self-center ">
        <Image
          src="/logo.png"
          alt="/"
          width="40vw"
          height="40vw"
          min-width="10"
        />
      </div>
      <div className="text-center text-[15vw] md:text-[5vw]">SIGN UP</div>
      <div className="w-[70%] justify-self-center">
        <Image src="/progress3.png" alt="/" width="1291" height="100" />
      </div>
      <div className="flex justify-center flex-row pt-[2vw] text-[2vw]">
        Completed Signup!
      </div>
      <div className="pt-[2vw] text-[1vw] w-[80%] text-center self-center justify-self-center">
        Note: Signup only needs to be done once! <br /> If you need to reset
        your username, please contact us at webmaster@compsa.queensu.ca
      </div>
    </>
  );
};

export default Signup;

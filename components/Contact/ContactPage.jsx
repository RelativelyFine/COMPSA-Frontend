import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="flex w-full h-[55px]  bg-[#eeebfd]"></div>
      <div className="flex flex-col">
        <div className="grid grid-cols-12 gap-[4%] place-content-center w-full h-[100vh] px-[4%] bg-gradient-to-b from-[#eeebfd] to-[#EEEBFD]">
          <div className="flex flex-col col-span-7 bg-[#DAD2FF] h-[25vw] px-[4vw] py-[2vw] rounded-2xl">
            <div className="text-[4vw] text-[#200263] pb-[1%]">
              Under Construction
            </div>
            <div className="text-[1.4vw] text-[#200263] pb-[2%]">
              Queen&lsquo;s University Computing Students&lsquo; Association
              (COMPSA) Contact Page...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

import React from "react";
import Slideshow from "./Slideshow";
import "react-slideshow-image/dist/styles.css";
import "@fontsource/cascadia-code";

function App() {
  return (
    <div className="container w-full">
      <div className="flex w-screen h-[70px] bg-[#461C6F]"></div>

      <div className="flex bg-[#461C6F] w-screen">
        <div className="flex-col grid w-screen text-center bg-gradient-to-b from-[#8359AD] to-[#644683]">
          <div className="flex flex-col w-[50vw] text-center bg-gradient-to-b from-[#8359AD] to-[#644683] justify-self-center">
            <img src="/circuits.svg" alt="/" className="w-full pt-20" />
          </div>
        </div>
      </div>
      <Slideshow />

      <div className="flex flex-row justify-center w-screen bg-[#461C6F]">
        <div className="">
          <div className="flex flex-col w-full bg-[#261536]">
            <div className="pt-5 self-center">
              <img src="/arrow.svg" alt="/" className="w-[7vw]" />
            </div>
          </div>
          <div className="flex w-screen bg-my_bg_image bg-cover">
            <div className="flex flex-col justify-center w-[100vw] align-middle p-10">
              <div className="text-center text-[4vw] font-CascadiaCode px-7">
                <span className="text-white">Earn points in this </span>
                <span className="text-[#7e6fc8] ">year long event</span>
                <span className="text-white"> by participating in </span>
                <span className="text-[#7e6fc8]">COMPSA</span>
                <span className="text-white">
                  {" "}
                  events. Points will be tallied and the winner(s) will receive
                  prizes!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

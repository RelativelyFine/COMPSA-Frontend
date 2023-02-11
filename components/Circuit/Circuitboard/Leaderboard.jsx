import React from "react";
import Circuitboard from "./Circuitboard";
import CircuitboardList from "./CircuitboardList";

function App() {
  return (
    <>
      <div className="flex w-full h-[70px] bg-[#461C6F]"></div>
      <div className="flex flex-row justify-center justify-items-center pointer-events-none w-[100%] bg-[#261536]">
        <div className="invisible md:visible">
          <div className="flex flex-col w-[100vw] bg-gradient-to-b from-[#644683] to-[#261536] items-center">
            <h1 className="text-[#eaba7d] text-[15vw]">TOP 10</h1>
            <div className="w-[80vw]">
              <Circuitboard />
            </div>
          </div>
          <div className=" text-center flex flex-col w-full bg-[#261536] md:top-0">
            <h1 className="text-[#eaba7d] text-[10vw] pt-20">Leaderboard</h1>
            <div className="">
              <CircuitboardList />
            </div>
          </div>
        </div>
        <div className="absolute visible md:invisible">
          <div className=" text-center flex flex-col w-full bg-[#261536] md:top-0">
            <h1 className="text-[#eaba7d] text-[10vw] pt-20">Leaderboard</h1>
            <div className="">
              <CircuitboardList />
            </div>
            <div className="text-white text-3xl">
              Want a Chart?
              <br />
              Open On your Desktop!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

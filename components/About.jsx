import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex w-full h-[55px]  bg-[#eeebfd]"></div>
      <div className="flex flex-col pb-[10%]">
        <div className="grid grid-cols-12 gap-[4%] place-content-center w-full h-[50vw] px-[4%] bg-gradient-to-b from-[#eeebfd] to-[#EEEBFD]">
          <div className="flex flex-col col-span-7 bg-[#DAD2FF] h-[25vw] px-[4vw] py-[2vw] rounded-2xl">
            <div className="text-[4vw] text-[#200263] pb-[1%]">
              What Is Compsa?
            </div>
            <div className="text-[1.4vw] text-[#200263] pb-[2%]">
              Queen&lsquo;s University Computing Students&lsquo; Association
              (COMPSA) is the student government for Queen&lsquo;s University
              School of Computing.
            </div>
            <div className="text-[1.4vw] text-[#200263]">
              We organize social events, workshops, information sessions, and
              work together with the faculty to advocate for Computing
              students&lsquo; needs.
            </div>
          </div>
          <div className="col-span-5 bg-groupbg bg-cover rounded-3xl"></div>
        </div>
        <div className="grid w-full h-[50vw] px-[4%] bg-[#fff]">
          <div className="self-center w-full text-center text-[4vw] text-[#553ADD] font-bold">
            Meet The Team
          </div>

          <div className="grid grid-cols-12 gap-[4%] place-content-center w-full h-full ">
            <div className="col-span-5 bg-execs bg-cover rounded-3xl h-[25vw]"></div>
            <div className="flex flex-col col-span-7 ">
              <div className="bg-[#DAD2FF] h-[19vw] px-[4vw] py-[vw] rounded-2xl font-bold">
                <div className="text-[4vw] text-[#200263] pb-[1.5%]">
                  Executives
                </div>
                <div className="text-[1.4vw] text-[#200263] pb-[1%]">
                  President -&gt; Jagrit Rai
                </div>
                <div className="text-[1.4vw] text-[#200263] pb-[1%]">
                  Vice President of Operations -&gt; Mercy Doan
                </div>
                <div className="text-[1.4vw] text-[#200263]">
                  VPSA -&gt; Catie Austin
                </div>
              </div>
              <div className="pt-[0.5vw]">
                <Link href="">
                  <div className=" bg-[#553ADD] w-[25vw] text-white px-2 py-[1.2vw] text-center rounded-xl justify-self-center text-[2vw]">
                    Executives Homepage
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full h-[40vw] px-[4%] bg-[#EEEBFD] ">
          <div className="grid grid-cols-12 gap-[4%] place-content-center w-full h-full ">
            <div className="col-span-5 bg-yearreps bg-cover rounded-3xl h-[25vw]"></div>
            <div className="flex flex-col col-span-7 ">
              <div className=" bg-[#DAD2FF] h-[19vw] px-[4vw] py-[vw] rounded-2xl font-bold">
                <div className="text-[4vw] text-[#200263] pb-[1%]">
                  Year Reps
                </div>
                <div className="text-[1.4vw] text-[#200263] pb-[1%]">
                  First Year -&gt;
                </div>
                <div className="text-[1.4vw] text-[#200263] pb-[1%]">
                  Second Year -&gt; Josh Cowan
                </div>
                <div className="text-[1.4vw] text-[#200263] pb-[1%]">
                  Third Year -&gt; Yash Patel
                </div>
                <div className="text-[1.4vw] text-[#200263]">
                  Fourth Year -&gt;
                </div>
              </div>
              <div className="pt-[0.5vw]">
                <Link href="">
                  <div className=" bg-[#553ADD] w-[25vw] text-white px-2 py-[1.2vw] text-center rounded-xl justify-self-center text-[2vw]">
                    Year Reps Homepage
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full h-[40vw] px-[4%] ">
          <div className="grid grid-cols-12 gap-[4%] place-content-center w-full h-full ">
            <div className="col-span-5 bg-academics bg-cover rounded-3xl h-[25vw]"></div>
            <div className="flex flex-col col-span-7 ">
              <div className=" bg-[#DAD2FF] h-[19vw] px-[4vw] py-[vw] rounded-2xl font-bold text-[1.3vw]">
                <div className="text-[4vw] text-[#200263] pb-[1%]">
                  Academics
                </div>
                <div className=" text-[#200263] pb-[1%]">
                  Academics Director -&gt; Marion Anglin
                </div>
                <div className=" text-[#200263] pb-[1%]">
                  Academic Events Coordinator -&gt; Shrinidhi Krishnan
                </div>
                <div className=" text-[#200263] pb-[1%]">
                  Course Feedback Coordinator -&gt; Matthew Vandergrift
                </div>
                <div className=" text-[#200263] pb-[1%]">
                  Mentorship Coordinator -&gt; Joash Mathew
                </div>
                <div className=" text-[#200263]">
                  Tutorials Coordinator -&gt; Jasmine van Leeuwen
                </div>
              </div>
              <div className="pt-[0.5vw]">
                <Link href="">
                  <div className=" bg-[#553ADD] w-[25vw] text-white px-2 py-[1.2vw] text-center rounded-xl justify-self-center text-[2vw]">
                    Academics Homepage
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full h-[40vw] px-[4%] bg-[#EEEBFD]">
          <div className="grid grid-cols-12 gap-[4%] place-content-center w-full h-full ">
            <div className="col-span-5 bg-equity bg-cover rounded-3xl h-[25vw]"></div>
            <div className="flex flex-col col-span-7 ">
              <div className=" bg-[#DAD2FF] h-[19vw] px-[4vw] py-[vw] rounded-2xl font-bold text-[1.3vw]">
                <div className="text-[4vw] text-[#200263] pb-[1%]">Equity</div>
                <div className=" text-[#200263] pb-[1%]">
                  Equity Director -&gt; Alex Panfilov
                </div>
                <div className="text-[#200263] pb-[1%]">
                  Equity Relations -&gt; Liaison Udit Kapoor
                </div>
                <div className=" text-[#200263] pb-[1%]">
                  Mental Health Coordinator -&gt; Karina Verma
                </div>
                <div className=" text-[#200263]">
                  Equity Experience -&gt; Coordinator Kaan Sümer
                </div>
              </div>
              <div className="pt-[0.5vw]">
                <Link href="">
                  <div className=" bg-[#553ADD] w-[25vw] text-white px-2 py-[1.2vw] text-center rounded-xl justify-self-center text-[2vw]">
                    Equity Homepage
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full h-[40vw] px-[4%]">
          <div className="grid grid-cols-12 gap-[4%] place-content-center w-full h-full ">
            <div className="col-span-5 bg-events bg-cover rounded-3xl h-[25vw]"></div>
            <div className="flex flex-col col-span-7 ">
              <div className=" bg-[#DAD2FF] h-[19vw] px-[4vw] py-[vw] rounded-2xl font-bold text-[1.3vw]">
                <div className="text-[4vw] text-[#200263] pb-[1%]">Events</div>
                <div className=" text-[#200263] pb-[1%]">
                  Events Director -&gt; Akash Singh
                </div>
                <div className=" text-[#200263] pb-[1%]">
                  Formal Convenor -&gt; Vanessa Russell
                </div>
                <div className=" text-[#200263] pb-[1%]">
                  Social Coordinator -&gt; Arthur Hu
                </div>
                <div className=" text-[#200263] pb-[1%]">
                  Activities Coordinator -&gt; Max Lindsay
                </div>
                <div className=" text-[#200263]">
                  Logistics Coordinator -&gt; Owen Rocchi
                </div>
              </div>
              <div className="pt-[0.5vw]">
                <Link href="">
                  <div className=" bg-[#553ADD] w-[25vw] text-white px-2 py-[1.2vw] text-center rounded-xl justify-self-center text-[2vw]">
                    Events Homepage
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

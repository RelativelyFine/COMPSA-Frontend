import React from "react";
import Link from "next/link";

const Mainpage = () => {
  const [data, setData] = React.useState(false);
  const [error, setError] = React.useState("Loading...");

  React.useEffect(() => {
    fetch("https://compsa.caslab.queensu.ca/api/events?limit=3", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json).then(() => {
          if ((json.events.length = 0)) {
            setError("No Current Events!");
          }
        });
      })
      .catch((err) => {
        setError("Currently Unavaliable...");
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className=" container-style w-full h-[60vw] text-center bg-gradient-to-b from-[#7762E0] to-[#EEEBFD] text-white"></div>
      <div className="absolute top-0 right-0 w-full h-[60vw] bg-laptopSwirl bg-cover z-10"></div>
      <div className="grid w-full h-[70vw] md:h-[50vw] px-[4%] bg-[#EEEBFD]">
        <Link
          href="https://forms.gle/a2AHSGKdCdM7kJ1w9"
          className="flex justify-center align-middle pb-10"
        >
          <button className="transition px-[5vw] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#320B89] text-white rounded-xl text-[1em] sm:text-[2vw]">
            School of Computing Funding Petition
          </button>
        </Link>
        <div className="self-center w-full text-center text-[2em] sm:text-[4vw] text-[#200263] font-bold leading-none">
          Upcoming Events <br />
        </div>
        <div className="self-center w-full text-center text-[0.8em] sm:text-[2vw] text-[#553ADD] ">
          Wanna get involved? Well you&lsquo;ve come to the right place!
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 overflow-hidden gap-[4vw] pt-2 md:place-content-center h-full w-full px-[6vw]">
          <>
            {data && data.events.length > 0 ? (
              data.events.map((item, index) => {
                return (
                  <Link href="/events" key={index}>
                    <div className="flex flex-col col-span-1 w-[40vw] h-[40vw] md:h-full md:w-full justify-self-center">
                      <div className="bg-[#553ADD] h-[100%] px-[3vw] py-[3vw] rounded-2xl font-bold text-white">
                        <div className="text-[2.5em] sm:text-[4vw] leading-none">
                          {item.date.slice(4, 7)}
                        </div>
                        <div className="text-[1.6em] sm:text-[2vw] leading-none pb-[2vw]">
                          {item.date.slice(7, 11)}
                        </div>
                        <div className="text-[1em] sm:text-[1.7vw] pb-[1%] font-normal">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <>
                <div></div>
                <div className="text-center text-[3vw] font-bold text-[#200263]">
                  <br />
                  {error}
                  <br />
                  <br />
                </div>
                <div></div>
              </>
            )}
          </>
        </div>
        <div className="flex justify-center flex-row py-[3vw]">
          <Link href="/events">
            <button className="transition px-[5vw] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#320B89] text-white rounded-xl text-[1em] sm:text-[2vw]">
              Go To Events Calandar
            </button>
          </Link>
        </div>
      </div>
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
              <Link href="/homepage">
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

export default Mainpage;

import React from "react";
import Link from "next/link";

const UpcomingEvents = () => {
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
        setData(json);

        if (json.total == 0) {
          setError("No Current Events!");
        }
      })
      .catch((err) => {
        setError("Currently Unavaliable...");
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="grid min-h-fit w-full sm:h-[50vw] px-[4%] bg-[#EEEBFD]">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 overflow-hidden gap-[4vw] pt-2 sm:place-content-center h-full w-full px-[6vw]">
          <>
            {data && data.total > 0 ? (
              data.events.map((item, index) => {
                return (
                  <Link href="/circuit/events" key={index}>
                    <div className="flex flex-col col-span-1 min-w-fit min-h-fit h-full w-full justify-self-center">
                      <div className="bg-[#553ADD] h-[100%] px-[3vw] py-[3vw] rounded-2xl font-bold text-white">
                        <div className="text-[6vw] sm:text-[4vw] leading-none">
                          {item.date.slice(4, 7)}
                        </div>
                        <div className="text-[4vw] sm:text-[2vw] leading-none pb-[2vw]">
                          {item.date.slice(7, 11)}
                        </div>
                        <div className="text-[3vw] sm:text-[1.7vw] pb-[1%] font-normal">
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
          <Link href="/circuit/events">
            <button className="transition px-[5vw] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#320B89] text-white rounded-xl text-[1em] sm:text-[2vw]">
              Go To Events Calandar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;

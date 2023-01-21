import { React, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  HiOutlineLocationMarker,
  HiCash,
  HiExternalLink,
  HiCalendar,
  HiOutlineGift,
} from "react-icons/hi";
import ReadMoreReadLess from "../ReadMoreReadLess.jsx";
import Link from "next/link";

function InfiniteCSRPage() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "infiniteCharacters",
    async ({ pageParam = 0 }) =>
      await fetch(
        `
        https://compsa.ca/api/events?offset=${pageParam * 10}&limit=10`
      ).then((result) => result.json()),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage != "") {
          return pages.length + 1;
        }
      },
    }
  );
  if (status == "error") {
    return (
      <div className="text-white text-[3vw] px-20 text-center min-h-[80vh]">
        We are currently experiencing issues. <br /> Please try again later...
        <Link
          href="/homepage"
          className="flex justify-center align-middle pt-[10%]"
        >
          <button className="transition px-[5vw] py-[2%] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-white text-[#2e1844] rounded-xl text-[1em] sm:text-[2vw]">
            Homepage
          </button>
        </Link>
      </div>
    );
  } else if (!data) {
    return (
      <div className="text-center text-[2vw] font-bold text-white min-h-[80vh]">
        <br />
        <br />
        Loading....
        <br />
        <br />
      </div>
    );
  }

  return (
    <div className="">
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 10}
          next={fetchNextPage}
          hasMore={hasNextPage}
        >
          {data?.pages?.map((page, index) => (
            <div key={index}>
              {page?.events?.map((item, index) => {
                var awards = item.awards;
                var date = item.date;
                var description = item.description;
                var id = item.id;
                var location = item.location ? item.location : "TBD";
                var link =
                  item.link.slice(0, 8) === "https://"
                    ? item.link
                    : "https://" + item.link;
                var title = item.title;
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 py-[2vw] w-full place-items-center"
                  >
                    <div className="py-[2vw] w-[90vw] min-h-fit px-[3%] bg-gradient-to-r from-[#FBFAFD] to-[#C0B7D3]  rounded-[5vw] max-w-[1500px] ">
                      <div className="grid grid-cols-12 gap-[3%] place-content-center w-full">
                        <div className="col-span-12 sm:col-span-5 bg-cover rounded-3xl">
                          <div className="space-y-[2vw] xl:space-y-[20px] pt-[0.5vw] ">
                            <div className="flex flex-row bg-[#461C6E] w-full text-white px-[1.5vw] py-[1vw] text-center rounded-3xl text-[1em] sm:text-[1.9vw] xl:text-[1.7em]">
                              <HiCalendar
                                className="relative h-[1em] w-[1em]
                              xl:h-10 xl:w-10 "
                              />
                              &nbsp;&nbsp;
                              {date
                                .slice(0, date.length - 13)
                                .concat(", ")
                                .slice(0, date.length - 3)
                                .concat(date.slice(18, 22) + " EST")}
                            </div>
                            <div className="self-end text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
                              <a
                                target="_blank"
                                href={link}
                                rel="noopener noreferrer"
                              >
                                <div
                                  className=" bg-[#461C6E] w-full px-[1.5vw] py-[1.2vw]
                          xl:py-[1em] text-center rounded-3xl justify-self-center cursor-pointer"
                                >
                                  <div className="flex flex-row text-[1em] sm:text-[1.9vw] xl:text-[1.7em] ">
                                    <HiOutlineLocationMarker
                                      className="relative h-[1em] w-[1em]
                              xl:h-10 xl:w-10 "
                                    />
                                    &nbsp;&nbsp;
                                    {location}
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="self-end text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
                              <a
                                target="_blank"
                                href={link}
                                rel="noopener noreferrer"
                              >
                                <div
                                  className=" bg-[#461C6E] w-full px-[1.5vw] py-[1.2vw]
                          xl:py-[1em] text-center rounded-3xl justify-self-center cursor-pointer"
                                >
                                  <div className="flex flex-row text-[1em] sm:text-[1.9vw] xl:text-[1.7em] ">
                                    <HiExternalLink
                                      className="relative h-[1em] w-[1em]
                              xl:h-10 xl:w-10 "
                                    />
                                    &nbsp;&nbsp; Click for Link
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-12 sm:col-span-7 flex flex-col">
                          <div className=" py-[vw] rounded-2xl font-bold text-[1.3vw] text-left min-h-fit">
                            <div className="text-[4em] sm:text-[4vw] text-[#200263] pb-1 xl:text-[60px]">
                              {title}
                            </div>
                            <div className=" text-[#210263b0] pb-3 text-[2em] sm:text-[2vw] min-h-fit xl:text-[30px]">
                              <span>
                                <ReadMoreReadLess>
                                  {description}
                                </ReadMoreReadLess>
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-row bg-[#461C6E] w-full text-white px-[1.5vw] py-[1vw] text-center rounded-3xl text-[1em] sm:text-[1.9vw]">
                            <Menu as="div" className="relative w-full">
                              <Menu.Button className="flex w-full h-full items-center rounded-md font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opaHiCashcity-75 text-white hover:text-yellow-500 text-start flex-row">
                                <HiOutlineGift
                                  className="relative h-[1em] w-[1em]
                              xl:h-10 xl:w-10 text-white"
                                />
                                &nbsp;&nbsp; Awards
                                <ChevronDownIcon
                                  className="h-[3vw] w-[3vw] xl:h-[40px] xl:w-[50px]"
                                  aria-hidden="true"
                                />
                              </Menu.Button>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute top-[-60%] left-1/2 transform -translate-x-1/2 translate-y-1/2 mt-2 w-[70vw] sm:w-[50vw] sm:translate-y-1/2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                  {awards?.map((item, index) => {
                                    return (
                                      <div key={index} className="px-1 py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <div
                                              className={`${
                                                active
                                                  ? "bg-[#461C6E] text-white"
                                                  : "text-gray-900"
                                              } group flex w-full items-center rounded-md px-[0.5vw] py-[0.5vw] text-[2vw]`}
                                            >
                                              {active ? (
                                                <HiCashActive
                                                  className="mr-2 h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              ) : (
                                                <HiCashInactive
                                                  className="mr-2 h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              )}
                                              &nbsp;
                                              {item.name
                                                .charAt(0)
                                                .toUpperCase() +
                                                item.name.slice(1)}
                                              : {item.value} points
                                            </div>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    );
                                  })}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
          <div className="h-[80vw]"></div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default InfiniteCSRPage;

function HiCashActive(props) {
  return <HiCash className="text-white" />;
}

function HiCashInactive(props) {
  return <HiCash className="text-black" />;
}

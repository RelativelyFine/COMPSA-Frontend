import React, { useState, Fragment, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SiDiscord } from "react-icons/si";

import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const colortheme = (color, type) => {
    if (color === "light") {
      if (type === "background") {
        return "bg-[#aea2e336]";
      }
      if (type === "text") {
        return "text-black";
      }
    } else {
      if (type === "background") {
        return "bg-[#1e0d44d5]";
      }
      if (type === "text") {
        return "text-white";
      }
    }
  };

  return (
    <div
      className={`z-50 fixed w-screen h-[53px] sm:h-[70px] top-0 backdrop-blur ${colortheme(
        props.color,
        "background"
      )}`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 align-items 2xl:px-8">
        <div className="flex h-10 w-10">
          <img src="/logonav.png" alt="/" width="40" height="40" />
        </div>

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <button>
                <li
                  className={`ml-10 text-lg hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none ${colortheme(
                    props.color,
                    "text"
                  )}`}
                >
                  Home
                </li>
              </button>
            </Link>
            <Link href="/about">
              <button>
                <li
                  className={`ml-10 text-lg hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none ${colortheme(
                    props.color,
                    "text"
                  )}`}
                >
                  About
                </li>
              </button>
            </Link>
            <Link href="/resources">
              <button>
                <li
                  className={`ml-10 text-lg hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none ${colortheme(
                    props.color,
                    "text"
                  )}`}
                >
                  Resources
                </li>
              </button>
            </Link>

            <Link href="/contact">
              <button>
                <li
                  className={`ml-10 text-lg hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none ${colortheme(
                    props.color,
                    "text"
                  )}`}
                >
                  Contact
                </li>
              </button>
            </Link>

            <li className="ml-10 text-lg hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none bg-white p-1 px-2 rounded-xl">
              <div className="">
                <Menu as="div" className="relative inline-block text-left ">
                  <div className="">
                    <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
                      CIRCUIT
                      <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-black"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        <Link href="/homepage">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <ArchiveIcon active={active} />
                                Circuit Home
                              </button>
                            )}
                          </Menu.Item>
                        </Link>
                      </div>
                      <div className="px-1 py-1 ">
                        <Link href="/leaderboard">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <EditIcon active={active} />
                                CircuitBoard
                              </button>
                            )}
                          </Menu.Item>
                        </Link>
                        <Link href="/events">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <DuplicateIcon active={active} />
                                Event List
                              </button>
                            )}
                          </Menu.Item>
                        </Link>
                      </div>
                      <div className="px-1 py-1">
                        <Link href="/login">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <DeleteIcon active={active} />
                                Sign Up
                              </button>
                            )}
                          </Menu.Item>
                        </Link>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden square-full shadow-lg shadow-grey-700 cursor-pointer"
          >
            <AiOutlineMenuUnfold size={50} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f6f1ff] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <img
                src="/logo.png"
                alt="/"
                width="80"
                height="80"
                min-width="80"
              />
              <div
                onClick={handleNav}
                className="square-full shadow-lg shadow-grey-700 cursor-pointer"
              >
                <AiOutlineMenuFold size={50} />
              </div>
            </div>
            <div className="border-b border-grey-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Are you keeping track of your compsa bits?
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul>
              <li>
                <div>
                  <Menu as="div" className="relative inline-block text-left ">
                    <div className="">
                      <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
                        CIRCUIT
                        <ChevronDownIcon
                          className="ml-2 -mr-1 h-5 w-5 text-black"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="px-1 py-1">
                          <Link href="/homepage">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <ArchiveIcon active={active} />
                                  Circuit Home
                                </button>
                              )}
                            </Menu.Item>
                          </Link>
                        </div>
                        <div className="px-1 py-1 ">
                          <Link href="/leaderboard">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <EditIcon active={active} />
                                  CircuitBoard
                                </button>
                              )}
                            </Menu.Item>
                          </Link>
                          <Link href="/events">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <DuplicateIcon active={active} />
                                  Event List
                                </button>
                              )}
                            </Menu.Item>
                          </Link>
                        </div>
                        <div className="px-1 py-1">
                          <Link href="/login">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <DeleteIcon active={active} />
                                  Sign Up
                                </button>
                              )}
                            </Menu.Item>
                          </Link>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </li>
              <Link href="/">
                <li className="w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
                  About
                </li>
              </Link>
              <Link href="/resources">
                <li className="w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
                  Resources
                </li>
              </Link>
              <Link href="/contact">
                <li className="w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-black font-bold pb-5">
                Want Our Media?
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="https://ca.linkedin.com/company/queenscompsa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillLinkedin size={25} />
                  </div>
                </a>

                <a
                  href="https://discord.com/invite/3UdVP4erqE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <SiDiscord size={25} />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/queenscompsa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillFacebook size={25} />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/compsa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillInstagram size={25} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

function EditIcon({ active }) {
  return (
    <svg
      className="mr-2 h-5 w-5 text-violet-400"
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill={active ? "#8B5CF6" : "#EDE9FE"}
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateIcon({ active }) {
  return (
    <svg
      className="mr-2 h-5 w-5 text-violet-400"
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill={active ? "#8B5CF6" : "#EDE9FE"}
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill={active ? "#8B5CF6" : "#EDE9FE"}
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveIcon({ active }) {
  return (
    <svg
      className="mr-2 h-5 w-5"
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill={active ? "#8B5CF6" : "#EDE9FE"}
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill={active ? "#8B5CF6" : "#EDE9FE"}
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveIcon({ active }) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4H16V10"
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
      />
      <path
        d="M16 4L8 12"
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
      />
      <path
        d="M8 6H4V16H14V12"
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
      />
    </svg>
  );
}

function DeleteIcon({ active }) {
  return (
    <svg
      className="mr-2 h-5 w-5"
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill={active ? "#8B5CF6" : "#EDE9FE"}
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
      />
      <path
        d="M3 6H17"
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
      />
      <path
        d="M8 6V4H12V6"
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
      />
    </svg>
  );
}

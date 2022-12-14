import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ArchiveIcon, EditIcon, DuplicateIcon, DeleteIcon } from "../Icons";

const CircuitSubMenu = ({ isMobile }) => (
  <div>
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button
          className={`inline-flex w-full justify-center rounded-md px-4 py-${
            isMobile ? "5 text-xl" : "2 text-sm"
          } font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500`}
        >
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
        <Menu.Items
          className={`absolute ${
            isMobile ? "left-0 z-50" : "right-0"
          } mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}
        >
          <div className="px-1 py-1">
            <Link href="/homepage">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
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
                      active ? "bg-violet-500 text-white" : "text-gray-900"
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
                      active ? "bg-violet-500 text-white" : "text-gray-900"
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
                      active ? "bg-violet-500 text-white" : "text-gray-900"
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
);

export default CircuitSubMenu;

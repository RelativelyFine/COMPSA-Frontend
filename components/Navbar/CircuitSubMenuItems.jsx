import { Menu } from "@headlessui/react";
import Link from "next/link";

import { ArchiveIcon, EditIcon, DuplicateIcon, DeleteIcon } from "../Icons";

const CircuitSubMenuItems = () => (
  <>
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
  </>
);

export default CircuitSubMenuItems;

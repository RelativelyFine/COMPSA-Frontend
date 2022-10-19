import Link from "next/link";

const MobileNavItem = ({ href, text }) => (
  <Link href={href}>
    <li className="w-full justify-center rounded-md px-4 py-5 text-xl font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black hover:text-yellow-500">
      {text}
    </li>
  </Link>
);

export default MobileNavItem;

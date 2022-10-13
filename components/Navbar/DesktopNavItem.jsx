import Link from "next/link";
import colortheme from "./colortheme";

const DesktopNavItem = ({ href, text, color }) => {
  return (
    <Link href={href}>
      <button>
        <li
          className={`ml-10 text-lg hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none ${colortheme(
            color,
            "text"
          )}`}
        >
          {text}
        </li>
      </button>
    </Link>
  );
};

export default DesktopNavItem;

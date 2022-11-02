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

export default DuplicateIcon;

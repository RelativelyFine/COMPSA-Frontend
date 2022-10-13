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

export default DeleteIcon;

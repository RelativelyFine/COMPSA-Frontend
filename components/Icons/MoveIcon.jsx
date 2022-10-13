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

export default MoveIcon;

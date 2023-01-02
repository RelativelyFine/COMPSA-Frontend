import Link from "next/link";

const ButtonLink = ({ href, className, children }) => {
  const buttonClasses = [
    "transition",
    "transform",
    "hover:-translate-y-1",
    "motion-reduce:transition-none",
    "motion-reduce:hover:transform-none",
    "rounded-[2.4vw]",
    "2xl:rounded-[35px]",
    className,
  ];

  return (
    <Link href={href}>
      <button className={buttonClasses.join(" ")}>
        {children}
      </button>
    </Link>
  );
};

export default ButtonLink;

import { useState } from "react";

const ReadMoreReadLess = ({ children, limit = 200 }) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);
  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };
  const text = children;
  const interpolate = (params) => {
    return new Function(`return \`${params}\`;`)();
  };
  console.log(text);

  return (
    <div className="whitespace-pre-line">
      {isReadMoreShown
        ? interpolate(text)
        : interpolate(text).substring(0, limit).concat("....")}
      <span className="px-[1vw]" />
      <button
        className="hover:text-yellow-500 px-[3vw] text-white bg-[#461c6e9c] rounded-[2vw]"
        onClick={toggleBtn}
      >
        {isReadMoreShown ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreReadLess;

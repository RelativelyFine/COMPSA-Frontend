import { ButtonLink } from "../Buttons";

const ButtonGroup = ({ links }) =>
  links.map(({ href, text, subText }, i) => (
    <ButtonLink
      href={href}
      key={`resource=${text}${subText}`}
      className={`h-[10.9vw] lg:h-[157px] ${
        i < links.length - 1 ? "mb-[5vw] lg:mb-[71px] " : ""
      }bg-[#553ADD] font-bold`}
    >
      <p className="text-white text-[4vw] lg:text-[45px]">{text}</p>
      {subText && (
        <p className="text-[#A897FF] text-[2.3vw] lg:text-[26px]">{subText}</p>
      )}
    </ButtonLink>
  ));

export default ButtonGroup;

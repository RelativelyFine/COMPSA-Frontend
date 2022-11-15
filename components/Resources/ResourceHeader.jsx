const ResourceHeader = ({ header, subheader, headerColour, subheaderColour, className }) => (
  <div className={`mb-[8.4vw] lg:mb-[121px] ${className}`}>
    <p className={`self-center w-full leading-none text-center text-[4.4vw] lg:text-[50px] text-[${headerColour}] font-bold`}>
      {header}
    </p>
    {subheader && (
      <p className={`self-center w-full leading-none text-center text-[2.7vw] lg:text-[30px] text-[${subheaderColour}] mt-[20px]`}>
        {subheader}
      </p>
    )}
  </div>
);

export default ResourceHeader;

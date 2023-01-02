const SectionWrapper = ({ bg, className, children }) => (
    <div className={`bg-[${bg}] py-[46px] sm:py-[61px] flex justify-center flex-row items-center`}>
    <div className={`flex flex-col py-12 ${className}`}>
        {children}
    </div>
  </div>
);

export default SectionWrapper;

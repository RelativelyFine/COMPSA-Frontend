import ResourceHeader from "./ResourceHeader";
import ButtonGroup from "./ButtonGroup";

const InfoPackages = ({ packageLinks }) =>
  packageLinks.map(({ header, links }, i) => (
    <div
      key={`${header}-${i}`}
      className={`bg-[#F3F1FF] rounded-[4.5vw] 2xl:rounded-[65px] grid place-items-center ${
        i < packageLinks.length - 1 ? "mb-[5vw] lg:mb-[71px]" : ""
      }`}
    >
      <div className="flex flex-col w-[70vw] max-w-[872px] py-[95px]">
        <ResourceHeader
          header={header}
          headerColour={"#200263"}
          className="mb-[3.8vw] lg:mb-[55px]"
        />
        <ButtonGroup links={links} />
      </div>
    </div>
  ));

export default InfoPackages;

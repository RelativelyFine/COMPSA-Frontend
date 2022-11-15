import React from "react";
import ResourceHeader from "./ResourceHeader";
import SectionWrapper from "./SectionWrapper";
import ButtonGroup from "./ButtonGroup";
import InfoPackages from "./InfoPackages";

const Resources = ({ topLinks, infoPackageLinks }) => (
  <>
    <SectionWrapper bg="#EEEBFD" className="w-[70vw] max-w-[872px]">
      <ResourceHeader
        header="Resources"
        headerColour={"#553ADD"}
        subheader="Frequently updated with information for Computing Students!"
        subheaderColour={"#200263"}
      />
      <ButtonGroup links={topLinks} />
    </SectionWrapper>

    <SectionWrapper bg="#FCFCFC" className="w-[74vw] max-w-[1062px]">
      <div className="flex flex-col items-center">
        <div className="w-[70vw] max-w-[872px] ">
          <ResourceHeader
            header="Information Packages"
            headerColour={"#553ADD"}
            subheader="Created by COMPSA, for Computing Students!"
            subheaderColour={"#200263"}
          />
        </div>
      </div>

      <InfoPackages packageLinks={infoPackageLinks} />
    </SectionWrapper>
  </>
);

export default Resources;

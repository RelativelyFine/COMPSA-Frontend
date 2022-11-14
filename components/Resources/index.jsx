import React from "react";
import ResourceHeader from "./ResourceHeader";
import SectionWrapper from "./SectionWrapper";
import ButtonGroup from "./ButtonGroup";

const Resources = () => {
  const links = [
    {
      href: "https://www.bouncelife.com/events/636aacaaf06dd12682beec50l",
      text: "Fall Night Out Tickets",
      subText: "November/18/2022",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLScFtcUdYCFCcPehOEqENal-okyNDoTyDHx-7Muqn-uqG61Oaw/viewform",
      text: "Tech Committee Application",
      subText: "November/16/2022",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeSlDm2Jv8yTucyUPt_qWXvnJVCsemtOfTBHmTPWmbEzXM9sA/viewform",
      text: "Networking Workshop",
      subText: "November/14/2022",
    },
  ];

  const links2 = [
    {
      href: "https://www.bouncelife.com/events/636aacaaf06dd12682beec50l",
      text: "Fall Night Out Tickets",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLScFtcUdYCFCcPehOEqENal-okyNDoTyDHx-7Muqn-uqG61Oaw/viewform",
      text: "Tech Committee Application",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeSlDm2Jv8yTucyUPt_qWXvnJVCsemtOfTBHmTPWmbEzXM9sA/viewform",
      text: "Networking Workshop",
    },
  ];

  return (
    <>
      <SectionWrapper bg="#EEEBFD" className="w-[70vw] max-w-[872px]">
        <ResourceHeader
          header="Resources"
          headerColour={"#553ADD"}
          subheader="Frequently updated with information for Computing Students!"
          subheaderColour={"#200263"}
        />
        <ButtonGroup links={links} />
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
        <div className="bg-[#F3F1FF] rounded-[4.5vw] 2xl:rounded-[65px] grid place-items-center">
          <div className="flex flex-col w-[70vw] max-w-[872px] p-[95px]">
            <ResourceHeader
              header="Information Packages"
              headerColour={"#200263"}
              className="mb-[3.8vw] lg:mb-[55px]"
            />
            <ButtonGroup links={links2} />
          </div>
        </div>

        <div className="bg-[#F3F1FF] rounded-[4.5vw] 2xl:rounded-[65px] grid place-items-center">
          <div className="flex flex-col w-[70vw] max-w-[872px] p-[95px]">
            <ResourceHeader
              header="Information Packages"
              headerColour={"#200263"}
              className="mb-[3.8vw] lg:mb-[55px]"
            />
            <ButtonGroup links={links2} />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Resources;

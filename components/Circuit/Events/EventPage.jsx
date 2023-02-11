import { React } from "react";

import EventList from "./EventList";

const EventPage = () => {
  return (
    <div className="min-h-[50vh] w-full py-20 bg-[#261536] text-center bg-my_bg_image bg-cover bg-center ">
      <div className="text-[5vw] text-white font-bold "> Upcoming Events</div>
      <EventList />
    </div>
  );
};

export default EventPage;

import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function App() {
  const images = ["/pan1.jpg", "/pan2.jpg", "/pan3.jpg", "/pan4.jpg"];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
  };

  return (
    <div className="flex bg-gradient-to-b w-screen items-center justify-center from-[#644683] to-[#261536]">
      <div className="w-[80%] justify-self-center">
        <div className="p-[7%]">
          <Zoom {...zoomInProperties}>
            {images.map((each, index) => (
              <div
                key={index}
                className="flex w-full h-full items-center justify-center"
              >
                <img
                  className="object-cover rounded-lg shadow-2xl"
                  src={each}
                />
              </div>
            ))}
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default App;

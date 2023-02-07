import { React, useRef } from "react";
import map from "/public/contact_map.jpg";
import OptimizedImageWithFallback from "../../ErrorCollection/Fallback";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Desktop() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bs3jeni",
        "template_8mp8ork",
        form.current,
        "S2nfvu-4865AH_bPF"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    // Create form submission here - the submission object contains all the necessary form data
    // Possibly even add a succesful/unsuccesful message
  };

  return (
    <div className="min-h-[50vh] bg-[#EEEBFD] pt-20">
      <div className="text-[#553ADD] text-center font-bold font text-[4vw] w-full pb-6">
        CONTACT US
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-14 mb-8">
        <div className="flex-grow ml-[6vw] w-[3vw] flex flex-col justify-center items-center">
          <div className="w-fit h-fit justify-center">
            <OptimizedImageWithFallback
              src={map}
              className="w-full h-full object-cover rounded-3xl"
              alt="Map of COMPSA Office"
            />
          </div>
          <div className="text-black font-inter tracking-widest text-2xl font-normal text-center">
            Visit our office in
          </div>
          <div className="text-black font-inter tracking-widest text-xl font-bold text-center">
            Goodwin Hall Rm
          </div>
        </div>
        <form
          className="flex-grow mr-[6vw] w-[3vw] mb-8"
          ref={form}
          onSubmit={handleSubmit}
        >
          <div className="text-black font-inter tracking-widest text-2xl font-normal">
            Concerns or
          </div>
          <div className="text-black font-inter tracking-widest text-2xl font-normal">
            Feedback
          </div>
          <div className="text-black font-inter font-thin text-xs tracking-widest py-2 border-b-2 border-black">
            Note: If you would like us to get back to you personally, please
            leave your email!
          </div>
          <div className="text-black font-inter font-thin text-sm tracking-wider mt-2">
            Name (optional)
          </div>
          <input type="text" name="name" className="rounded-md pl-2 w-full" />
          <div className="text-black font-inter font-thin text-sm tracking-wider mt-2">
            Email (optional)
          </div>
          <input type="text" name="email" className="rounded-md pl-2 w-full" />
          <div className="text-black font-inter font-thin text-sm tracking-wider mt-2">
            Message
          </div>
          <textarea
            type="text"
            name="message"
            className="rounded-md mb-4 pl-2 w-full h-1/4"
            required
          />
          <input
            type="submit"
            className="bg-[#FACA92] rounded-lg font-light tracking-widest text-[18px] w-full text-center text-black py-1 hover:cursor-pointer"
            value="Submit Message"
          />
        </form>
      </div>
      <div className="border-t-2 border-dashed border-black mt-1 pt-12">
        <div className="text-center font-inter font-bold text=[#200263] tracking-widest border-1 border-[#200263] text-xl">
          Looking for a specific portfolio?
        </div>
        <div className="flex flex-col flex-wrap">
          <div className="">
            <div className="flex flex-row flex-wrap justify-center pt-5 gap-12">
              <div className="bg-white bg-opacity-50 rounded-3xl font-inter px-6 py-5 pr-20 w-80">
                <div className="text-lg tracking-widest font-inter font-thin">
                  Academics
                </div>
                <div className="border-t-2 border-black text-xs tracking-widest font-inter">
                  academics@compsa.queensu.ca
                </div>
              </div>
              <div className="bg-white bg-opacity-50 rounded-3xl font-inter px-6 py-4 pr-20 w-80">
                <div className="text-lg tracking-widest font-inter font-thin">
                  Equity
                </div>
                <div className="border-t-2 border-black text-xs tracking-widest font-inter">
                  equity@compsa.queensu.ca
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-row flex-wrap justify-center pt-5 gap-12">
              <div className="bg-white bg-opacity-50 rounded-3xl font-inter px-6 py-4 pr-28 w-80">
                <div className="text-lg tracking-widest font-inter font-thin">
                  Events
                </div>
                <div className="border-t-2 border-black text-xs tracking-widest font-inter">
                  events@compsa.queensu.ca
                </div>
              </div>
              <div className="bg-white bg-opacity-50 rounded-3xl font-inter px-6 py-4 pr-20 w-80">
                <div className="text-lg tracking-widest font-inter font-thin">
                  Internal Affairs
                </div>
                <div className="border-t-2 border-black text-xs tracking-widest font-inter">
                  internal@compsa.queensu.ca
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex flex-row flex-wrap justify-center pt-5 gap-12">
              <div className="bg-white bg-opacity-50 rounded-3xl font-inter px-6 py-4 pr-20 w-80">
                <div className="text-lg tracking-widest font-inter font-thin">
                  Marketing
                </div>
                <div className="border-t-2 border-black text-xs tracking-widest font-inter">
                  marketing@compsa.queensu.ca
                </div>
              </div>
              <div className="bg-white bg-opacity-50 rounded-3xl font-inter px-6 py-4 pr-20 w-80">
                <div className="text-lg tracking-widest font-inter font-thin">
                  Professional Dev.
                </div>
                <div className="border-t-2 border-black text-xs tracking-widest font-inter">
                  pd@compsa.queensu.ca
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop;

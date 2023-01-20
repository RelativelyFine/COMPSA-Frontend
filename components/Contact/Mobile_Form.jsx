import { React, useRef } from "react";
import Image from "next/image";
import arrow from "../../public/back_arrow.png";
import Link from "next/link";
import contact_box from "../../public/contact_box.png";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Mobile_Form() {
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
    <div className="bg-[#EEEBFD] pt-14">
      <div className="flex flex-row flex-nowrap gap-x-10 pt-3">
        <Link href="/contact">
          <button className="ml-4">
            <Image src={arrow} alt="Back Arrow" />
          </button>
        </Link>
        <div className="font-inter font-normal tracking-widest text-black text-4xl">
          Contact Us
        </div>
      </div>
      <div className="flex justify-center pb-56">
        <form className="w-4/6 pt-2 mt-10" onSubmit={handleSubmit} ref={form}>
          <div className="flex bg-white rounded-[7%] justify-center">
            <div className="w-[95%] h-fit">
              {/*<Image src={contact_box} alt="Contact Box" />*/}
              <div className="text-center text-gray-600 pt-2 px-5 text-[3.7vw]">
                Note: If you would like us to get back to you personally, please
                leave your email!
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name (optional)"
                className="rounded-md w-full pl-3 pt-1 mt-3 text-[4vw] text-gray-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                className="rounded-md w-full pl-3 pt-1 mt-4 text-[4vw] text-gray-600"
              />
              <textarea
                rows="6"
                type="text"
                name="message"
                placeholder="Type your message"
                className="rounded-[7%] pl-3 pt-1 w-full mt-4 text-[4vw] h-1/4 text-gray-600"
              />
            </div>
          </div>
          <input
            type="submit"
            className="bg-[#FACA92] rounded-lg font-light tracking-widest text-[19px] bottom-0 w-full z-10 mt-4 text-center text-black py-1"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Mobile_Form;

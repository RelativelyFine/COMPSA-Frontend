import React from 'react'
import Image from "next/image"
import arrow from "../../public/back_arrow.png"
import Link from "next/link"
import contact_box from "../../public/contact_box.png"
import { useState } from 'react'


function Mobile_Form() {
    const [name, setName] = useState('Name(optional)');
    const [email, setEmail] = useState('optionalEmail@xyz.com');
    const [message, setMessage] = useState('Message');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const submission = {name, email, message};
      console.log(submission);
      setName("");
      setEmail("");
      setMessage("");
      // Create form submission here - the submission object contains all the necessary form data
      // Possibly even add a succesful/unsuccesful message
    }
  
    return (
        <div className='bg-[#EEEBFD] pt-14'>
            <div className='flex flex-row flex-nowrap justify-start gap-x-10 pt-3'>
                <Link href="/mobile_contact">
                    <button className='ml-4'>
                        <Image src={arrow} alt="Back Arrow" />
                    </button>
                </Link>
                <h1 className="font-inter font-normal text-center tracking-widest text-black text-4xl">
                    Contact Us
                </h1>
            </div> 
            <div className='flex justify-center pb-56'>
                <form className='relative w-4/6' onSubmit={handleSubmit}>
                    <Image src={contact_box} alt="Contact Box" />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="absolute 6rounded-md top-36 w-3/4 ml-3 mt-2 text-sm text-gray-600"
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="absolute 6rounded-md top-48 w-3/4 ml-3 text-sm text-gray-600"
                    />
                    <textarea
                        type="text"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="absolute 6rounded-md top-56 pl-3 pt-1 w-full mt-1 text-sm h-1/4 text-gray-600"
                    />
                    <button type="submit" className='bg-[#FACA92] rounded-lg font-light tracking-widest text-[19px] absolute bottom-0 w-full z-10 text-center text-black py-1'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Mobile_Form
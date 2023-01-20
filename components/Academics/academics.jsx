import React from 'react'
import Portfolio from "./academics_portfolio"
import Feedback from "./course_feedback"
import Tutor from "./tutor_network"
import P2P from "./P2P"
import Exam from "./exam_tutorials"
import Footer from "../../components/Footer";


const academics = () => {
  return (
    <div className='h-screen bg-[#EEEBFD]'>
        <div className="pt-24">
          <Portfolio />
        </div>
        <Feedback />
        <Tutor />
        <Exam />
        <P2P />
        <Footer />
    </div>
  )
}

export default academics
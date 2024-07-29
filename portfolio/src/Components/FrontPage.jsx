import React from 'react'
import Home from "./Home.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";
import FeedbackShower from './FeedbackShower.jsx';
const FrontPage = () => {
  return (
    <>
    <Home />
    <Skills/>
    <Projects />
    <FeedbackShower/>
    <Footer />
    </>
  )
}

export default FrontPage

import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/hero/Hero"
import Program from "./Components/Program/Program"
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Testimonials from "./Components/Testimonials/Testimonials"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Project' Title='What We made'/>
        <Program />
        <About />
        <Title subTitle='Behind the Code' Title='The Creative Minds Powering Aesthera'/>
        <Campus />
        <Title subTitle='Voices of Aesthera' Title='Our Users Speak for Us'/>
        <Testimonials />
        <Title subTitle='CONTACT US' Title='Let’s Connect and Collaborate'/>
      </div>
    </div>
  ) 
}

export default App 
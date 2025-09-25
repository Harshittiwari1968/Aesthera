import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT AESTHERA</h3>
                <h2>Where Vision Meets Next-Gen Design</h2>
                <p>Aesthera transforms your ideas into stunning,
                    responsive websites that blend beauty with functionality.
                    We craft digital experiences that captivate your audience and help your brand stand out online.</p>
                <p>At Aesthera, we make it easy to bring your vision to life.
                    From sleek portfolios to fully custom sites,
                    we create designs that look amazing on any device and connect with your audience.</p>
                <p>Aesthera is where creativity meets technology.
                    We build elegant, responsive websites that not only look incredible
                    but also deliver an unforgettable user experience.</p>

                <p></p>
            </div>
        </div>
    )
}

export default About

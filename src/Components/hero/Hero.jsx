import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Where innovation meets imagination, shaping tomorrow's digital landscape</h1>
                <p>We blend functionality and aesthetics to create standout web solutions, 
                    from portfolios to custom websites</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero

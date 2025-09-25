import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/Harshit_Tiwari.png'
import gallery_2 from '../../assets/Harshit_Singh.jpg'
import gallery_3 from '../../assets/Divyanshu_Kashyap.png'
import gallery_4 from '../../assets/Hardik_chaurasia.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className="team-section">
      <div className="team-grid">
        <div className="team-card">
          <div className="team-image">
            <img src={gallery_1} alt="" />
          </div>
          <div className="team-info">
            <h2>Harshit Tiwari</h2>
            <p>Founder & Lead Developer</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src={gallery_2} alt="" />
          </div>
          <div className="team-info">
            <h2>Harshit Singh</h2>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src={gallery_3} alt="" />
          </div>
          <div className="team-info">
            <h2>Divyanshu Kashyap</h2>
            <p>Content & Branding Strategist</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src={gallery_4} alt="" />
          </div>
          <div className="team-info">
            <h2>Hardik Chaurasiya</h2>
            <p>Frontend Developer</p>
          </div>
        </div>
        <button className='btn dark-btn'>see more here <img src={white_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Campus

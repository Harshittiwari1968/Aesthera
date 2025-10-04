import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Campus.css';
import gallery_1 from '../../assets/Harshit_Tiwari.png';
import gallery_2 from '../../assets/Harshit_Singh.jpg';
import gallery_3 from '../../assets/Divyanshu_Kashyap.png';
import gallery_4 from '../../assets/Hardik_chaurasia.jpg';
import white_arrow from '../../assets/white-arrow.png';

const Campus = () => {
  const navigate = useNavigate();

  const team = [
    { name: "Harshit Tiwari", role: "Founder & Lead Developer", img: gallery_1 },
    { name: "Harshit Singh", role: "UI/UX Designer", img: gallery_2 },
    { name: "Divyanshu Kashyap", role: "Content & Branding Strategist", img: gallery_3 },
    { name: "Hardik Chaurasia", role: "Frontend Developer", img: gallery_4 },
  ];

  return (
    <div className="team-section">
      <div className="team-grid">
        {team.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="team-image">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="team-info">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered button */}
      <div className="button-container">
        <button className='btn dark-btn' onClick={() => navigate('/developers')}>
          See more here <img src={white_arrow} alt="" />
        </button>
      </div>

    </div>
  );
};

export default Campus;


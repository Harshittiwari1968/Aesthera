import React from "react";
import "./DeveloperPage.css";
import gallery_1 from "../../assets/Harshit_Tiwari.png";
import gallery_2 from "../../assets/Harshit_Singh.jpg";
import gallery_3 from "../../assets/Divyanshu.jpg";
import gallery_4 from "../../assets/Hardik_chaurasia.jpg";
import { Link } from "react-router-dom";

const DeveloperPage = () => {
  const developers = [
    { name: "Harshit Tiwari", role: "Founder & Lead Developer", img: gallery_1, bio: "Full-stack development & AI/ML." },
    { name: "Harshit Singh", role: "UI/UX Designer", img: gallery_2, bio: "Designs intuitive user interfaces." },
    { name: "Divyanshu Kashyap", role: "Content & Branding Strategist", img: gallery_3, bio: "Brand identity & storytelling." },
    { name: "Hardik Chaurasia", role: "Frontend Developer", img: gallery_4, bio: "Expert in React & frontend tech." },
  ];

  return (
    <div className="developer-page">
      <h1>Meet Our Developers</h1>
      <div className="developer-grid">
        {developers.map((dev, idx) => (
          <div className="developer-card" key={idx}>
            <img src={dev.img} alt={dev.name} />
            <h2>{dev.name}</h2>
            <p className="role">{dev.role}</p>
            <p className="bio">{dev.bio}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="btn back-btn">
        ← Back
      </Link>
    </div>
  );
};

export default DeveloperPage;

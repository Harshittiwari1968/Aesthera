import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/abcd.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="campus" smooth={true} duration={500}>Developers</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Login</Link></li>
        <li><Link to="contact" smooth={true} duration={500} className="btn">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

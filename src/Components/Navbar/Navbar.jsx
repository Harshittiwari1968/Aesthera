import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/abcd.png';
import { Menu, X } from 'lucide-react'; // install via: npm install lucide-react

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="hero" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="campus" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Developers</Link></li>
          <li><Link to="testimonials" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Login</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="btn" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

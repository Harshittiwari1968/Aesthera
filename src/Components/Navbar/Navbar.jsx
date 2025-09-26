import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/abcd.png';

const Navbar = () => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setsticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={0} duration={500}>About</Link></li>
        <li><Link to='campus' smooth={true} offset={0} duration={500}>Devlopers</Link></li>
        <li><Link to='Testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link></li>
        <li><Link to='login' smooth={true} offset={0} duration={500}>Login</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

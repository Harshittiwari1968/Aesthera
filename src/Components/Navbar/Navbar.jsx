import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/abcd.png'

const Navbar = () => {

  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  }, [])


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Login</li>
        <li><button className='btn'>Contact</button></li>
      </ul>
    </nav>
  )
}

export default Navbar

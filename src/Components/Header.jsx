import React from 'react'
import logo from '../assets/images/logo.svg'
import illustration from '../assets/images/illustration-working.svg'

import '../Components/Header.css'


export default function Header() {

    return (
        <section className="Hero">
      <nav className="navbar">
        <ul className="buttons-list">
        <img src={logo} alt="" />
          <li><a className="nav-link" href="#">Features</a></li>
          <li><a className="nav-link" href="#">Pricing</a></li>
          <li><a className="nav-link" href="#">Resources</a></li>
        </ul>
        <ul className="buttons2-list">
          <li><a href="#">Login</a></li>
          <li className="sign"><a  href="#Hero2">Sign Up</a></li>
        </ul>
      </nav>


      <div className="frame">
            <img className="illuimag" src={illustration} alt="" />
        <div className="text">
            <h1 className="More">More than just shorter links</h1>
            <p className="below">Build your brand's recognition and get detailed insights on how your links are performing</p>
            <li><a href=""className="Get-Started">Get Started</a></li> 
        </div>
      </div>
    </section>
    )
}

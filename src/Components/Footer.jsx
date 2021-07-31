import React from 'react'
import '../Components/Footer.css';
import brand from '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import instagram from '../assets/images/icon-instagram.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import twitter from '../assets/images/icon-twitter.svg'

export default function Footer() {
    return (
        <section className="footer">
            <div className="elements">
                <img id="brand" src={brand} alt="" />
                <ul>
                    <li><a href="">Features</a></li>
                    <li><a className="text-color" href="">Link Shortening</a></li>
                    <li><a className="text-color" href="">Branded Links</a></li>
                    <li><a className="text-color" href="">Analytics</a></li>
                </ul>

                <ul>
                    <li><a href="">Resources</a></li>
                    <li><a className="text-color" href="">Blog</a></li>
                    <li><a className="text-color" href="">Developers</a></li>
                    <li><a className="text-color" href="">Support</a></li>
                </ul>

                <ul>
                    <li><a href="">Company</a></li>
                    <li><a className="text-color" href="">About</a></li>
                    <li><a className="text-color" href="">Our Team</a></li>
                    <li><a className="text-color" href="">Careers</a></li>
                    <li><a className="text-color" href="">Contact</a></li>
                </ul>

                <div className="social-menu">
                 <ul>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
                </div>
            </div>
        </section>
    )
}

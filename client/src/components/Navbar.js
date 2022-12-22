import React, { useState } from 'react'
import './styles/Navbar.css'
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-scroll'
import Mint from './Mint';


const Navbar = (props) => {

  const setFlag = props.child1
  const setUserAddress = props.userAddress

    // const alertMe = () => {
    //   alert("Connect Btn clicked")
    // }

    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img id="logo" src='./images/logo.png' alt='company logo' />
        </div>
        

        


        {/* 2nd menu part  */}
        
        <div
          className={ showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"} >
          <ul>
            
            <li>
              {/* <a href='./Main'>Home</a> */}
              <Link style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='main' >Home</Link>
            </li>
            <li>
              {/* <a  href='./Intro'>about</a> */}
              <Link style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='intro'>Intro</Link>
            </li>
            <li>
              {/* <a  href='./Intro'>about</a> */}
              <Link style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='about'>About</Link>
            </li>
            <li>
              {/* <a href='#'>Timeline</a> */}
              <Link style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='timeline'>Roadmap</Link>
            </li>
            <li>
              {/* <a href='#'>FAQ</a> */}
              <Link style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='faq-section'>FAQ</Link>
            </li>
            <li>
              {/* <a href='#'>Team</a> */}
              <Link style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='team'>Team</Link>
            </li>
            <li>
              {/* <a href='#'>Team</a> */}
              <Link style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='social'>Social</Link>
            </li>
            <li>
              <div>
                <Mint childchild1={setFlag} userAddressInner = {setUserAddress} />
              </div>
            </li>
            {/* <li>
              <Mint />
            </li> */}
          </ul>
        </div>

        
        

        {/* 3rd social media links */}
        <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li><a href='https://twitter.com/daughtersofcryp' target='_blank'><FaTwitter  className='icons'   /></a></li>
            <li><a  href='https://www.instagram.com/daughtersofCrypto/' target='_blank'><FaInstagram className='icons'   /></a></li>
            <li><a  href='https://discord.com/invite/daughtersofcrypto' target='_blank'><FaDiscord  className='icons'  /></a></li>         
          </ul> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu color='#FF3434' />
            </a>
          </div>
        </div>
        <div id='connect-wallet' >
          {/* <button id='connect-wallet-btn' onClick={alertMe} >Connect wallet</button> */}
        </div>


      </nav>
  )
}

export default Navbar
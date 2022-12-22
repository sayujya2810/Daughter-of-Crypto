import React, { useEffect } from 'react'
import "./styles/About.css"
import AOS from 'aos';
import "aos/dist/aos.css"

const About = () => {

    useEffect(() => {
  AOS.init({
    duration : 800
  });
}, []);


  return (
    <>
        <div id='about'>
            {/* <img data-aos="flip-left" id='doc' alt='DOC' src='./images/doc.jpg' /> */}
            <div className='inner-container'>
                <h1 data-aos="zoom-in">About</h1>
                <p data-aos="zoom-in">Daughters of Crypto, an NFT collection for the empowerment of women featuring diverse digital art. Offering an uplifting community where women can express without judgment, and take on the male dominated NFT space with much-needed representation.</p>
                <p data-aos="zoom-in">Inspired by the women's movement of the 1930's. The art style pays homage to a time when at the start of World War II women were persuaded to replace men on the home front, but those who wanted to continue working after the war ended were severely limited. We want to celebrate the movement that followed by showcasing female freedom and empowerment.</p>
                <p data-aos="zoom-in">Our vision is to welcome more women into the NFT space by offering meaningful IP and an extraordinary community to create real value.</p>
                <p data-aos="zoom-in">Strength, happiness and confidence. Daughters of Crypto stand at the side of Warrior Women.</p>
            </div>
        </div>
    </>
  )
}

export default About
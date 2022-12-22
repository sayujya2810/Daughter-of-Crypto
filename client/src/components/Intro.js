import React from 'react'
import "./styles/Intro.css"
  import { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"
import Slider from './Carousel/Slider';
// import { SliderData } from './SliderData';
// import Slider from "../../public/carousel1/Slider"
// import CarouselNft from './CarouselNft';

     

const Intro = () => {
  
   useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, []);

  return (
    <section id='intro-section'>
        {/* <div className='triangle2' /> */}
        <div id='intro'>
                {/* <img data-aos="zoom-in-left" id='nft-img' src='./images/nft-img.png' alt='nft img'></img> */}
                {/* <CarouselNft /> */}
                <Slider />
                <h1 data-aos="zoom-in-right" id='intro-heading'>Daughters of Crypto</h1>
                <p data-aos="zoom-in-right" id='intro-p'>NFT collection of 1930’s inspired art that embraces female empowerment.</p>
        </div>
    </section>
  )
}

export default Intro
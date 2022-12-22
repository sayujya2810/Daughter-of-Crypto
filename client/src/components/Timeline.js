import React, { useEffect } from 'react'
import "./styles/Timeline.css"
import AOS from 'aos';
import "aos/dist/aos.css"

    

const Timeline = () => {

  function flip(event){
	// var element = event.currentTarget;
	// if (element.className === "card") {
  //   if(element.style.transform === "rotateY(180deg)") {
  //     element.style.transform = "rotateY(0deg)";
  //   }
  //   else {
  //     element.style.transform = "rotateY(180deg)";
  //   }
  // }

  alert("hi")
};

    useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, []);

  return (
    <div className="containers" id='timeline'>
          <h1>Roadmap</h1>
        <div className="timelines" data-aos="zoom-in" >
            <ul>
            <li className='timeline-box' >
                <div className="timeline-content"  >
                  <h1>25% Minted</h1>
                  <p>$25,000 charitable donation to a non-profit of our communities choice.</p>
                </div>
            </li>
            <li className='timeline-box'>
                <div className="timeline-content" >
                  <h1>50% Minted</h1>
                  <p>DOC gets its own Podcast, Daughters of Crypto Podcast - Highlighting Women & Web3.</p>
                </div>
            </li>
            <li className='timeline-box'>
                <div className="timeline-content" >
                  <h1>75% Minted</h1>
                  <p>Members only site access gets unlocked, featuring Exclusive Programs from Industry Leading Experts.</p>
                </div>
            </li>
            <li className='timeline-box'>
                <div className="timeline-content" >
                  <h1>100% Minted</h1>
                  <p>To celebrate, DOC will buy land in the Metaverse for community experiences!</p>
                </div>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Timeline;
import React, { useEffect } from 'react'
import "./styles/Team.css"
import AOS from 'aos';
import "aos/dist/aos.css"


const Team = () => {
    useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, []);


function flip(event){
	var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform === "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }

  // alert("hi")
};

  return (

    

    // <div id='team'>
    //     <h1>Our Team</h1>
    //     <div className='rows'>
    //         <div className='inner-row' >
    //             <div className='cards'  data-aos={"fade-left"} >
    //                 <img alt='user' src='./images/nft-img.png' style={{borderRadius:"50%"}} />
    //                 <h2>Rachel Khattak</h2>
    //                 <p>Rachel is a cyber security engineer, futurist and ​digital entrepreneur. She has built a network of over 500 million followers on social media.</p>
    //             </div>
    //             <div className='cards' data-aos={"fade-left"} >
    //                 <img alt='user' src='./images/profile/diego.jpg' style={{borderRadius:"50%"}} />
    //                 <h2>Diego Vargas</h2>
    //                 <p>Founder of Goat Marketing and meme networks on Instagram, Diego has worked with major brands like Netflix, Tinder, Burger King, FitTea, and more.</p>
    //             </div>
    //         </div>
    //         <div className='inner-row'>
    //             <div className='cards' data-aos={"fade-left"} >
    //                 <img alt='user' src='./images/nft-img.png' style={{borderRadius:"50%"}} />
    //                 <h2>Brian Bennett</h2>
    //                 <p>With over two decades of experience in the IaaS field, Brian brings a wealth of technical knowledge and expertise to the team.</p>
    //             </div>
    //             <div className='cards' data-aos={"fade-left"} >
    //                 <img alt='user' src='./images/profile/victor.jpg' style={{borderRadius:"50%"}} />
    //                 <h2>Victor Nunez</h2>
    //                 <p>As an early adopter to Discord, Manuel is utilizing his​management skill to help NFT projects build their </p>
    //             </div>
    //         </div>
            
    //     </div>

        
    // </div>



    <div id='team' className="wrapper">
  <h1>Our Team</h1>
  <div className="team">
    <div  data-aos={"fade-up"} className="team_member card" onClick={flip}>
      <div className="team_img">
        <img src="./images/profile/rachel.jpeg" style={{borderRadius:"50%"}} alt="Team_image" />
      </div>
      <h3>Rachel Khatt</h3>
      <p className="role">Chief Executive Officer</p>
      <p>Rachel is a cyber security engineer, futurist and ​digital entrepreneur. She has built a network of over 500 million followers on social media.</p>
    </div>
    <div data-aos={"fade-up"} className="team_member card" onClick={flip}>
      <div className="team_img">
        <img src="./images/profile/diego.jpg" alt="Team_image" style={{borderRadius:"50%"}} />
      </div>
      <h3>Diego Vargas</h3>
      <p className="role">Chief Operations Officer</p>
      <p>Founder of Goat Marketing and meme networks on Instagram, Diego has worked with major brands like Netflix, Tinder, Burger King, FitTea, and more.</p></div>
    {/* <div data-aos={"fade-up"} className="team_member card" onClick={flip}>
      <div className="team_img">
        <img src="./images/profile/victor.jpg" alt="Team_image" style={{borderRadius:"50%"}}  />
      </div>
      <h3>Tobey Adams</h3>
      <p className="role">Community Manager</p>
      <p>As an early adopter to Discord, Manuel is utilizing his​management skill to help NFT projects build their digital footprint.</p>
    </div> */}
    <div data-aos={"fade-up"} className="team_member card" onClick={flip}>
      <div className="team_img">
        <img src="./images/profile/victor.jpg" alt="Team_image" style={{borderRadius:"50%"}}  />
      </div>
      <h3>KIRA</h3>
      <p className="role">Blockchain Developer</p>
      <p>Nostrud veniam aliqua qui occaecat sunt ex laboris consequat voluptate ut laborum.</p>
    </div>
    <div data-aos={"fade-up"} className="team_member card" onClick={flip}>
      <div className="team_img">
        <img src="./images/profile/sayujya.jpg" alt="Team_image" style={{borderRadius:"50%"}}  />
      </div>
      <h3>Sayujya Malkan</h3>
      <p className="role">Full Stack Developer</p>
      <p>Full Stack Developer, Worked with Gracious Indies, a NGO funded NFT minting website which funds for orphanage as Front End Dev. </p>
    </div>
    
  </div>
  
</div>
  )
}

export default Team
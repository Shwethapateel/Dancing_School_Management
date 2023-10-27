import React from "react";
import "./home.css"
import { Link } from "react-router-dom";
import homepage from "../../Assets/homeoage2.jpg"
import homeContent from "../../Assets/Homepage_content.avif"
let Home = () => {
  return (
    <div>
      <div id="main">
      <div id="heading">
        <h2 id="line1">From The Whisper Of Ballet</h2>
        <h2 id="line2">To The Roar Of Rhythms</h2>
        <p id="line3">Dancer | Choreographer | Performer | Dance Educator</p>
        <Link to={"/register"}><button id="regbtn">CLICK HERE TO REGISTER</button></Link>
      </div>
    </div>
    <div id="main2">
      <div id="bodyimg" >
        <img id="imgbdy" src={homepage} alt="" height={300} width={450}/>
      </div>
      <div id="bodycont">
        <h1 id="vision">OUR VISION</h1>
        <p>To provide a platform for dance enthusiasts 
          to perform and exchange dance knowledge. 
          To improve the performance and training 
          quality of members. To enhance member's 
          dance interest, enthusiasm, and communication
          and build up good friendships through 
          training and performances.</p>
          <Link to={"/login"}><button id="bdybtn">READ MORE</button></Link>
      </div>
    </div>
    <div id="main3">
      <div id="bodycont2">
        <h1 id="line4">YOU DON’T HAVE TO BE A DANCER TO LOOK LIKE ONE</h1>
        <h3 id="line5">NEW TO DANCEBODY?</h3>
        <p id="para">You don’t need to be a dancer to get results from DanceBody
           - all are welcome! Start your journey with our Sculpt, 
           Strength & Stability, or Dance & Sculpt classes - no 
           choreography required. Our Signature and Full Out dance 
           cardio classes change set choreography every three months 
           so you can practice, perfect, and perform. DanceBody is 
           for all fitness levels - two left feet be damned. 
           If you’re looking for nice people dancing to 
           good music, this is the place.</p>
      </div>
      <div id="bodyimg2">
        <img height={330} width={450} src={homeContent} alt="" />
      </div>
    </div>
    </div>
  );
};
export default Home;

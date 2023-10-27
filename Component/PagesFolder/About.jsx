import React from "react";
import "./about.css"
import Reddress from "../../Assets/young-girl-break-dancing-wall-background.png"
import AboutUsgirl from "../../Assets/aboutus-girl.png"
import AboutBody from '../../Assets/aboutImage3.png'
let About = () =>{
    return (
      <div id="aboutpage">
        <div id="about1">
          <div id="aboutcont">
            <h2 id="about1line1">ABOUT US</h2>
            <p id="about1line2">
              The Danceworx comprises of The Danceworx Academy and The Danceworx
              Student Repertory Company.
            </p>
            <p id="about1line3">
              The Danceworx Academy was set up by Indian-Australian
              choreographer Ashley Lobo in November of 1998 to teach dance along
              the lines of dance institutes overseas. Currently its curriculum
              consists of styles such as Jazz, Classical Ballet, Contemporary,
              Urban and Funk.
            </p>
            <p id="about1line4">
              Today, The Danceworx Academy has a huge student database spanning
              New Delhi, NCR and Mumbai, Bangalore.
            </p>
            <p id="about1line5">
              The Danceworx Student Repertory Company was set up with senior
              students hand-picked by the Artistic Director Ashley Lobo. These
              budding artists are given opportunities to perform, teach and
              choreograph. They have a special curriculum set by the Artistic
              Director.
            </p>
          </div>
          <img src={Reddress} alt="" id="about1img" />
        </div>
        <div id="about2">
          <img id="about2img" src={AboutUsgirl} alt="" />
          <div id="about2cont">
            <h2 id="about2line1">THE PHILOSOPHY</h2>
            <p id="about2line2">
              The philosophy of The Danceworx is “Helping people find and build
              their dance & themselves, to full potential, in an environment of
              fun, love & values”.
            </p>
            <p id="about2line3">
              Students are guided to apply the self-belief, discipline and goal
              setting skills that they have discovered through dance into their
              chosen vocations, be it dance or any other.
            </p>
          </div>
        </div>
        <div id="about3">
          <div id="about3cont">
            <h2 id="about3line1">THE VISION</h2>
            <p id="about3line2">
              THE VISION “To create a higher awareness & understanding of
              international dance and to facilitate & help in developing
              constantly evolving artists.”
            </p>
            <p id="about3line3">
              THE VISION “To create a higher awareness & understanding of
              international dance and to facilitate & help in developing
              constantly evolving artists.” The Danceworx believes in the
              facilitation of evolving artists. Students are taught that dance
              is not limited to steps alone, but includes a wider understanding
              of self, creativity, movement and physiology. This information is
              to enable them to create their own work and eventually discover
              and develop a movement style of their own.
            </p>
          </div>
          <img id="about3img" src={AboutBody} alt="" height={550} width={500} />
        </div>
        <div id="about4">
          <h3 id="about4line1">Conclusion</h3>
          <p id="about4line2">
            Dancing is a great way of relieving stress. So we’ve given you a
            handful of online dance courses to help you get your groove on.
          </p>
        </div>
      </div>
    );
}
export default About;
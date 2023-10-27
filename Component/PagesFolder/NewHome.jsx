import React from "react";
import bckgrndimg from "../../Assets/Remove background project.png"
import cardjson from "./card.json"
import Mendance from "../../Assets/man-dancing-street-dance.png"
import doubleDance from "../../Assets/two-young-girl-boy-dancing-hip-hop-studio.png"
import "./Newhome.css"
let NewHome = () =>{
    return (
      <div id="newhome">
        <div id="newbody1">
          <img src={bckgrndimg} alt="" id="body1img" />
          <div id="body1content">
            <h3 id="newline1">Dance with us !!!</h3>
            <h2 id="newline2">Once A dancer, Is Always A Dancer</h2>
            <h2 id="newline3">
              Make the world your stage and speak with Dance.
            </h2>
          </div>
        </div>
        <div id="newbody2">
          <p id="new2line1">
            If you’re looking for dance classes in Mumbai, Bangalore & Delhi,
            you’ve come to the right place!
          </p>
          <p id="new2line2">
            Ballet, Jazz, Contemporary, Jazz Funk, Heels, Street. We’ve got it
            all!
          </p>
          <p id="new2line3">
            You can also access a real, professional and international dance
            education in all of the
          </p>
          <p id="new2line4">
            above styles, no matter where you are located through our online
            dance classes!
          </p>
        </div>
        <div id="newblock">
          {cardjson.map((x, i) => {
            return (
              <div key={i} id="newcard">
                <img
                  id="newcontimg"
                  height={170}
                  width={300}
                  src={x.img}
                  alt=""
                />
                <div id="cardcontent">
                  <h3 id="cardline">{x.line}</h3>
                  <p id="cardcont">{x.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div id="newbody3">
          <img id="new3img" src={Mendance} alt="" />
          <div id="new3cont">
            <h3 id="new3line1">We Provide Service Since 2008</h3>
            <h2 id="new3line2">Join A Global In Modern Dance Community</h2>
            <h3 id="new3line3">
              Experience practising alongside your course instructor on the same
              screen.
            </h3>
            <p id="new3line4">
              Our in-studio classes are the ideal way to experience the best
              dance cardio fitness. Taught by performers, but created for
              everyone, we believe that your workout should build confidence and
              bring you joy while also delivering a great sweat. Ultimately, the
              most important measurement is how you feel - which is why we
              strive to improve your quality of life through movement. It’s what
              we do!
            </p>
          </div>
        </div>
        <div id="newbody4">
          <div id="new4cont">
            <h3 id="new4line1">We Provide Private Sessions</h3>
            <h2 id="new4line2">DANCEBODY GOALS, CUSTOMIZED TO YOU</h2>
            <p id="new4line3">
              Tailor-made to your goals, DanceBody Private Sessions can be
              scheduled in-home, in-studio, or virtually. Each personalized
              one-hour session is a great way to get the training you need to
              expedite your fitness goals or to learn the newest dances.
              Celebrate birthdays, bachelorettes, and company events the healthy
              way with a DanceBody Private Party. Kids Private Group Sessions
              also available.
            </p>
          </div>
          <img id="new4img" height={700} width={470} src={doubleDance} alt="" />
        </div>
        <div id="newbody5">
          <div>
            <h2 id="new5line1">2008</h2>
            <h3 id="new5line5">Year Founded</h3>
          </div>
          <div>
            <h2 id="new5line2">20+</h2>
            <h3 id="new5line6">Experienced Faculty</h3>
          </div>
          <div>
            <h2 id="new5line3">1Million +</h2>
            <h3 id="new5line7">Students Trained</h3>
          </div>
          <div>
            <h2 id="new5line4">11+</h2>
            <h3 id="new5line8">Countries Travelled</h3>
          </div>
        </div>
      </div>
    );
}
export default NewHome;
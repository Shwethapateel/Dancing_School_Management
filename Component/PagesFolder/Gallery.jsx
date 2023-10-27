import React from "react";
import "./gallery.css"
import ImageSlider from "./Sliders/ImageSlider";
import ViewBranchInUser from "./ViewBranchInUser";
let Gallery = () =>{
    return (
      <div id="mainGallery">
        <div id="gallery">
          <h1 id="galhead">GALLERY!!</h1>
        </div>
        <div id="gallerycont">
          <h2 id="galleryline1">DANCE PHOTOS GALLERY</h2>
          <p id="galleryline2">
            Our team has an extensive list of photos taken over the years. We
            don't reveal most of the photos for privacy issues. Students come
            and go and some of them are comfortable allowing us to share their
            pictures online but most of them don't want to associate themselves
            with Dance and Dance because they come to classes without their
            knowledge of their boy friend or parents.
          </p>
          <p id="galleryline3">
            Here are some of pictures we have taken and shared with their
            permission. Visit our Dance Academy to have a pleasant and wonderful
            experience.
          </p>
        </div>
        <ImageSlider />
        <div id="testimoniBody">
          <div id="testiMoni">
            <h2 id="testimoniHead1">TESTIMONIALS</h2>
            <h1 id="testMoniHead2">What Our Student's Say?</h1>
          </div>
          <div id="testimoni2">
            <p id="testMoniHead3">Thank You for another exceptional dance recital! It was 
            amazing as always. It is as Great as a XTRA  production every 
            year. You go above and beyond evenry single year proving time and time 
            again just how much you LOVE what you do!!!
          </p>
          </div>
        </div>
                <div>
          <ViewBranchInUser />
        </div>
      </div>
    );
}
export default Gallery;
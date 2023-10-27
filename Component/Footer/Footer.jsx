import React from "react";
// import logo from "../../Assets/NewLogo.jpg"
import facebook from "../../Assets/facebook.png"
import instagram from "../../Assets/instagram.png"
import youtube from "../../Assets/Youtube.png"
import linkedin from "../../Assets/linkedin.png"
import "./footer.css"
let Footer = () =>{
    return(
        <div id="Footer">
          <div id="footer">
            <div id="footer1st">
                {/* <img src={logo} alt=""height={75} width={135} /> */}
                <p>Dance is a form of expression 
                    that transcends language, culture, 
                    and boundaries. Let the rhythm guide
                    you as you explore the beauty 
                    and grace of movement!!!</p>
            </div>
            <div id="footer2nd">
                <h3 id="footerhead">Reach Us</h3>
                <span>
                    <h3 id="f1">Email</h3>
                    <p id="fa">abcd@gmail.com</p>
                </span>
                <span>
                    <h3 id="f2">Call us</h3>
                    <p id="fb">+91 9988334455 / 8256780987</p>
                </span>
                <span>
                    <h3 id="f3">Address</h3>
                    <p id="fc">We are Available Worldwide</p>
                </span>
            </div>
            <div>
                <span>
                    <h3 id="footerimg">Our Social</h3>
                    <img id="facebk" src={facebook} alt="" height={70} width={70}/>
                    <img id="insta" src={instagram} alt="" height={70} width={70}/>
                    <img id="lkdn" src={linkedin} alt="" height={70} width={70}/>
                    <img id="utube" src={youtube} alt="" height={70} width={70}/>
                </span>
            </div>
          </div>
          <div id="footerend">
            <h3 id="copyright">© 2023 All Rights Reserved</h3>
          </div>  
        </div>
    )
}
export default Footer;
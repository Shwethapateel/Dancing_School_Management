import React, { useState } from "react";
import Newlogo from "../../Assets/NewLogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
let Navbar = () => {
  let navigate = useNavigate()
  const [nav, setNav] = useState(false);
  let role = localStorage.getItem("role")
  let token = localStorage.getItem("token")

  let handleLogout=()=>{
  const confirmation = window.confirm("Are you sure you want to log out?");
    if (confirmation) {
      localStorage.clear();
      navigate("/home");
    }
  }
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav id="navbar" className={nav ? "nav active" : "nav"}>
      <article>
        <Link className="logo"><img src={Newlogo} alt="" height={75} width={135} /></Link>
        <ul id="menu">
          {token ? <li><Link to="/">HOME</Link></li> :
          <li><Link to="/home">HOME</Link></li>
          }
          <li><Link to={"/about"}>ABOUT</Link></li>
          <li><Link to={"/gallery"}>GALLERY</Link></li>
          { role === "ROLE_ADMIN" ? <li><Link to='/adminDashBoard'>ADMIN DASHBOARD</Link></li> : null}
          {token ? <a id="logout" to="/login" onClick={handleLogout}>LOGOUT</a> : <>
                    <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/register"><button id="btn">Join Now</button></Link></li>
          </>}
        </ul>
      </article>
    </nav>
  );
};
export default Navbar;
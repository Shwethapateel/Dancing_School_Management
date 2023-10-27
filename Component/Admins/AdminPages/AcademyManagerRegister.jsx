import React, { useState } from "react";
import "./AcademyManagerRegister.css"
import { useNavigate } from "react-router-dom";
import axiosinstance from "../../Helpers/InstanceAxios.js"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let AcademyManagerRegister = () => {
  let navigate = useNavigate();
  let token = localStorage.getItem("token")
  let [data, setData] = useState({
    userName: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
    gender: "",
  });
  let { userName, email, password, dob, phone, gender } = data;
  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = async(e) => {
    e.preventDefault();
    let payload = {userName,email,password,dob,gender,phone}
    console.log(payload);
    let info = await axiosinstance.post("/academymanagers/save", payload,{
      headers:{
        Authorization : `Bearer ${token}`
      }
    });      
    toast.success("SUCCESSFULLY SUBMITTED", { position: "top-center", style:{backgroundColor:"black",color:"white"} });
    navigate("/adminDashBoard/ViewAcademyManager");
  };
  return (
    <div id="Academybody">
      <form action="" id="Academytable" onSubmit={handleSubmit}>
        <div id="body1">
          <div id="body2">
            <h2 id="academyreg">ADD ACADEMY MANAGER</h2>
            <label htmlFor="">Username</label>
            <input placeholder="Enter Name" type="text" name="userName" value={userName} required onChange={handleData} />
            <div id="a" ></div>

            <label htmlFor="">Email</label>
            <input placeholder="Enter Email ID" type="text" required value={email} name="email" onChange={handleData}/>
            <div id="b"></div>

            <label htmlFor="">Password</label>
            <input placeholder="Enter Password" type="text" value={password} name="password" required onChange={handleData}/>
            <div id="c"></div>

            <p id="gen">Gender</p>
            <div id="gender">
              <label htmlFor="">Male</label>
              <input type="radio" name="gender" id="male" value="male" onChange={handleData}/>
              <label htmlFor="">Female</label>
              <input type="radio" name="gender" id="female" value="female" onChange={handleData}/>
            </div>
            <div id="f"></div>

            <label htmlFor="">Dob</label>
            <input type="date" required value={dob} name="dob" onChange={handleData}/>
            <div id="d"></div>

            <label htmlFor="">Phone</label>
            <input label="Enter Phone Number" type="number" maxLength={10} value={phone} name="phone" required onChange={handleData}/>
            <div id="e"></div>

            <button id="bttn">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AcademyManagerRegister;

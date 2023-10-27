import React, { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import axiosinstance from "../Helpers/InstanceAxios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let Login = () =>{
    let navigate = useNavigate()
    let[data, setData] = useState({
        userEmail:"",
        password:""
    })
    let {userEmail, password} = data;
    let handleData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({ ...data, [name]: value });
  };
    let handleSubmit = async(e)=>{
        e.preventDefault()
        let payload = {userEmail, password}
        console.log(payload);
        let {data} = await axiosinstance.post("/authenticate", payload);
        console.log(data);
        let token= data.token
        let role= data.role
        localStorage.setItem("token",token)
        localStorage.setItem("role",role)
        navigate('/')
        toast.success("SUCCESSFULLY LOGIN", { position: "top-center", style:{backgroundColor:"black",color:"white"} });
    }
    return(
        <div id="loginbody">
            <form action="" id="loginform" onSubmit={handleSubmit}>
                <div id="loginbody1">
                    <div id="loginbody2">
                        <h2 id="loginhead">WELCOME BACK!</h2>
                        <p id="lgnhead">To keep connected with us please login</p>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter Email ID" value={userEmail} name="userEmail" onChange={handleData} required />
                        <div id="x"></div>

                        <label htmlFor="">Password</label>
                        <input placeholder="Enter Password" type="text" name="password"  value={password} onChange={handleData} required/>
                        <div id="y"></div>

                        <button id="loginbtn">SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login;
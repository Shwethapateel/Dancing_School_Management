import React, { useState } from "react";
import "./branch.css"
import axiosinstance from "../../Helpers/InstanceAxios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
let AddBranch = () =>{
    let navigate = useNavigate()
    let token = localStorage.getItem('token')
    let {id} = useParams()
    // console.log(id);
    let [data, setData] = useState({
      address: "",
      city: "",
      phone: "",
      pincode:""
    });
    let {address, city, phone, pincode} = data;
    let handleUpdate = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setData({...data, [name]: value})
    }
    let handleSubmit = async (e) =>{
        e.preventDefault()
        let payload = {address, city, phone, pincode}
        // console.log(payload);
        await axiosinstance.post(`/branches/save?aid=${id}`, payload,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        toast.success("SUCCESSFULLY BRANCH ADDED", {position: "top-center", style: { backgroundColor: "black", color: "white" }});
        navigate("/adminDashBoard/ViewBranch");
    }
    return(
        <div id="AcademyRegister">
      <form action="" id="BranchRegistertable" onSubmit={handleSubmit}>
        <div id="Registerbody1">
          <div id="Registerbody2">
            <h2 id="academyreg">ADD BRANCH</h2>
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Enter Address" name="address" value={address} required onChange={handleUpdate}/>
            <div id="a"></div>

            <label htmlFor="">City</label>
            <input type="text" placeholder="Enter City" required value={city} name="city" onChange={handleUpdate}/>
            <div id="b"></div>

            <label htmlFor="">Phone Number</label>
            <input type="number" maxLength={10} placeholder="Enter Phone number" value={phone} name="phone" required onChange={handleUpdate}/>
            <div id="c"></div>

            <label htmlFor="">PinCode</label>
            <input type="number" placeholder="Enter PinCode" value={pincode} name="pincode" required onChange={handleUpdate}/>
            <div id="e"></div>

            <button id="bttn">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
    )
}
export default AddBranch;
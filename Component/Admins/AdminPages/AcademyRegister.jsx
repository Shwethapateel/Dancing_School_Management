import React, {useState} from "react";
import "./AcademyRegister.css";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosinstance from "../../Helpers/InstanceAxios";
let AcademyRegister = () =>{
    let navigate = useNavigate();
    let {id} = useParams()
    console.log(id);
    let token = localStorage.getItem("token");
    let [data, setData] = useState({
      academyName: "",
      description: "",
      email: "",
      contact: ""
    });
    let { academyName, description, email, contact } = data;
    let handleUpdate = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setData({...data, [name]: value})
    }
    let handlesubmit = async(e) =>{
         e.preventDefault()
        let payload = { academyName, description, email, contact };
        console.log(payload);
        let finalData = await axiosinstance.post(`/academies/saveacademy?managerId=${id}`,payload,{
        headers: {
             Authorization: `Bearer ${token}`,
          }
        });
        toast.success("SUCCESSFULLY UPDATED", {position: "top-center", style: { backgroundColor: "black", color: "white" }});
        navigate("/adminDashBoard/ViewAcademy");
    }
    return(
        <div id="AcademyRegister">
      <form action="" id="AcademyRegistertable" onSubmit={handlesubmit}>
        <div id="Registerbody1">
          <div id="Registerbody2">
            <h2 id="academyreg">ACADEMY REGISTER</h2>
            <label htmlFor="">Academy Name</label>
            <input type="text" placeholder="Enter Academy Name" name="academyName" value={academyName} required onChange={handleUpdate}/>
            <div id="a"></div>

            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter Email ID" required value={email} name="email" onChange={handleUpdate}/>
            <div id="b"></div>

            <label htmlFor="">Description</label>
            <input type="text" placeholder="Enter Discription" value={description} name="description" required onChange={handleUpdate}/>
            <div id="c"></div>

            <label htmlFor="">Contact Number</label>
            <input type="number" placeholder="Enter Phone Number" maxLength={10} value={contact} name="contact" required onChange={handleUpdate}/>
            <div id="e"></div>

            <button id="bttn">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
    )
}
export default AcademyRegister;
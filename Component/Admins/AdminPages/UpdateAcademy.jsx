import React, { useEffect, useState } from "react";
import axiosinstance from "../../Helpers/InstanceAxios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
let UpdateAcademy = () =>{
    let {id} = useParams()
    // console.log(id);
    let token = localStorage.getItem('token')
    let navigate = useNavigate()
    let [data, setData] = useState({
      academyName: "",
      description: "",
      email: "",
      contact: "",
    });
    let { academyName, description, email, contact } = data;
    let handleUpdate = (e) => {
          let name = e.target.name;
          let value = e.target.value;
          setData({ ...data, [name]: value });
    };
    useEffect(()=>{
        let fetchData = async () =>{
            let { data } = await axiosinstance.get(`/academies/get/${id}`,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(data.data);
            setData(data.data)
        }
        fetchData()
    },[])
    let handleUpdateSubmit = async (e) =>{
        e.preventDefault();
        let payload = {academyName, description, email, contact, id}
        // console.log(payload);
        let finalData = await axiosinstance.put("/academies/update",payload,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        toast.success("UPDATED SUCCESSFULLY", {position: "top-center", style: { backgroundColor: "black", color: "white" }});
        navigate("/adminDashBoard/ViewAcademy");
    }
    return(
        <div id="AcademyRegister">
      <form action="" id="AcademyRegistertable" onSubmit={handleUpdateSubmit}>
        <div id="Registerbody1">
          <div id="Registerbody2">
            <h2 id="academyreg">UPDATE ACADEMY REGISTER</h2>
            <label htmlFor="">Academy Name</label>
            <input type="text" name="academyName" value={academyName} required onChange={handleUpdate}/>
            <div id="a"></div>

            <label htmlFor="">Email</label>
            <input type="text" required value={email} name="email" onChange={handleUpdate}/>
            <div id="b"></div>

            <label htmlFor="">Description</label>
            <input type="text"  value={description} name="description" required onChange={handleUpdate}/>
            <div id="c"></div>

            <label htmlFor="">Contact Number</label>
            <input type="number"  maxLength={10} value={contact} name="contact" required onChange={handleUpdate}/>
            <div id="e"></div>

            <button id="bttn">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
    )
}
export default UpdateAcademy;
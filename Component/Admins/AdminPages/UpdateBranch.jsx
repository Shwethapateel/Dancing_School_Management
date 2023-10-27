import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosinstance from "../../Helpers/InstanceAxios";
import { toast } from "react-toastify";
let UpdateBranch = () =>{
    let {id} = useParams()
    // console.log(id);
    let token = localStorage.getItem('token')
    let navigate = useNavigate()
    let [branch , setBranch] = useState({
        address:'',
        city:'',
        pincode:'',
        phone:''
    })
    let {address, city, pincode, phone} = branch;
    let handleUpdate = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setBranch({...branch, [name]: value})
    }
    useEffect(()=>{
        let fetchData = async () =>{
            let {data} = await axiosinstance.get(`/branches/get/${id}`,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log(data.data);
            setBranch(data.data)
        }
        fetchData()
    },[])
    let handleUpdateSubmit = async (e) =>{
        e.preventDefault()
        let payload = {address, city, pincode, phone, id}
        // console.log(payload);
        await axiosinstance.put(`/branches/update/${id}`,payload,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        toast.success("UPDATED SUCCESSFULLY", {position: "top-center", style: { backgroundColor: "black", color: "white" }});
        navigate("/adminDashBoard/ViewBranch");
    }
    return(
        <div id="AcademyRegister">
      <form action="" id="BranchRegistertable" onSubmit={handleUpdateSubmit}>
        <div id="Registerbody1">
          <div id="Registerbody2">
            <h2 id="academyreg">ADD BRANCH</h2>
            <label htmlFor="">Address</label>
            <input type="text" name="address" value={address} required onChange={handleUpdate}/>
            <div id="a"></div>

            <label htmlFor="">City</label>
            <input type="text" required value={city} name="city" onChange={handleUpdate}/>
            <div id="b"></div>

            <label htmlFor="">Phone Number</label>
            <input type="number" maxLength={10} value={phone} name="phone" required onChange={handleUpdate}/>
            <div id="c"></div>

            <label htmlFor="">PinCode</label>
            <input type="number" value={pincode} name="pincode" required onChange={handleUpdate}/>
            <div id="e"></div>

            <button id="bttn">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
    )
}
export default UpdateBranch
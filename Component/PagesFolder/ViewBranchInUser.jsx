import React, { useEffect, useState } from "react";
import './ViewBranchuser.css'
import axiosinstance from "../Helpers/InstanceAxios";
import { Link } from "react-router-dom";
let ViewBranchInUser = () =>{
    let [branch , setBranch] = useState([])
    let token = localStorage.getItem('token')
    useEffect(()=>{
        let FetchData = async()=>{
            let { data } = await axiosinstance.get("/branches/getall",{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });
            console.log(data.data);
            setBranch(data.data)
        }
        FetchData()
    },[])
    return(
        <div id="branchdetials">
            <h1>OUR STUDIO'S</h1>
            <div id="branchcard">
                {branch.map((x,i)=>{
                    return(
                        <div key={i} id="branchContent">
                            <h3>Address : {x.address}, {x.city}</h3>
                            <h3>Pincode : {x.pincode}</h3>
                            <h3>Contact Number : {x.phone}</h3>
                            <div id="BranchView">
                                <button id="branchViewBtn"><Link id="branchViewLink" to={`/gallery/ViewEachBranchCourse/${x.id}`}>Click here to view Course</Link></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ViewBranchInUser
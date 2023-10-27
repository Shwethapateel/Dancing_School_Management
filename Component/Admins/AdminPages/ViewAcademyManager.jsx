import React, { useEffect, useState } from "react";
import axiosinstance from "../../Helpers/InstanceAxios";
import { Link } from "react-router-dom";
import "./ViewAcademyManager.css";
let ViewAcademyManager = () =>{
    let [users, setUsers] = useState([])
    let token = localStorage.getItem("token")
    useEffect(()=>{
        let fetchData = async()=>{
            let {data} = await axiosinstance.get("/academymanagers/getall",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            console.log(data.data);
            setUsers(data.data)
        }
        fetchData()
    },[])
    return(
        <div>
            <h1 id="viewhead">ACADEMY MANAGER DETIALS</h1>
            <div id="block">
                {users.map((x,i)=>{
                    return(
                        <div  key={i} id="card">
                            <h3>NAME : {x.userName}</h3>
                            <h3>DESIGNATION : {x.role}</h3>
                            <h3>EMAIL : {x.email}</h3>
                            <h3> D.O.B : {x.dob}</h3>
                            <h3>PHONE : {x.phone}</h3>
                            <h3>GENDER : {x.gender}</h3>
                            <div>
                                <button id="Viewbtn"><Link to={`/adminDashBoard/ViewAcademyManager/ViewAcademyEachManager/${x.id}`} id="viewbtntag">VIEW</Link></button>                            
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ViewAcademyManager;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosinstance from "../../Helpers/InstanceAxios";
let ViewBranch = () =>{
    let [branch , setBranch] =useState([])
    let token = localStorage.getItem('token')
    useEffect(()=>{
        let fetchData = async()=>{
            let { data } = await axiosinstance.get("/branches/getall",{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });
            console.log(data.data);
            setBranch(data.data)
        }
        fetchData()
    },[])
    let handleDelete = (x)=>{
        axiosinstance.delete(`/branches/delete/${x}`,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        });
        alert("SUCCESSFULLY DELETED")
        window.location.assign("/adminDashBoard/ViewBranch");
    }
    return(
        <div id="tablebody">
        <h1 id="tableheading">VIEW BRANCH</h1>
        <div>
          <table id="tableAcademy" border={2} cellPadding={0} cellSpacing={0} style={{borderCollapse:'collapse'}}>
            <tr>
              <th>ADDRESS</th>
              <th>CITY</th>
              <th>PINCODE</th>
              <th>PHONE NUMBER</th>
              <th>UPDATE</th>
              <th>ADD COURSE</th>
              <th>DELETE</th>
            </tr>
            {branch.map((x,i)=>{
              return (
                  <tr key={i}>
                    <td>{x.address}</td>
                    <td>{x.city}</td>
                    <td>{x.pincode}</td>
                    <td>{x.phone}</td>
                    <td><button className="tablebtn"><Link to={`/adminDashBoard/ViewBranch/UpdateBranch/${x.id}`}>UPDATE</Link></button></td>
                    <td><button className="tablebtn"><Link to={`/adminDashBoard/ViewBranch/AddCourse/${x.id}`}>ADD COURSE</Link></button></td>
                    <td><button className="tablebtn"><Link onClick={()=>{handleDelete(x.id)}}>DELETE</Link></button></td>
                  </tr>
              );
            })}
          </table>
        </div>
      </div>
    )
}
export default ViewBranch;
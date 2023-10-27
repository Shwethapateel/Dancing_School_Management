import React, { useEffect, useState } from "react";
import axiosinstance from "../../Helpers/InstanceAxios";
import { Link} from "react-router-dom";
import "./Viewacademy.css"
// import { toast } from "react-toastify";
let ViewAcademy = () =>{
    let [users, setUsers] = useState([])
    let token = localStorage.getItem("token")
    useEffect(()=>{
        let fetchData = async()=>{
            let {data}  = await axiosinstance.get("/academies/getall",{
                headers:{
                    Authorization : `Bearer ${token}`
                }
            })
            console.log(data.data);
            setUsers(data.data)
        }
        fetchData()
    },[])
    let handleDelete = (x) =>{
      axiosinstance.delete(`/academies/delete/${x}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // toast.success("SUCCESSFULLY DELETED", {position: "top-center",style: { backgroundColor: "black", color: "white" }});
      alert("SUCCESSFULLY DELETED")
      window.location.assign("/adminDashBoard/ViewAcademy");
    }
    return (
      <div id="tablebody">
        <h1 id="tableheading">ACADEMY PAGE</h1>
        <div>
          <table id="tableAcademy" border={2} cellPadding={0} cellSpacing={0} style={{borderCollapse:'collapse'}}>
            <tr>
              <th>ACADEMY NAME</th>
              <th>CONTACT NUMBER</th>
              <th>DESCRIPTION</th>
              <th>EMAIL ID</th>
              <th>UPDATE</th>
              <th>ADD BRANCH</th>
              <th>DELETE</th>
            </tr>
            {users.map((x,i)=>{
              return (
                  <tr key={i}>
                    <td>{x.academyName}</td>
                    <td>{x.contact}</td>
                    <td>{x.description}</td>
                    <td>{x.email}</td>
                    <td><button className="tablebtn"><Link to={`/adminDashBoard/ViewAcademy/UpdateAcademy/${x.id}`}>UPDATE</Link></button></td>
                    <td><button className="tablebtn"><Link to={`/adminDashBoard/ViewAcademy/AddBranch/${x.id}`}>ADD BRANCH</Link></button></td>
                    <td><button className="tablebtn" onClick={() => {handleDelete(x.id)}}><Link>DELETE</Link></button></td>
                  </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
}
export default ViewAcademy;
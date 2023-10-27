import React, { useState, useEffect } from "react";
import axiosinstance from "../../Helpers/InstanceAxios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ViewManager.css";
import { toast } from "react-toastify";
let ViewAcademyEachManager = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  // console.log(id);
  let token = localStorage.getItem("token");
  let [user, setUser] = useState({
    userName: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
    gender: "",
    role: "",
    id: "",
  });
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosinstance.get(`/academymanagers/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      setUser(data.data);
    };
    fetchData();
  }, []);

  let handleDelete = (x) => {
    axiosinstance.delete(`/academymanagers/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    alert("DELETED");
    // toast.success("SUCCESSFULLY SUBMITTED", { position: "top-center", style:{backgroundColor:"black",color:"white"} });
    window.location.assign("/adminDashBoard/ViewAcademyManager");
  };
  return (
    <div id="viewmanager">
      <h1 id="viewheading">EACH ACADEMY MANAGER DETIALS</h1>
      <div id="eachcard">
        <h3>NAME : {user.userName}</h3>
        <h3>DISIGNATION : {user.role}</h3>
        <h3>DOB : {user.dob}</h3>
        <h3>PHONE : {user.phone}</h3>
        <h3>EMAIL : {user.email}</h3>
        <h3>GENDER : {user.gender}</h3>
        <div id="eachbtn">
          <button className="Eachbtn"><Link id="eachupdate" to={`/adminDashBoard/ViewAcademyManager/UpdateAcademyManager/${user.id}`}>UPDATE</Link></button>
          <button className="Eachbtn"><Link id="eachadd" to={`/adminDashBoard/ViewAcademyManager/AddAcademyName/${user.id}`}>ADD ACADEMY</Link></button>
          <button className="Eachbtn" onClick={() => {handleDelete(user.id)}}><Link id="eachdelete">DELETE</Link></button>
        </div>
      </div>
    </div>
  );
};
export default ViewAcademyEachManager;

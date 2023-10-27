import React, { useState, useEffect } from "react";
import "./AcademyManagerRegister.css";
import { useNavigate, useParams } from "react-router-dom";
import axiosinstance from "../../Helpers/InstanceAxios";
import { toast } from "react-toastify";
let UpdateAcademyManager = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let token = localStorage.getItem("token");
  let [data, setData] = useState({
    userName: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
    gender: ""
  });
  let { userName, email, password, dob, phone, gender } = data;
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosinstance.get(`/academymanagers/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      setData(data.data);
    };
    fetchData();
  }, []);
  let handleUpdate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let handleUpdateSubmit = async (e) => {
    e.preventDefault();
    let payload = { userName, email, password, dob, gender, phone,id };
    console.log(payload);
    await axiosinstance.put("/academymanagers/update",payload,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("SUCCESSFULLY UPDATED", {position: "top-center", style: { backgroundColor: "black", color: "white" }});
    navigate("/adminDashBoard/ViewAcademyManager");
  };
  return (
    <div id="Academybody">
      <form action="" id="Academytable" onSubmit={handleUpdateSubmit}>
        <div id="body1">
          <div id="body2">
            <h2 id="academyreg">UPDATE FORM FOR ACADEMY MANAGER</h2>
            <label htmlFor="">Username</label>
            <input type="text" name="userName" value={userName} required onChange={handleUpdate}/>
            <div id="a"></div>

            <label htmlFor="">Email</label>
            <input type="text" required value={email} name="email" onChange={handleUpdate}/>
            <div id="b"></div>

            <label htmlFor="">Password</label>
            <input type="text" value={password} name="password" required onChange={handleUpdate}/>
            <div id="c"></div>

            <p id="gen">Gender</p>
            <div id="gender">
              <label htmlFor="">Male</label>
              <input type="radio" name="gender" id="male" value="male" onChange={handleUpdate}/>
              <label htmlFor="">Female</label>
              <input type="radio" name="gender" id="female" value="female" onChange={handleUpdate} />
            </div>
            <div id="f"></div>

            <label htmlFor="">Dob</label>
            <input type="date" required value={dob} name="dob" onChange={handleUpdate}/>
            <div id="d"></div>

            <label htmlFor="">Phone</label>
            <input type="number" maxLength={10} value={phone} name="phone" onChange={handleUpdate}/>
            <div id="e"></div>

            <button id="bttn">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UpdateAcademyManager;

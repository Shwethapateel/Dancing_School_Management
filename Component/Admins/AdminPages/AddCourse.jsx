import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosinstance from "../../Helpers/InstanceAxios";
import { toast } from "react-toastify";
import "./AddCourse.css"
let AddCourse = () =>{
    let {id} = useParams()
    // console.log(id);
    let navigate = useNavigate()
    let token = localStorage.getItem('token')
    let [course, setCourse] = useState({
        courseDurationInMonths : '',
        fee : '',
        type : '',
        image : '',
        name : ''
    })
    let {courseDurationInMonths, fee, image, name, type} = course;
    let handleUpdate = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setCourse({...course, [name] : value})
    }
    let handleCourseSubmit = async (e) =>{
        e.preventDefault()
        let payload = {courseDurationInMonths,name, fee, type}
        console.log(payload);
        await axiosinstance.post(`/dancecourses/save?branchid=${id}`,payload,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        });
        toast.success("UPDATED SUCCESSFULLY", {position: "top-center", style: { backgroundColor: "black", color: "white" }});
        navigate("/adminDashBoard/ViewCourse");
    }
    return(
        <div id="AcademyRegister">
      <form action="" id="CourseRegistertable" onSubmit={handleCourseSubmit}>
        <div id="Registerbody1">
          <div id="Registerbody2">
            <h2 id="academyreg">ADD COURSE</h2>
            <label htmlFor="">Course Duration in Months</label>
            <input type="integer" placeholder="Enter Course Duration in Month's" name="courseDurationInMonths" value={courseDurationInMonths} required onChange={handleUpdate}/>
            <div id="a"></div>

            <label htmlFor="">Fee</label>
            <input type="number" placeholder="Enter Fee" value={fee} name="fee" onChange={handleUpdate}/>
            <div id="b"></div>

            <label htmlFor="">Dance Form</label>
            <input type="text" placeholder="Enter Dance Form" value={name} name="name" onChange={handleUpdate}/>
            <div id="b"></div>

            <label htmlFor="">Type</label>
            <input type="text" placeholder="Enter Dance Type" value={type} name="type" onChange={handleUpdate}/>
            <div id="c"></div>

            <label htmlFor="">Image</label>
            <input type="text" placeholder="Add Image" value={image} name="image" onChange={handleUpdate}/>
            <div id="c"></div>

            <button id="bttn">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
    )
}
export default AddCourse;
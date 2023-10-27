import React, { useEffect, useState } from "react";
import axiosinstance from "../../Helpers/InstanceAxios";
import { Link } from "react-router-dom";
import "./ViewCourse.css"
import { toast } from "react-toastify";
let ViewCourse = () =>{
    let [course , setCourse] = useState([])
    let token = localStorage.getItem('token')
    useEffect(()=>{
        let fetchData = async ()=>{
            let {data} = await axiosinstance.get('/dancecourses/getall',{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            console.log(data.data);
            setCourse(data.data)
        }
        fetchData()
    },[])
    let handleCourseDelete = (id) =>{
        axiosinstance.delete(`/dancecourses/delete/${id}`, {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        toast.success("SUCCESSFULLY SUBMITTED", { position: "top-center", style:{backgroundColor:"black",color:"white"} });
        window.location.assign("/adminDashBoard/ViewCourse");
    }
    return(
        <div id="viewCourse">
            <h1 id="viewCourseHead">DANCE COURSE DETAILS</h1>
            <div id="viewCourseBlock">
                {course.map((x,i)=>{
                    return(
                        <div key={i} id="viewCourseCard">
                            <h3>DANCE TYPE : {x.type}</h3>
                            <h3>COURSE DURATION IN MONTHS : {x.courseDurationInMonths}</h3>
                            <h3>FEE : {x.fee}</h3>
                            <div id="viewCoursebtn">
                                <button className="courseBtn"><Link to={`/adminDashBoard/ViewCourse/UpdateCourse/${x.id}`} className="courseLink">UPDATE</Link></button>
                                <button className="courseBtn" onClick={()=>{handleCourseDelete(x.id)}}><Link className="courseLink">DELETE</Link></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ViewCourse;
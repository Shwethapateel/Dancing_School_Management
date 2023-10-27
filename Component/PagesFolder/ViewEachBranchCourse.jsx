import React, { useEffect, useState } from "react";
import axiosinstance from "../Helpers/InstanceAxios";
import { useParams } from "react-router-dom";
import "./ViewBranchCourse.css"
let VieweachBranchCourse = () =>{
    let [course, setCourse] = useState([])
    let token = localStorage.getItem('token')
    let {id} = useParams()
    // console.log(id);
    useEffect(()=>{
        let fetchData = async () =>{
            let {data} = await axiosinstance.get(`/dancecourses/getbybranchid/${id}`,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            console.log(data.data);
            setCourse(data.data)
        }
        fetchData()
    },[])
    return(
        <div id="BranchTableBody">
            <div id="BranchTableBody1">
                <h1 id="BranchTableHead">AVAILABLE COURSE'S</h1>
            <div>
                <table id="BranchTable" border={2} cellPadding={0} cellSpacing={0} style={{borderCollapse:'collapse'}}>
                    <tr>
                        <th id="head1">DANCE FORM</th>
                        <th id="head2">COURSE DURATION IN MONTH'S</th>
                        <th id="head3">FEE'S</th>
                    </tr>
                    {course.map((x,i)=>{
                        return(
                            <tr key={i} id="data">
                                <td>{x.type}</td>
                                <td>{x.courseDurationInMonths}</td>
                                <td>{x.fee}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            </div>
        </div>
    )
}
export default VieweachBranchCourse;
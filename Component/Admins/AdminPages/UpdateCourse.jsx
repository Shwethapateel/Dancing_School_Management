import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosinstance from "../../Helpers/InstanceAxios";
import { toast } from "react-toastify";
let UpdateCourse = () => {
  let { id } = useParams();
  // console.log(id);
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  let [course, setCourse] = useState({
    courseDurationInMonths: "",
    fee: "",
    type: "",
    name: "",
    image: "",
  });
  let { courseDurationInMonths, fee, name, image, type } = course;
  let handleUpdate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCourse({ ...course, [name]: value });
  };
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosinstance.get(`/dancecourses/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(data.data);
      setCourse(data.data);
    };
    fetchData();
  }, []);
  let handleCourseUpdate = async (e) => {
    e.preventDefault();
    let payload = { courseDurationInMonths, fee, type, name, image, id };
    console.log(payload);
    await axiosinstance.put(`/dancecourses/update/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("UPDATED SUCCESSFULLY", {position: "top-center",style: { backgroundColor: "black", color: "white" }});
    navigate("/adminDashBoard/ViewCourse");
  };
  return (
    <div id="AcademyRegister">
      <form action="" id="CourseRegistertable" onSubmit={handleCourseUpdate}>
        <div id="Registerbody1">
          <div id="Registerbody2">
            <h2 id="academyreg">UPDATE COURSE</h2>
            <label htmlFor="">Course Duration in Months</label>
            <input type="integer" name="courseDurationInMonths" value={courseDurationInMonths} onChange={handleUpdate}/>
            <div id="a"></div>

            <label htmlFor="">Fee</label>
            <input type="number" value={fee} name="fee" onChange={handleUpdate} />
            <div id="b"></div>

            <label htmlFor="">Dance Form</label>
            <input type="text" value={type} name="type" onChange={handleUpdate}/>
            <div id="c"></div>

            <button id="bttn">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UpdateCourse;

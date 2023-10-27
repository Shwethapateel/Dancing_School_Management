import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./app.css"
import Home from "./Component/PagesFolder/Home";
import Register from "./Component/Authentication/Register";
import Navbar from "./Component/NavBar/Navbar";
import Login from "./Component/Authentication/Login";
import ProtectedRoute from "./Component/ServiceRoutes/ProtectedRoute";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewHome from "./Component/PagesFolder/NewHome";
import About from "./Component/PagesFolder/About";
import Gallery from "./Component/PagesFolder/Gallery";
import Footer from "./Component/Footer/Footer";
import AdminDashboard from "./Component/Admins/AdminDashBoard/AdminDashboard";
import Adminregister from "./Component/Admins/AdminRegister/Adminregister";
import AcademyManagerRegister from "./Component/Admins/AdminPages/AcademyManagerRegister";
import ViewAcademyManager from "./Component/Admins/AdminPages/ViewAcademyManager";
import ViewAcademy from "./Component/Admins/AdminPages/ViewAcademy";
import ViewBranch from "./Component/Admins/AdminPages/ViewBranch";
import ViewCourse from "./Component/Admins/AdminPages/ViewCourse";
import ViewAcademyEachManager from "./Component/Admins/AdminPages/ViewAcademyEachManager";
import UpdateAcademyManager from "./Component/Admins/AdminPages/UpdateAcademyManager";
import AcademyRegister from "./Component/Admins/AdminPages/AcademyRegister";
import UpdateAcademy from "./Component/Admins/AdminPages/UpdateAcademy";
import AddBranch from "./Component/Admins/AdminPages/AddBranch";
import UpdateBranch from "./Component/Admins/AdminPages/UpdateBranch";
import AddCourse from "./Component/Admins/AdminPages/AddCourse";
import UpdateCourse from "./Component/Admins/AdminPages/UpdateCourse";
import VieweachBranchCourse from "./Component/PagesFolder/ViewEachBranchCourse";
let App=()=>{
  return(
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/" element={<ProtectedRoute><NewHome/></ProtectedRoute>}/>
        <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}/>
        <Route path="/gallery" element={<ProtectedRoute><Gallery/></ProtectedRoute>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/adminRegister" element={<Adminregister/>}/>
        <Route path="/gallery/ViewEachBranchCourse/:id" element={<VieweachBranchCourse/>}/>
        
        <Route path="/adminDashBoard" element={<AdminDashboard/>}>
          <Route path="/adminDashBoard/AcademyManagerRegister" element={<AcademyManagerRegister/>}/>
          <Route path="/adminDashBoard/ViewAcademyManager" element={<ViewAcademyManager/>}/>
          <Route path="/adminDashBoard/ViewAcademy" element={<ViewAcademy/>}/>
          <Route path="/adminDashBoard/ViewBranch" element={<ViewBranch/>}/>
          <Route path="/adminDashBoard/ViewCourse" element={<ViewCourse/>}/>
          <Route path="/adminDashBoard/ViewAcademyManager/ViewAcademyEachManager/:id" element={<ViewAcademyEachManager/>}/>
          <Route path="/adminDashBoard/ViewAcademyManager/UpdateAcademyManager/:id" element={<UpdateAcademyManager/>}/>
          <Route path="/adminDashBoard/ViewAcademyManager/AddAcademyName/:id" element={<AcademyRegister/>}/>
          <Route path="/adminDashBoard/ViewAcademy/UpdateAcademy/:id" element={<UpdateAcademy/>}/>
          <Route path="/adminDashBoard/ViewAcademy/AddBranch/:id" element={<AddBranch/>}/>
          <Route path="/adminDashBoard/ViewBranch/UpdateBranch/:id" element={<UpdateBranch/>}/>
          <Route path="/adminDashBoard/ViewBranch/AddCourse/:id" element={<AddCourse/>}/>
          <Route path="/adminDashBoard/ViewCourse/UpdateCourse/:id" element={<UpdateCourse/>}/>
        </Route>
        
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;

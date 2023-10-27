import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <>{children}</>;
  } else {
    return(
      <>
      {/* {alert("Please Login to View Page")} */}
      {toast.error("Please Login to View Page", {position:"top-center" , style:{backgroundColor:"black",color:"white"}})}
      <Navigate to="/login" />
    </>
    )
  }
}
export default ProtectedRoute;

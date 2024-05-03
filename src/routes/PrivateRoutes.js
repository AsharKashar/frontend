import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {

    const token = localStorage.getItem("authToken");
    if(!token) {
        return <Navigate to={"/login"} replace />;
    } 
    else {
        return children;
    }
}

export default PrivateRoute;

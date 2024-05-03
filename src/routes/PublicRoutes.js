import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function PublicRoute({ children }) {
    const navigate = useNavigate();
    const [isAuthenticated , setIsAuthenticated] = useState(false)
    const location = window.location.pathname;
    const token = localStorage.getItem("authToken");
    useEffect(() => {

        if (token && location == "/login") {
            navigate("/profile");
        }

        if (token) {
            navigate("/profile");
        } else {
            return children;
        }

    }, [isAuthenticated, navigate]);
   
}

export default PublicRoute;

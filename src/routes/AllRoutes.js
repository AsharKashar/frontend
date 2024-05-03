import Home from "../pages/Home";
import Login from "../auth/Login";
import About from "../pages/About";
import Profile from "../pages/Profile";
export const AllRoutes = [
    
    { 
        path: "/",
        name: "Home",
        component: <Home />,
        isPublic: true,
    }, 
    
    {
        path: "/login",
        name: "Login",
        component: <Login />,
        isPublic: true,
    },
    { 
        path: "/about",
        name: "About",
        component: <About/>,
        isPublic: false,
    }, 
    { 
        path: "/profile",
        name: "Profile",
        component: <Profile/>,
        isPublic: false,
    }, 
] 
import { Navigate, useLocation } from "react-router-dom";
import { ReactElement, useState } from "react";
interface PrivateRouterProps {
Component: React.ComponentType, 
role: string
}

// async function checkToken(token: string | null) {
//     const response = await fetch('http://localhost:5000/auth/checkTokenValidate?token=' + token, {
//      }) 
     
//     const data = await response.json();
//     //alert(JSON.stringify(data));
//     if (response.ok)
//     {
//         return true
//     }
//     else{
//         return false
//     }
//   }

export const PrivateRoute = ({
    Component, role
}: PrivateRouterProps): ReactElement => {
    const location = useLocation();
    const isAuthenticated = !!localStorage.getItem("token");
    //const isTokenValid = awaitcheckToken(localStorage.getItem("token"))
    const IsRoleValid = localStorage.getItem("roleId") == role;
    // const [IsRoleValid, setIsRoleValid]= useState(false);
    // if (localStorage.getItem("roleId") == role)
    //     {
    //         setIsRoleValid(true);
    //     }
    // else 
    // {
    //     setIsRoleValid(false);
    // }
    
return  isAuthenticated && IsRoleValid ? (
    <Component/>
    ) : (
        <Navigate to="/" state={{from: location}}/> );
}
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const {user, loading}= useContext(AuthContext)



  const location = useLocation()

if(loading){
return <progress className="progress w-56" value="70" max="100"></progress>
}

  if(user){
    return children; 
  }
  return (
    <Navigate state={{from: location }} replace to='/login'>
      
    </Navigate>
  );
};

export default PrivateRoute;
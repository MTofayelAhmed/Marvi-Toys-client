import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const PrivateRoute = ({children}) => {
  const {user, loading}= useContext(AuthContext)
  const location = useLocation()
  
  if(loading){
    return <progress className="progress w-56" value="70" max="100"></progress>
    }




if(!user){
  Swal.fire({
    title: 'Please login First',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}

  



  if(user) {
    return children; 
  }
  return (
    <Navigate state={{from: location }} replace to='/login'>
      
    </Navigate>
  );
};

export default PrivateRoute;
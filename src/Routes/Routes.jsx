import {
  createBrowserRouter
 
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {path: 'signUp',
      element: <Register></Register>

      },
      {path:'addToy',
      element:<AddToy></AddToy>

      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>
        
      }, 
      {
        path: '/details/:id',
        element:<PrivateRoute> <ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
      }
    ]
  },
]);


export default router;
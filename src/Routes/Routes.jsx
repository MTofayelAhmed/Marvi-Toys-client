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
import Mytoys from "../Pages/MyToys/Mytoys";
import Update from "../Pages/UpdateToys/Update";
import Error from "../Pages/ErrorPage/Error";
import Blog from "../Pages/Blog/Blog";

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
        loader: ({params})=> fetch(`https://assignment-11-server-two-puce.vercel.app/toys/${params.id}`)
      },
      {
        path: '/myToys',
        element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>

      },
      {path: '/update/:id',
      element: <Update></Update>,
      loader: ({params})=> fetch(`https://assignment-11-server-two-puce.vercel.app/toys/${params.id}`)

      },
      {
        path:'blog',
        element: <Blog></Blog>
      }
      
       
      
    ]


  },
  {
    path: '*',
    element: <Error></Error>
  }

]);


export default router;
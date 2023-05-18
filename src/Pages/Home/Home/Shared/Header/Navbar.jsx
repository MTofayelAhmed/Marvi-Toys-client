import { Link } from "react-router-dom";
import logo from "../../../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);



  const handleLogOut = ()=>{
    logOut()
    .then(result=>{
      const signOut = result.user;
      console.log("signOut",signOut)

    })
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <div className="navbar text-white bg-red-800 h-[100px] rounded-xl font-bold mb-16 ">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  text-white bg-red-800 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link> All Toys</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <button className="btn bg-red-900 mr-10 ">
          <img src={logo} alt="" />
        </button>

        <button className=" text-5xl font-bold font-mono ml-20  ">
          MARVITOYS
        </button>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal px-2 ">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li tabIndex={0}>
            <Link to='/allToys'> All Toys</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    <div className="navbar-end">

        {/* for Dynamic part */}
      { user? <ul className="menu menu-horizontal px-2 ">
         
            <li>
            <Link to="/myToy">My Toys</Link>
          </li>

          <li tabIndex={0}>
            <Link to="addToy">Add a Toy</Link>
          </li>

          <li>
            <div className="avatar">
              <div className="w-15 rounded-full">
                <img src={logo} />
              </div>
            </div>
          </li>
          
          <li onClick={ handleLogOut}>
            <Link>LogOut</Link>
          </li>

          
        </ul>: <ul  className="menu menu-horizontal px-2 ">
        <li><Link to='/login' >Login</Link></li>
        </ul> 
        }
      </div>  
    </div>
  );
};

export default Navbar;

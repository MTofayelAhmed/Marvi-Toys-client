import { Link } from "react-router-dom";
import logo from "../../../../../assets/logo-company.png";
import { useContext } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import profile from "../../../../../assets/profilePic.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
console.log("user", user)


  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const signOut = result.user;
        console.log("signOut", signOut);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="navbar font-bold  bg-gray-800 text-white ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800  rounded-box w-52"
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

        <img className="w-15 rounded-full" src={logo} alt="" />

        <button className=" text-5xl font-bold font-mono ml-5  ">
          MARVITOYS
        </button>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal px-2 ">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li tabIndex={0}>
            <Link to="/allToys"> All Toys</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* for Dynamic part */}
        {user ? (
          <ul className="menu menu-horizontal px-2 ">
            <li>
              <Link to="/myToys">My Toys</Link>
            </li>

            <li tabIndex={0}>
              <Link to="addToy">Add a Toy</Link>
            </li>

            <li>
              <div className="tooltip" data-tip={user?.displayName}>
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={profile} />
                  </div>
                </div>
              </div>
            </li>

            <li onClick={handleLogOut}>
              <Link>LogOut</Link>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal px-2 ">
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;

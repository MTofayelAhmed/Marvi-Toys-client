import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Home/Shared/Header/Navbar";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";


const Main = () => {
  return (
    <div className="mx-10">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const Main = () => {
    return (
      <div>
        <div className="container mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
          <Footer></Footer>
      </div>
    );
};

export default Main;
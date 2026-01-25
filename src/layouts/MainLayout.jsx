import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";

const MainLayout = () => {
  return (
    <div className="container max-w-screen-xl mx-auto overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

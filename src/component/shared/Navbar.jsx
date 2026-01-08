import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("log out success");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <Link className="flex items-center justify-center" to={"/"}>
          <img className="w-auto h-10" src={logo} alt="servizo logo" />
          <span className="font-bold">Servizo</span>
        </Link>
        <div className="flex gap-2 items-center"></div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>All Services</NavLink>
          </li>

          <li>
            <NavLink to={"/login"}>Log in</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </ul>

        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full" title="">
              <img
                referrerPolicy="no-referrer"
                alt="User Profile Photo"
                src=""
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <div className="justify-between">Add Job</div>
            </li>
            <li>
              <div>My Posted Jobs</div>
            </li>
            <li>
              <div>My Bids</div>
            </li>
            <li>
              <div>Bid Requests</div>
            </li>
            <li className="mt-2">
              <button
                onClick={handleLogOut}
                className="bg-gray-200 block text-center"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

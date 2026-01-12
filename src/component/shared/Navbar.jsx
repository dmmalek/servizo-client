import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { logOut, user } = useAuth();
  console.log(user?.photoURL);
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
            <NavLink to={"/services"}>All Services</NavLink>
          </li>
        </ul>
        {user ? (
          <div className="flex justify-between items-center">
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost ">
                <div className="text-center">
                  <ul>
                    <li>
                      <NavLink>DashBoard</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/add-service"} className="justify-between">
                    Add Service
                  </Link>
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
              </ul>
            </div>
            <div
              className="flex justify-between items-center gap-2 flex-row-reverse"
              title={user?.displayName}
            >
              <ul>
                <li className="">
                  <button
                    onClick={handleLogOut}
                    className="bg-gray-200 block text-center btn"
                  >
                    Logout
                  </button>
                </li>
              </ul>
              <img
                className="rounded-full w-10"
                referrerPolicy="no-referrer"
                alt={user?.displayName}
                src={user?.photoURL}
              />
            </div>
          </div>
        ) : (
          <ul>
            <li>
              <NavLink to={"/login"}>Log in</NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;

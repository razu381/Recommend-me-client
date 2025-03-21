import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

function Header() {
  let { user, LogOut } = useContext(AuthContext);
  let unsignedMenu = (
    <>
      <li>
        <Link to="/" className="text-white focus:text-white">
          Home
        </Link>
      </li>
      <li>
        <Link to="/queries" className="text-white focus:text-white">
          Queries
        </Link>
      </li>
    </>
  );
  let signedMenu = (
    <>
      <li>
        <Link to="/" className="text-white focus:text-white">
          Home
        </Link>
      </li>
      <li>
        <Link to="/queries" className="text-white focus:text-white">
          Queries
        </Link>
      </li>

      <li>
        <Link
          to="/recommendations-for-me"
          className="text-white focus:text-white"
        >
          Recommendations For Me
        </Link>
      </li>

      <li>
        <Link to="/my-queries" className="text-white focus:text-white">
          My Queries
        </Link>
      </li>

      <li>
        <Link to="/my-recommendations" className="text-white focus:text-white">
          My recommendations
        </Link>
      </li>
    </>
  );

  function handleLogOut() {
    LogOut()
      .then(() => {
        toast.success("Logged out successfully");
        axios
          .post(
            "https://recommend-me-server.vercel.app/deleteCookieOnLogOut",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="navbar bg-dark-bg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="white"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-white bg-dark-bg space-y-1 py-5"
          >
            {user ? signedMenu : unsignedMenu}
          </ul>
        </div>
        <a className="btn text-california-50 btn-ghost text-xl lg:text-2xl italic">
          Recommend Me
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {user ? signedMenu : unsignedMenu}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 justify-center items-center">
            <img
              src={user?.photoURL}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <Link
              onClick={handleLogOut}
              className="btn bg-california-600 hover:bg-california-800 text-white border-none"
            >
              LogOut
            </Link>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-california-600 hover:bg-california-800 border-none text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;

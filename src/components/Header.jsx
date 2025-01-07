import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

function Header() {
  let { user, LogOut } = useContext(AuthContext);
  console.log(user?.email);
  let unsignedMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/queries">Queries</Link>
      </li>
    </>
  );
  let signedMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/queries">Queries</Link>
      </li>

      <li>
        <Link to="/recommendations-for-me">Recommendations For Me</Link>
      </li>

      <li>
        <Link to="/my-queries">My Queries</Link>
      </li>

      <li>
        <Link to="/my-recommendations">My recommendations</Link>
      </li>
    </>
  );

  function handleLogOut() {
    LogOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {user ? signedMenu : unsignedMenu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl lg:text-2xl italic">Recommend Me</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
              className="btn bg-california-500 hover:bg-california-800"
            >
              LogOut
            </Link>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-california-500 hover:bg-california-800"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;

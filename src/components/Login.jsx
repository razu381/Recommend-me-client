import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../Auth/AuthProvider";

function Login() {
  let { setUser, signIn, loginWithGoogle } = useContext(AuthContext);
  let location = useLocation().state;
  let navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    let email = e.target.email.value;
    let pass = e.target.pass.value;

    signIn(email, pass)
      .then((res) => {
        setUser(res.user);
        toast.success("New user logged in with email " + res.user.email);

        if (location) {
          navigate(location);
        } else {
          navigate("/");
        }
      })
      .catch((err) => toast.error(err.message));
  }
  return (
    <div>
      <Helmet>
        <title>Login - EquiSports</title>
      </Helmet>
      <div className="hero bg-success-dark bg-california-950 py-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-white bg-opacity-5 w-full max-w-md shrink-0 shadow-2xl">
            <h2 className="text-center text-white text-2xl font-bold pt-5">
              Sucess Blueprint
            </h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>

                <input
                  name="pass"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-california-500 border-none text-white hover:bg-california-500"
                >
                  Login
                </button>

                {/* login with google */}
                <button
                  type="button"
                  onClick={loginWithGoogle}
                  className="btn bg-transparent border border-[#F4B400]  text-[#F4B400] hover:bg-success-dark  mt-5"
                >
                  Login with Google
                </button>
                {/* New to our site text */}
                <p className="text-white py-4 text-xs">
                  New to the website?
                  <Link to="/signup" className="text-california-500">
                    Create Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function Root() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;

import React from "react";
import { FaThumbsUp } from "react-icons/fa";

function Divider() {
  return (
    <span className="flex justify-center items-center pt-2 pb-10 mx-[20%] md:mx-[35%]">
      <span className="h-px flex-1 bg-california-800"></span>
      <span className="shrink-0 px-3">
        <FaThumbsUp size={20} className="-mt-1" color="#2a2c85" />
      </span>
      <span className="h-px flex-1 bg-california-800"></span>
    </span>
  );
}

export default Divider;

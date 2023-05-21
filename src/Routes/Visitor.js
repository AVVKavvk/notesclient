import React from "react";
import { Link } from "react-router-dom";

function Visitor() {
  return (
    <div class=" flex flex-col px-3 justify-center items-start mx-auto text-justify  sm:w-[600px] h-[60vh]">
      <h1 class="text-2xl">
        {" "}
        Want to know, how many users have logged in, then login again
      </h1>
      <h1 class="m-1 p-2 mx-auto mt-5 ">
                
                <Link
                  to="/auth/login"
                  class="bg-blue-700 p-2 m-2 px-5 text-lg rounded-md text-white mb-3 hover:bg-blue-500 transition-all duration-200 "
                >
                  Login
                </Link>
              </h1>
    </div>
  );
}

export default Visitor;

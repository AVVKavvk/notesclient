import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Key_Access_Token, getItem } from "../utils/localStorage";

function Labs() {
  // const a = getItem(Key_Access_Token);
  const a = 10;
  const navigate = useNavigate();
  return (
    <>
      {a ? (
        <div class="grid grid-cols-6 mt-6 justify-center items-center mx-auto max-w-[1200px] gap-4 p-4 ">
          <Link to="/user/labs/sem1">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-blue-200">
              {" "}
              <span className="bg-blue-300 p-3 py-1 rounded-md">
                <span className="bg-blue-400 p-1 rounded-md">Semester 1</span>
              </span>
            </div>
          </Link>
          <Link to="/user/labs/sem2">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-blue-200">
              {" "}
              <span className="bg-blue-300 p-3 py-1 rounded-md">
                <span className="bg-blue-400 p-1 rounded-md">Semester 2</span>
              </span>
            </div>
          </Link>
          <Link to="/user/labs/sem3">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-blue-200">
              {" "}
              <span className="bg-blue-300 p-3 py-1 rounded-md">
                <span className="bg-blue-400 p-1 rounded-md">Semester 3</span>
              </span>
            </div>
          </Link>
          <Link to="/user/labs/sem4">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-blue-200">
              {" "}
              <span className="bg-blue-300 p-3 py-1 rounded-md">
                <span className="bg-blue-400 p-1 rounded-md">Semester 4</span>
              </span>
            </div>
          </Link>
          <Link to="/user/labs/sem5">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-blue-200">
              {" "}
              <span className="bg-blue-300 p-3 py-1 rounded-md">
                <span className="bg-blue-400 p-1 rounded-md">Semester 5</span>
              </span>
            </div>
          </Link>
          <Link to="/user/labs/sem6">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-blue-200">
              {" "}
              <span className="bg-blue-300 p-3 py-1 rounded-md">
                <span className="bg-blue-400 p-1 rounded-md">Semester 6</span>
              </span>
            </div>
          </Link>

          <Outlet />
        </div>
      ) : (
        navigate("/auth/login")
      )}
    </>
  );
}

export default Labs;

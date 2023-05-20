import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Key_Access_Token, getItem } from "../utils/localStorage";

function Notes() {
  // const a = getItem(Key_Access_Token);
  const a = 10;
  const navigate = useNavigate();
  return (
    <>
      {a ? (
        <div class="grid grid-cols-1 justify-center items-center mx-auto ">
        <div class="grid  grid-cols-2 sm:grid-cols-3  lg:grid-cols-6 mt-6 justify-center items-center mx-auto space-x-4 sm:space-x-10 lg:mt-2 sm:space-y-8  max-w-[1200px]  space-y-6 ">
          <Link to="/user/notes/sem1">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center mt-5 gap-4 ml-4 sm:ml-10  sm:mt-7 lg:mt-9 justify-center flex bg-red-200">
              <span className="bg-red-300 p-3 py-1 rounded-md">
                <span className="bg-red-400 p-1 rounded-md">Semester 1</span>
              </span>
            </div>
          </Link>
          <Link to="/user/notes/sem2">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
              <span className="bg-red-300 p-3 py-1 rounded-md">
                <span className="bg-red-400 p-1 rounded-md">Semester 2</span>
              </span>
            </div>
          </Link>
          <Link to="/user/notes/sem3">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
              <span className="bg-red-300 p-3 py-1 rounded-md">
                <span className="bg-red-400 p-1 rounded-md">Semester 3</span>
              </span>
            </div>
          </Link>
          <Link to="/user/notes/sem4">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
              <span className="bg-red-300 p-3 py-1 rounded-md">
                <span className="bg-red-400 p-1 rounded-md">Semester 4</span>
              </span>
            </div>
          </Link>
          <Link to="/user/notes/sem5">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
              <span className="bg-red-300 p-3 py-1 rounded-md">
                <span className="bg-red-400 p-1 rounded-md">Semester 5</span>
              </span>
            </div>
          </Link>
          <Link to="/user/notes/sem6">
            <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
              <span className="bg-red-300 p-3 py-1 rounded-md">
                <span className="bg-red-400 p-1 rounded-md">Semester 6</span>
              </span>
            </div>
          </Link>

        </div>
          <Outlet />
        </div>
      ) : (
        navigate("/auth/login")
      )}
    </>
  );
}

export default Notes;

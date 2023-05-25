import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import menu from "./image/menu.svg";
import { Dropdown } from "antd";
import { Key_Access_Token, count_User, getItem } from "./utils/localStorage";
import { useSelector } from "react-redux";
import {AiOutlineLogout} from "react-icons/ai";

function Navbar() {
  const a = getItem(Key_Access_Token);
  var b = useSelector((state) => state.appConfigReducer.count);
  var count = 1;
  if (b === 0) {
    count = getItem(count_User);
  } else {
    count = b;
  }

  useEffect(() => {
    count = getItem(count_User);
  }, [count]);

  const items = [
    {
      key: "1",
      label: (
        <Link to="/" rel="noopener noreferrer">
          Home
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/user/notes" rel="noopener noreferrer">
          Notes
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="/user/labs" rel="noopener noreferrer">
          Labs
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to="/user/paper" rel="noopener noreferrer">
          Paper
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link to="/user/creator" rel="noopener noreferrer">
          About Me
        </Link>
      ),
    },
  ];
  return (
    <div class="font-mullish w-full relative rounded-sm text-2xl p-6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
      {/* //TODO /simple */}
      <div class="sm:hidden flex justify-between items-center  ">
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          arrow={{
            pointAtCenter: true,
          }}
          style={{ height: "10px" }}
        >
          <button class="">
            {" "}
            <img src={menu} alt="" height="35px" width="35px" />{" "}
          </button>
        </Dropdown>
        <div>
          <ul class="flex sm:hidden justify-center items-center text-white gap-4 px-3">
            <>
              {a ? (
                <>
                <Link to="/auth/visitor" style={{ textDecoration: "none" }}>
                  <li class=" text-2xl flex justify-center items-center group ">
                    {" "}
                    Users {" "}
                    <span class="text-2xl ml-2 group-hover:scale-125 transition-all duration-300    ">
                      {count}{" "}
                    </span>
                  </li>
                </Link>
                <Link to="/user/logout" style={{ textDecoration: "none" }}>
                <li class=" text-2xl relative  p-1 group rounded-md px-2 transition-all duration-200 flex justify-center items-center group ">
                  {" "}
                  <AiOutlineLogout/>
                  
                </li>
              </Link>
                </>
              ) : (
                <>
                  <li class="   p-2 rounded-md transition-all duration-500">
                    <Link to="/auth/login" style={{ textDecoration: "none" }}>
                      Login
                    </Link>
                  </li>
                  <li class="   p-2 rounded-md transition-all duration-500">
                    <Link to="/auth/signup" style={{ textDecoration: "none" }}>
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </>
          </ul>
        </div>
      </div>
      {/* //TODO /sm */}
      <div class="flex lg:max-w-[1300px]  mx-auto  justify-between items-center px-10  text-white  rounded-lg">
        <ul className="nav_bar sm:flex justify-center  items-center gap-4 hidden   ">
          <li class="hover:underline hover:bg-indigo-600  p-2 rounded-md transition-all duration-500">
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>

          <li class="hover:underline  hover:bg-blue-600   p-2 rounded-md transition-all duration-500">
            <Link to="/user/notes" style={{ textDecoration: "none" }}>
              Notes
            </Link>
          </li>
          <li class="hover:underline hover:bg-sky-600   p-2 rounded-md transition-all duration-500">
            <Link to="/user/labs" style={{ textDecoration: "none" }}>
              Labs
            </Link>
          </li>
          <li class="hover:underline   hover:bg-sky-400 p-2 rounded-md transition-all duration-500">
            <Link to="/user/paper" style={{ textDecoration: "none" }}>
              Paper
            </Link>
          </li>

          <li class="hover:underline hover:bg-blue-500 p-2 rounded-md transition-all duration-500">
            <Link to="/user/creator" style={{ textDecoration: "none" }}>
            About_Me
            </Link>
          </li>
        </ul>

        <ul class="sm:flex hidden justify-center items-center gap-4 px-3">
          <>
            {a ? (
              <>
             
             
                  <Link to="/auth/visitor" style={{ textDecoration: "none" }}>
                    <li class=" text-2xl flex justify-center items-center group ">
                      {" "}
                      Users{" "}
                      <span class="text-2xl ml-2 group-hover:scale-125 transition-all duration-300    ">
                        {count}{" "}
                      </span>
                    </li>
                  </Link>
                  <Link to="/user/logout" style={{ textDecoration: "none" }}>
                <li class=" text-2xl relative group hover:bg-green-600 p-1 hover:underline rounded-md px-2 transition-all duration-200 flex justify-center items-center group ">
                  {" "}
                 <AiOutlineLogout/>
                  {/* <span class="text-4xl ml-4 group-hover:scale-125 transition-all duration-300    ">
                    {count}{" "}
                  </span> */}
                  <p class="absolute text-sm hidden group-hover:flex -top-5 ">Logout </p>
                </li>

              </Link>
              </>
            ) : (
              <>
                <li class="hover:underline hover:bg-green-600  p-2 rounded-md transition-all duration-500">
                  <Link to="/auth/login" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </li>
                <li class="hover:underline hover:bg-green-600   p-2 rounded-md transition-all duration-500">
                  <Link to="/auth/signup" style={{ textDecoration: "none" }}>
                    SignUp
                  </Link>
                </li>
              </>
            )}
          </>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

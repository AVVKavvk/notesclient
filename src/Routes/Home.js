import React from "react";
import imgsecctio1 from "../image/book1.svg";
import imgsecctio2 from "../image/book2.svg";
import imgsecctio3 from "../image/pencil.svg";
import imgsecctio4 from "../image/pencil1.svg";
import imgsecctio5 from "../image/books-notes-student-svgrepo-com.svg";
import imgsecctio6 from "../image/book-key-keyboard-svgrepo-com.svg";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

import { getItem } from "../utils/localStorage";
import { Key_Access_Token } from "../utils/localStorage";

import img1 from "../image/logo.svg";
import img2 from "../image/logo1.svg";
import img3 from "../image/logo2.svg";
import img4 from "../image/logo3.svg";
import img5 from "../image/logo4.svg";
import n1 from "../image/notes1.svg";
import n2 from "../image/notes2.svg";
import n3 from "../image/notes3.svg";
import n4 from "../image/notes4.svg";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";

function Home() {
  const count = useSelector((state) => state.appConfigReducer.count);
  // console.log(count);
  const dispatch = useDispatch();
  const a = getItem(Key_Access_Token);

  return (
    <>
      <div class="mt-6">
        <div className=" flex-col  lg:flex  hidden mx-auto sm:w-[400px] lg:w-[500px] mb-12  text-4xl justify-center text-blue-900    ">
          <h1 class="flex gap-3   ">
            <span class="underline">Welcome to </span>
            <h1 class="text-red-700 ">
              <Typewriter
                options={{
                  strings: ["VIPIN'S WEBSITE", "NOTES WEBSITE"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </h1>
        </div>
        <div className=" lg:grid mx-10 hidden grid-cols-2 overflow-hidden gap-2  relative h-[420px]">
          <div class="h-[400px] sm:w-[400px] w-[400px] overflow-hidden  ">
            <img
              src="https://cdn.thecodehelp.in/ggudduf7qmr7yvjwtcs1_cd7567153f.svg"
              alt=""
              class="h-auto absolute moverovers w-[500px] rounded-md"
            />
            <img
              src={imgsecctio1}
              alt=""
              class="w-[150px] absolute right-[15%]"
            />
            <img
              src={imgsecctio2}
              alt=""
              class="w-[150px] absolute left-[45%]"
            />
            <img
              src={imgsecctio5}
              alt=""
              class="w-[150px] absolute left-[45%] bottom-0"
            />
            <img
              src={imgsecctio6}
              alt=""
              class="w-[150px] absolute bottom-0 right-[15%]"
            />

            <img
              src={imgsecctio3}
              alt=""
              class="w-[150px]  right-[30%] absolute  "
            />
            <img
              src={imgsecctio4}
              alt=""
              class="w-[150px]  absolute bottom-[5%] right-[27.5%]  "
            />
          </div>
        </div>
        {/* //TODO sm wala part */}
        <div class="sm:grid lg:hidden hidden mt-10">
          <div className="flex flex-col mx-auto text-4xl justify-center text-blue-900    ">
            <h1 class="flex gap-3   ">
              <span class="underline">Welcome to </span>
              <h1 class="text-red-700 ">
                <Typewriter
                  options={{
                    strings: ["VIPIN'S WEBSITE", "NOTES WEBSITE"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </h1>
          </div>
          <div class="flex items-center justify-evenly gap-72 mt-10 relative h-[300px] ">
            <div class="space-y-8">
              <img src={img1} alt="" width="150px" height="150px" />
              <img src={img2} alt="" width="150px" height="150px" />
            </div>
            <div class="space-y-8">
              <img src={img3} alt="" width="150px" height="150px" />
              <img src={img4} alt="" width="150px" height="150px" />
            </div>
            <img
              src={img5}
              alt=""
              width="150px"
              height="150px"
              class=" absolute moveroverss"
            />
          </div>
        </div>
        {/* //TODO simple wala part */}
        <div class="grid sm:hidden mt-10">
          <div className="flex flex-col mx-auto  text-2xl justify-center text-blue-900    ">
            <h1 class="flex gap-3   ">
              <span class="underline"> Welcome to </span>
              <h1 class="text-red-700 ">
                <Typewriter
                  options={{
                    strings: ["VIPIN'S WEBSITE", "NOTES WEBSITE"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </h1>
          </div>

          <div class="flex items-center justify-evenly  gap-10 mt-10 relative h-[400px] ">
            <div class="space-y-12">
              <img src={n1} alt="" width="120px" height="120px" />
              <img src={n4} alt="" width="120px" height="120px" />
            </div>
            <div class="space-y-12">
              <img src={n3} alt="" width="120px" height="120px" />
              <img src={n2} alt="" width="120px" height="120px" />
            </div>
          </div>
        </div>

        <div class="p-3 lg:hidden justify-center items-center mt-16 max-w-[1200px] text-center mx-auto">
          <div class="flex justify-center  text-justify items-center  text-xl text-blue-900  ">
            <p class=" p-3">
              Hello, welcome to notes website of IIIT Pune. In this website you
              will be provided with notes and lab materials for all semesters,
              along with PYQ papers. The site will also provide the PPTs that
              are shared with the students. <br /> <br />
              Hope you find this website helpful.
            </p>
          </div>
        </div>
        <>
          {a ? (
            " "
          ) : (
            <div class="flex lg:hidden text-xl mx-4 justify-center items-center mt-10 sm:mx-auto flex-col rounded-md max-w-[500px]   border-2 m-5 border-blue-500">
              <h1 class="text-xl m-4 text-deepBlue">
                For Accessing this page please do following steps
              </h1>
              {a ? (
                ""
              ) : (
                <h1 class="m-1 p-2 ">
                  Already have account
                  <Link
                    to="/auth/login"
                    class="bg-blue-700 p-2 m-2 px-2 text-lg rounded-md text-white mb-3 hover:bg-blue-500 transition-all duration-200 "
                  >
                    Login
                  </Link>
                </h1>
              )}
              <h1 class="m-1 p-2 ">
                Do not have account{" "}
                <Link
                  to="/auth/signup"
                  class="bg-blue-700 p-2 m-1 px-2 text-lg rounded-md text-white mb-3 hover:bg-blue-500 transition-all duration-200 "
                >
                  SignUp
                </Link>
              </h1>
            </div>
          )}
        </>
      </div>

      <div class="lg:flex hidden mb-12  relative  ">
        <div class="p-3  mt-10 max-w-[500px] text-center ml-12">
          <div class="flex justify-center   text-justify items-center  text-xl text-blue-900  ">
            <p>
              Hello, welcome to notes website of IIIT Pune. In this website you
              will be provided with notes and lab materials for all semesters,
              along with PYQ papers. The site will also provide the PPTs that
              are shared with the students. <br /> <br />
              Hope you find this website helpful.
            </p>
          </div>
        </div>

        <>
          {a ? (
            <div class="relative  p-44">
              <div class="anni bottom-2 z-10 text-center  text-2xl justify-end items-center flex">
                {" "}
              </div>
              <div class="mt-28 z-20  absolute w-[400px] text-3xl text-[#afdaf9] top-5 left-[170px]">
                {" "}
                Notes website of IIIT Pune
              </div>
              {/* <div class="anni1 bottom-2 text-2xl justify-end items-center flex"> </div> */}
            </div>
          ) : (
            <div class="flex text-xl mx-4 justify-center items-center mt-10 sm:mx-auto flex-col rounded-md max-w-[500px]   border-2 m-5 border-blue-500">
              <h1 class="text-xl m-4 text-deepBlue">
                For Accessing this page please do following steps
              </h1>

              <h1 class="m-1 p-2 ">
                Already have account
                <Link
                  to="/auth/login"
                  class="bg-blue-700 p-2 m-2 px-5 text-lg rounded-md text-white mb-3 hover:bg-blue-500 transition-all duration-200 "
                >
                  Login
                </Link>
              </h1>

              <h1 class="m-1 p-2 ">
                Do not have account{" "}
                <Link
                  to="/auth/signup"
                  class="bg-blue-700 p-2 m-2 px-5 text-lg rounded-md text-white mb-3 hover:bg-blue-500 transition-all duration-200 "
                >
                  SignUp
                </Link>
              </h1>
            </div>
          )}
        </>
      </div>

      <Footer />
    </>
  );
}

export default Home;

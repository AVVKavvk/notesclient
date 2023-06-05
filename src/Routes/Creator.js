import React from "react";
import { FcHome } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import sk1 from "../image/sk1.svg";
import sk2 from "../image/sk2.svg";
import sk3 from "../image/sk3.svg";
import sk4 from "../image/sk4.svg";
import sk5 from "../image/sk5.svg";
import sk6 from "../image/sk6.svg";
import sk7 from "../image/sk7.svg";
import sk8 from "../image/sk8.svg";
import sk9 from "../image/sk9.svg";
import wave from "../image/wave.png";
function Creator() {
  return (
    <div class="flex flex-col sm:flex-row justify-center mb-10 p-5  mt-4 space-x-1 max-w-[1100px] mx-auto shadow-2xl ">
      <div class="flex flex-col mx-auto  sm:w-[400px]  space-y-16 mb-5">
        <div class="rounded-xl w-[300px] h-[300px] mb-9 mt-2  ">
          {" "}
          <a href="https://i.ibb.co/417cTGP/vipin.png" target="_blank">
            {" "}
            <img
              src="https://i.ibb.co/417cTGP/vipin.png"
              alt="vipin"
              class="w-full"
            />{" "}
          </a>
          <h1 class="text-center text-2xl mt-2 mb-1 ">Vipin Kumawat</h1>

          <a href="https://vipinkumawatportfolio.netlify.app/" target="_blank">  <h1 class="text-center text-xl text-red-700 hover:bg-red-400 hover:text-red-900 transition-all duration-500 bg-red-300 px-1 py-[1px] rounded-2xl mx-auto max-w-[100px] mb-1">Portfolio</h1> </a>
          <hr
            style={{
              height: "1px",
              backgroundColor: "#000000",
              border: "none",
            }}
          />
        </div>
        <div class="flex  flex-col  space-y-2 mb-3 ">
          <div class="flex  text-center  text-2xl  space-x-4 items-center justify-start">
            <FcHome />
            <h1>Sikar, Rajasthan</h1>
          </div>
          <div class="flex  text-center  text-2xl  space-x-4 items-center justify-start">
            <AiFillPhone />
            <h1>8107099646</h1>
          </div>
          <div class="flex  text-center text-lg lg:text-2xl   space-x-4 items-center justify-start">
            <SiGmail />
            <h1>kumawatvipin066@gmail.com</h1>
          </div>
          {/* <hr
            style={{
              height: "1px",
              backgroundColor: "#000000",
              border: "none",
            }}
          /> */}
        </div>
        <div class="flex  flex-col text-2xl space-y-2 mb-3 ">
          <div class="flex  text-center   space-x-4 items-center justify-start">
            <BsLinkedin style={{ color: "blue" }} />
            <a
              href="https://www.linkedin.com/in/vipin-kumawat-751b9124b/"
              target="_blank"
            >
              {" "}
              <h1>LinkedIn</h1>{" "}
            </a>
          </div>
          <div class="flex  text-center   space-x-4 items-center justify-start">
            <FaGithubSquare />
            <a href="https://github.com/AVVKavvk" target="_blank">
              {" "}
              <h1>Github</h1>{" "}
            </a>
          </div>
          <div class="flex  text-center   space-x-4 items-center justify-start">
            <FaInstagramSquare />
            <a href="https://www.instagram.com/k.vip_in/" target="_blank">
              {" "}
              <h1>Instagram</h1>{" "}
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:w-[600px] mx-auto mt-3  ">
        <div class="flex space-x-3 justify-evenly mb-16   ">
          <div class="flex flex-col justify-center items-center ">
            {" "}
            <a href="https://iiitp.ac.in/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/IIITP_logo.jpg/256px-IIITP_logo.jpg"
                width="100px"
                height="100px"
                alt=""
              />
            </a>
            <h1 class="text-lg m-1 text-center">BTech pursuing </h1>
            <h1 class="text-lg  text-center">
              CGPA - <span class="ml-2"> 8.54 </span>{" "}
            </h1>
          </div>
          <div>
            {" "}
            <a href="https://gurukripa.ac.in/" target="_blank">
              <img
                src="https://directory.edugorilla.com/wp-content/uploads/sites/6/2019/07/12472758_471297122995051_8149943114014984818_n.jpg"
                alt=""
                width="100px"
                height="100px"
              />
            </a>
            <h1 class="text-lg m-1 text-center ">Class 12 </h1>
            <h1 class="text-lg text-center ">
              Grade - <span class="ml-2"> 80% </span>{" "}
            </h1>
          </div>
          <div>
            {" "}
            <a href="https://www.princeeduhub.com/" target="_blank">
              <img
                src="https://www.princeeduhub.com/images/logo/Prince-RBSE.png"
                alt=""
                width="100px"
                height="100px"
              />
            </a>
            <h1 class="text-lg m-1 text-center">Class 10 </h1>
            <h1 class="text-lg text-center ">
              Grade - <span class="ml-2"> 92% </span>{" "}
            </h1>
          </div>
        </div>
        {/* <hr
          style={{
            height: "1px",
            backgroundColor: "#000000",
            border: "none",
          }}
        /> */}

        <div class="flex flex-col justify-center items-center text-center my-10 mb-18 ">
          <h1 class=" text-3xl">
            {/* <img src={wave} alt="" /> */}
            Hi 👋, I'm Vipin Kumawat <br />A passionate
            <h1 class="text-red-700 text-4xl ">
              <Typewriter
                options={{
                  strings: ["Front-End", "Back-End", "MERN", "Full-Stack"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            Developer
          </h1>
        </div>

        <hr
          style={{
            height: "1px",
            backgroundColor: "#000000",
            border: "none",
          }}
          class="mt-5"
        />
        <div>
          <h1 class="text-2xl m-1 text-center">Skills</h1>
          <div class="mt-3 grid grid-cols-5 space-x-2 sm:space-x-0  justify-evenly items-center space-y-2 mx-auto">
             <a href="https://html.com/" target="_blank"> <img src={sk1} alt="" width="70px" height="70px" /></a>
             <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src={sk2} alt="" width="70px" height="70px" /></a>
             <a href="https://tailwindcss.com/" target="_blank"> <img src={sk3} alt="" width="70px" height="70px" /></a>
             <a href="https://www.javascript.com/" target="_blank"> <img src={sk4} alt="" width="70px" height="70px" /></a>
             <a href="https://react.dev/" target="_blank"> <img src={sk5} alt="" width="70px" height="70px" /></a>
             <a href="https://redux.js.org/" target="_blank"> <img src={sk6} alt="" width="70px" height="70px" /></a> 
             <a href="https://nodejs.org/en" target="_blank"> <img src={sk7} alt="" width="70px" height="70px" /></a>
             <a href="https://www.mongodb.com/atlas/database" target="_blank"> <img src={sk8} alt="" width="70px" height="70px" /></a>
             <a href="https://expressjs.com/" target="_blank"> <img src={sk9} alt="" width="70px" height="70px" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creator;

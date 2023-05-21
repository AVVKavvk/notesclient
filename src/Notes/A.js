import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

function A() {
  return (
    <div class="lg:w-[1200px] mt-7 mx-auto  ">
      <div class="flex text-center p-4  justify-center rounded-lg w-[300px]  mt-9 bg-green-300  mx-auto sm:w-[500px] md:w-[700px] ">
        <h1 class="text-2xl ">
          Choose any one of the semester
          <span class=" text-red-500"> Notes </span> you want to access
        </h1>
      </div>
      <hr
        style={{
          height: "1px",
          backgroundColor: "#000000",
          border: "none",
        }}
        class="m-3"
      />
       {/* font-size: 1.5rem/* 24px 
    line-height: 2rem/* 32px */ }
      <div class="mx-auto flex flex-col justify-center items-center mt-5 mb-10 ">
        <h1  class="max-w-[500px] p-2 text-xl  sm:text-2xl text-center mb-8"> <span class="underline text-2xl sm:text-3xl mx-3"> Acknowledgement</span> for Notes</h1>
        <div class="max-w-[1000px] flex-col sm:flex-row space-y-14 sm:space-y-0 flex mx-auto justify-center items-center ">
          <div class="flex flex-col max-h-[350px] justify-center items-center mx-auto">
          <div class="rounded-xl flex-col flex justify-center items-center  w-[250px] h-[250px] mb-9 mt-2  ">
          {" "}
          <a  target="_blank" href="https://i.ibb.co/yPZxNCW/mittak.jpg" >
            {" "}
            <img
              src="https://i.ibb.co/yPZxNCW/mittak.jpg"
              alt="Sourish Mittal"
             
              width="200px"
              height="200px"
            />{" "}
          </a>
          <h1 class="text-center text-2xl mt-2 mb-1">Sourish Mittal</h1>
          <h1 class="text-center text-xl flex justify-between  items-center">9953862637 </h1>
         
        </div>
            <div class="flex flex-col w-[120px] space-y-3  ">
              <div class="flex justify-between items-center">
              <a  target="_blank" href="https://www.linkedin.com/in/sourish-mittal-688523226">
                {" "}
                <BsLinkedin />{" "}
              </a>
              <a  target="_blank" href="https://github.com/SourishMittal">
                {" "}
                <FaGithubSquare />
              </a>
              <a  target="_blank" href="https://www.instagram.com/iamsourishmittal/">
                {" "}
                <FaInstagramSquare />
              </a>
              <a  target="_blank" href="https://twitter.com/imsourishmittal">
                {" "}
                <AiOutlineTwitter />
              </a>
              </div>
             <div class="flex justify-between items-center">
             <a  target="_blank" href="https://www.snapchat.com/add/sourish.mittal?share_id=iNB27WvlkxM&locale=en-US">
                {" "}
                <FaSnapchatGhost />
              </a>
              <a  target="_blank" href="https://www.codechef.com/users/sourish_mittal">
                {" "}
                <SiCodechef />
              </a>
              <a  target="_blank" href="https://codeforces.com/profile/sourish_mittal">
                {" "}
                <SiCodeforces />
              </a>
              <a  target="_blank" href="https://leetcode.com/sourish_mittal/">
                {" "}
                <SiLeetcode />
              </a>
             </div>
            </div>
          </div>
          <div class="flex flex-col max-h-[300px]  justify-center items-center mx-auto">
          <div class="rounded-xl flex-col flex justify-center items-center  w-[250px] h-[250px] mb-9 mt-2  ">
          {" "}
          <a  target="_blank" href="https://i.ibb.co/t4L03C3/gawali.jpg" >
            {" "}
            <img
              src="https://i.ibb.co/t4L03C3/gawali.jpg"
              alt="Saurabh Gawali"
             
              width="193px"
              height="193px"
            />{" "}
          </a>
          <h1 class="text-center text-2xl mt-2 mb-1">Saurabh Gawali</h1>
          <h1 class="text-center text-xl flex justify-between  items-center">8788377893 </h1>
         
        </div>
            <div class="flex flex-col w-[120px] space-y-3  ">
              <div class="flex justify-between items-center">
              <a  target="_blank" href="https://www.linkedin.com/in/saurabh-gawali-34a608234">
                {" "}
                <BsLinkedin />{" "}
              </a>
             
              <a  target="_blank" href="https://www.instagram.com/its_saurabh_9063/">
                {" "}
                <FaInstagramSquare />
              </a>
              <a  target="_blank" href="https://www.codechef.com/users/gawali1212">
                {" "}
                <SiCodechef />
              </a>
            
              <a  target="_blank" href="https://leetcode.com/sg_2003/">
                {" "}
                <SiLeetcode />
              </a>
              </div>
             <div class="flex justify-between items-center">
             
              
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default A;

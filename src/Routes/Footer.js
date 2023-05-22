import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";

import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
function Footer() {
  return (
    <div class=" bg-[#4c97e2]">

   
    <div class=" md:h-[300px]    pb-10  md:pb-20 mx-auto max-w-[1200px] px-5 space-y-10 bg-[#63a3e3] ">
      <div class="flex flex-col py-8 sm:flex-row items-center ">
        <div class="flex flex-col  justify-center    text-justify items-center  pb-5  text-2xl text-white  ">
          {" "}
          <h1 class="text-2xl mt-4  mb-4">Acknowledgement for Design</h1>
          <div class="flex justify-center  items-center ">
            <div class="flex flex-col text-center justify-center items-center mx-auto">
             <a href="https://i.ibb.co/gF16qDF/deep.jpg" target="_blank"> <img
                src="https://i.ibb.co/gF16qDF/deep.jpg"
                width="100px"
                height="100px"
                alt=""
              /></a>
              <div>
                <h1 class="text-2xl mx-6">Deepesh Patil </h1>
              </div>
            </div>
            
            <div class="grid grid-cols-5 w-[200px]  pb-7 justify-center items-center ">
             <a href="https://www.linkedin.com/in/deepesh-patil-103a87258/" target="_blank"> <BsLinkedin /> </a>
            <a href="https://github.com/NerdyGamer611" target="_blank">  <FaGithubSquare /> </a>
             <a href="https://www.instagram.com/_deepesh_v.p/" target="_blank"> <FaInstagramSquare /> </a>
             <a href="https://www.codechef.com/users/imalegend" target="_blank"> <SiCodechef /> </a>
             <a href="https://codeforces.com/profile/nerdygamer" target="_blank"> <SiCodeforces /> </a>
            </div>
          </div>
        </div>
        <div class="hidden h-[200px] z-30 w-[1px]  sm:mr-2 md:ml-52 bg-[#fff] lg:block"></div>
        <div class="flex flex-col mx-auto text-3xl justify-center   text-justify items-center  pb-5   text-white  ">
          {" "}
          <h1 class=" mt-5">
            {" "}
            <a href="https://www.iiitp.ac.in/" target="_blank">
              IIIT Pune
            </a>
          </h1>
          <div class=" flex justify-center  items-center flex-col mb-2  ">
            <div class=" grid grid-cols-3 sm:flex  justify-center sm:justify-between items-center sm:gap-5 px-3 text-xl text-red-600 mt-4">
              <a
                href="https://placements.iiitp.ac.in/"
                target="_blank"
                class="hover:underline transition-all duration-200"
              >
                Placements
              </a>
              <a
                href="https://www.iiitp.ac.in/contact-us"
                target="_blank"
                class="hover:underline transition-all ml-6 sm:ml-0 duration-200"
              >
                Contact
              </a>
              <a
                href="https://www.iiitp.ac.in/page/faculty-0"
                target="_blank"
                class="hover:underline transition-all ml-4 sm:ml-0 duration-200"
              >
                Faculty
              </a>
              <a
                href="https://www.iiitp.ac.in/page/upcoming-campus-iiit-pune"
                target="_blank"
                class="hover:underline transition-all duration-200"
              >
                Campus
              </a>
            </div>
          </div>
          <div class="mt-4 text-base text-center border-t border-brColor pt-10">
            Copyright © 2023 Vipin. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;

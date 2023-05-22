import React from "react";
import ll from "../image/l3.svg";
import lll from "../image/l3l.png";
import llll from "../image/l3ll.svg";
function Sem3() {
  return (
    <div class=" sm:w-[500px]  md:w-[650px] md:p-6 grid grid-cols-1  sm:grid-cols-3  mx-auto relative gap-2 pt-4  space-y-2 sm:space-x-8 sm:space-y-5 mt-8 overflow-hidden">
      <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
        <div>
          <a
            href="https://drive.google.com/drive/folders/1JVc7q9bsB6p6gfBlXCYAKYV-5Jz3meqK?usp=share_link"
            target="_blank"
          >
            <div>
              <img
                src={ll}
                alt=""
                class="hover:scale-110 transition-all duration-500"
                height="170px"
                width="170px"
              />
            </div>
          </a>

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-3 ">DBMS</h1>
        </div>
      </div>
      <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
        <div>
          <a
            href="https://drive.google.com/drive/folders/1YOw2fpBwOjByJqqU86g-aqFyr45W7Au1?usp=share_link"
            target="_blank"
          >
            <div>
              <img
                src={lll}
                alt=""
                class="hover:scale-110 rounded-md transition-all duration-500"
                height="170px"
                width="170px"
              />
            </div>
          </a>

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-4 ">AADA</h1>
        </div>
      </div>
      <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
        <div>
          <a
            href="https://drive.google.com/drive/folders/1v4bMUbHRpXQIxmbz2R_turv3gNSB2ofL?usp=share_link"
            target="_blank"
          >
            <div>
              <img
                src={llll}
                alt=""
                class="hover:scale-110 transition-all duration-500"
                height="170px"
                width="170px"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sem3;

import React from "react";
import ll from "../image/p1.svg";
function Sem1() {
  return (
    <div class=" sm:w-[500px]  md:w-[650px] md:p-6 grid grid-cols-1  mx-auto sm:grid-cols-3  relative gap-2 pt-4 w-[200px]  space-y-2 sm:space-x-8 sm:space-y-5 mt-8 overflow-hidden">
      <div class="relative flex sm:mt-5 flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
        <div>
          <a
            href="https://drive.google.com/file/d/1khtnqmu5ZwQNg9g7gWDx1pD0lP3QFZNf/view?usp=share_link"
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

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl  ">T1</h1>
        </div>
      </div>
      <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
        <div>
          <a
            href="https://drive.google.com/file/d/1whVpD4Zxy_J_wADdxxDgVyXxAVlr8Y9k/view?usp=share_link"
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

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl  ">T2</h1>
        </div>
      </div>
      <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
        <div>
          <a
            href="https://drive.google.com/file/d/1lwEkuOJDQiNHtjwgJQiXfsOiV-xC4UYq/view?usp=sharing"
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

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl  ">End Sem</h1>
        </div>
      </div>
    </div>
  );
}

export default Sem1;

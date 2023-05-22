import React from "react";
import ll from "../image/l1.svg";
import lll from "../image/l1.1.svg";
import { Link } from "react-router-dom";
function Sem1() {
  return (
    <div class=" sm:w-[500px]  md:max-w-[1000px] grid grid-cols-1  sm:grid-cols-2 mx-auto relative gap-2 pt-4 space-y-5 mt-8 overflow-hidden">
      <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
        <div>
          <Link to="/user/unavail" style={{ textDecoration: "none" }}>
            <div>
              <img
                src={ll}
                alt=""
                class="hover:scale-110 transition-all duration-500"
                height="170px"
                width="170px"
              />
            </div>
          </Link>

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-3 ">BEE</h1>
        </div>
      </div>
      <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
        <div>
          <a
            href="https://drive.google.com/drive/folders/1KVgNWX8sXUz1_6Gx1BcTPNTVWupOFJsa?usp=share_link"
            target="_blank"
          >
            <div>
              <img
                src={lll}
                alt=""
                class="hover:scale-110 transition-all duration-500"
                height="170px"
                width="170px"
              />
            </div>
          </a>

          <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-3 ">CP</h1>
        </div>
      </div>
    </div>
  );
}

export default Sem1;

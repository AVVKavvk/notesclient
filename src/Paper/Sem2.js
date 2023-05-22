import React from 'react'
import ll from '../image/p2.svg'
import { Link } from 'react-router-dom';
function Sem2() {
  return (
    <div class=" sm:w-[500px] mx-auto  md:w-[650px] md:p-6 grid grid-cols-1  sm:grid-cols-3 relative gap-2 pt-4 w-[200px]  space-y-2 sm:space-x-8 sm:space-y-5 mt-8 overflow-hidden">
    <div class="relative sm:mt-5 flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="https://drive.google.com/file/d/1MobeOJIpH0yfxsJolMXplOmOL9U1FrsV/view?usp=share_link"
        target="_blank"
      >
        <div>
          <img src={ll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-3  ">
          T1
        </h1>
      </div>
      
    </div>
    <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="https://drive.google.com/file/d/1NBhPtj0Inr8PjuIUf4DrK9IjVcGLuyIs/view?usp=share_link"
        target="_blank"
      >
        <div>
          <img src={ll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-3 ">
          T2
        </h1>
      </div>
      
    </div>
    <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <Link to="/user/unavail" style={{ textDecoration: "none" }}>
        <div>
          <img src={ll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </Link>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl  mt-3 ">
          End Sem
        </h1>
      </div>
      
    </div>
    </div>
  )
}

export default Sem2
import React from 'react'
import ll from '../image/l4.svg'
import lll from '../image/l4l.svg'
import llll from '../image/l4ll.svg'
import lllll from '../image/l4lll.svg'
function Sem4() {
  return (
    <div class=" w-[1000px] grid  grid-cols-3 relative gap-2 pt-4 space-y-5 mt-8 overflow-hidden">
    <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="#"
        target="_blank"
      >
        <div>
          <img src={ll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-4 ">
          CN 
        </h1>
      </div>
      
    </div>
    <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="#"
        target="_blank"
      >
        <div>
          <img src={lll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-4 ">
          OS 
        </h1>
      </div>
      
    </div>
    <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="#"
        target="_blank"
      >
        <div>
          <img src={llll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-4 ">
          CD
        </h1>
      </div>
      
    </div>
    <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="#"
        target="_blank"
      >
        <div>
          <img src={lllll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-4 ">
          Java
        </h1>
      </div>
      
    </div>
    
      
    </div>
  )
}

export default Sem4
import React from 'react'
import ll from '../image/p4.svg'
function Sem4() {
  return (
    <div class="sm:w-[500px]  md:w-[650px] md:p-6 grid grid-cols-1  sm:grid-cols-3 mx-auto relative gap-2 pt-4 w-[200px]  space-y-2 sm:space-x-8 sm:space-y-5 mt-8 overflow-hidden">
    <div class="relative sm:mt-5 flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="https://drive.google.com/file/d/1uOZ40FMznitH9Jq9js1sCBemJ4FalN_g/view?usp=share_link"
        target="_blank"
      >
        <div>
          <img src={ll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-4  ">
          T1
        </h1>
      </div>
      
    </div>
    <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="https://drive.google.com/file/d/18Ui3WYT3L4tHoo_90kfIcghDH2IFMkkn/view?usp=share_link"
        target="_blank"
      >
        <div>
          <img src={ll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-4 ">
          T2
        </h1>
      </div>
      
    </div>
    <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="https://drive.google.com/file/d/13Ql0lPh4L3kMbZ5bTmzm8_PnjuL7K1rx/view?usp=share_link"
        target="_blank"
      >
        <div>
          <img src={ll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl  mt-4 ">
          End Sem
        </h1>
      </div>
      
    </div>
    </div>
  )
}

export default Sem4
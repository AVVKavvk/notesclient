import React from 'react'

function A() {
  return (
    <div class="lg:w-[1200px] mt-7 mx-auto space-y-6 ">
    <div class="flex t p-4  items-center justify-center rounded-lg w-[300px]  mt-9 bg-green-300 mx-auto sm:w-[500px] md:w-[700px] ">
      <h1 class="text-2xl ">
        Choose any one of the semester
        <span class=" text-red-500"> PYQ </span> you want to access
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

  </div>
  )
}

export default A
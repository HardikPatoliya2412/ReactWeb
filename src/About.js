import React from 'react'

function About() {
  return (
    
    <>
      <div className="max-w-screen-xl top-5 relative  place-content-center bg-zinc-700 text-white grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl-grid-cols-2 md:-mt-0  mx-auto ">

     </div>
     <div className='bg-zinc-700 relative top-5'>
       <div>
         <p className=' text-2xl text-white text-center p-5 '>
           OUR TEAM
         </p>
       </div>
     <div className="max-w-screen-2xl mx-auto pb-10    text-white relative grid grid-cols-1  md:grid-cols-3 xl:grid-cols-4 gap-5 ">
              <div className=" bg-white cursor-pointer  p-5 rounded-md  ">
                <div className="text-black   relative ">
                  <p className="p-2 font-semibold text-center ">
                    {" "}
                    Accountant
                  </p>
                </div>
                <img
                src='/team-1.jpg'
                  className="pb-5"
                  alt=""
                />
              </div>

              <div className=" bg-white cursor-pointer text-center   p-5 rounded-md  ">
              <p className="p-2 font-semibold text-black ">
                    {" "}
                    Chief Executive Officer

                  </p>
                <img
                src='/team-2.jpg'
                className="pb-5"
                  alt=""
                />
              </div>

              <div className=" bg-white cursor-pointer text-center   p-8 rounded-md  ">
                <div className="text-black   relative ">
                   <p className="p-2 font-semibold ">
                    {" "}
                    Produtc Manager
                  </p>
                </div>
                <img
                src='/team-3.jpg'
                className=""
                  alt=""
                />
              </div>

              <div className=" bg-white cursor-pointer text-center   p-8 rounded-md  ">
                <div className="text-black   relative ">
                  <p className="p-2 font-semibold  "> CTO</p>
                </div>
                <img
                src='/team-4.jpg'
                className=""
                  alt=""
                />
              </div>
            </div>
            </div>
    </>
  )
}

export default About
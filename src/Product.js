import React from "react";
import Slide from 'react-reveal/Slide'
function Product() {
  
  return (
    <>
     return (
    

      
      {/* <div className="  relative  place-content-center bg-zinc-700 text-white grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl-grid-cols-2 md:-mt-0  mx-auto ">
        
        <div className="m-2">
           <h6 className="text-2xl font-extrabold text-cyan-400">
           EUM IPSAM LABORUM DELENITI VELITENA
           </h6>
           <p className="relative top-7 ">
           Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave
           </p>
        </div>

        <div>
          <p className="p-2">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <p className="p-2">Ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
          <p className="p-2">Ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
          <p className="p-2">Ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
        </div>

     
    </div> */}

      <div className="max-w-screen-xl   place-content-center text-white grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 md:-mt-0  mx-auto ">
      <Slide left>
            <div className="products_wrap pt-8  " >
              <div className="product rounded-lg text-black text-center   ">
                
                <img className="" src="/1.png"  alt="" />
                
                  <h3 className=" line-clamp-1 ">Lorem Ipsum</h3>
                
               
               
              </div>

              
            </div>
           
            <div className="products_wrap pt-8  " >
              <div className="product rounded-lg text-black text-center   ">
                
                <img className="" src="/2.jpg"  alt="" />
                <div className="line-clamp-3">
                  <h3 className="text-sm line-clamp-1 "></h3>
                </div>
                <h3 className=" line-clamp-1 ">Lorem Ipsum</h3>
               
              </div>

              
            </div>
            </Slide>
            <Slide right>
            <div className="products_wrap pt-8  " >
              <div className="product rounded-lg text-black text-center   ">
                
                <img className="" src="/3.png"  alt="" />
                <h3 className=" line-clamp-1 ">Lorem Ipsum</h3>

               
              </div>

              
            </div>

            <div className="products_wrap pt-8  " >
              <div className="product rounded-lg text-black text-center   ">
                
                <img className="" src="/4.png"  alt="" />
                <h3 className=" line-clamp-1 ">Lorem Ipsum</h3>

               
              </div>

              
            </div>
            </Slide>
            <Slide bottom>

            
            <div className="products_wrap pt-8  " >
              <div className="product rounded-lg text-black text-center   ">
                
                <img className="" src="/1.png"  alt="" />
                
                  <h3 className=" line-clamp-1 ">Lorem Ipsum</h3>
                
               
               
              </div>

              
            </div>
           
            <div className="products_wrap pt-8  " >
              <div className="product rounded-lg text-black text-center   ">
                
                <img className="" src="/2.jpg"  alt="" />
                <div className="line-clamp-3">
                  <h3 className="text-sm line-clamp-1 "></h3>
                </div>
                <h3 className=" line-clamp-1 ">Lorem Ipsum</h3>
               
              </div>

              
            </div>
            
            </Slide>
            <Slide bottom>
            <div className="products_wrap pt-8  " >
              <div className="product rounded-lg text-black text-center   ">
                
                <img className="" src="/3.png"  alt="" />
                <h3 className=" line-clamp-1 ">Lorem Ipsum</h3>

               
              </div>

              
            </div>

            <div className="products_wrap pt-8  " >
              <div className="product rounded-lg text-black text-center   ">
                
                <img className="" src="/4.png"  alt="" />
                <h3 className=" line-clamp-1 ">Lorem Ipsum</h3>

               
              </div>
             
              
            </div>
            </Slide>
      </div>
    </>
  );
}

export default Product;

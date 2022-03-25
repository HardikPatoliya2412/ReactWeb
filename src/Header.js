import React from "react";

import { Link } from "react-router-dom";


function Header({ cart, addcategories }) {
  return (
    <>
      

      <header className="sticky top-0 z-40 ">
        {/* Top Nav */}
        <div className="flex items-center bg-zinc-800  p-1 flex-grow py-2 ">
          <div className="mt-2 pl-24 pr-1 flex items-center flex-grow sm:flex-grow-0">
            <Link to="/">
              {/* <img
                //onClick={() => router.push("/")}
                src="https://links.papareact.com/f90"
                alt=""
                width={100}
                height={40}
                objectfit="contain"
                className="cursor-pointer "
              /> */}
              <h1 className="text-cyan-500 text-2xl">
                COMPANY NAME
              </h1>
            </Link>
          </div>

         
          <div className="flex relative left-96   text-white text-lg space-x-6 mx-6 whitespace-nowrap">
            <div className="link group hidden md:inline-block">
            <Link to="/">
              <p className="capitalize border-b-2 border-sky-600  text-red-500 hover:underline">
                Home
              </p>
              </Link>
             </div>
             
            <div
              //onClick={() => router.push("/orders")}
              className="cursor-pointer link"
            >
              <Link to="/CheckOut">
              <p>ABOUT</p>
              </Link>
             
            </div>

            <div
              //onClick={() => router.push("/orders")}
              className="cursor-pointer link"
            >
              <p>SERVICES</p>
            </div>

                <p className=" link group hidden md:inline-block   md:text-lg ">
                  CONTACT
                </p>
              
           
          </div>
        </div>

        {/* Bottom Nav */}

        
      </header>
    </>
  );
}

export default Header;

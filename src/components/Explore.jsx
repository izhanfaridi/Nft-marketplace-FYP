import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import nfts from "./Data";
import Footer from "./HomeComponents/Footer";

const Explore = () => {
  
  return (
    <>
      <Navbar></Navbar>
      <div className="gradient-css-div-explore">
        <br></br>
        <div className="flex justify-center flex-wrap ">
          {nfts.map((item) => (
            <NavLink className="productLink" to={item.id} key={item.id}>
              <div className="shrink-0 rounded-lg border border-solid border-black bg-white max-w-sm hover:shadow-2xl hover:shadow-balck lg:my-8 lg:mx-16 md:mx-8 md:my-6 sm:mx-4 sm:my-4 xs:mx-4 xs:my-4">
                  <img
                    className="rounded-t-lg"
                    src={item.image}
                    alt={item.title}
                  />
                <div className="p-6">
                  <div className="flex flex-row justify-between">
                    <p className="text-gray-500 text-sm font-medium mb-4">
                      {item.creator}
                    </p>
                    <p className="text-gray-500 text-sm font-medium mb-4">
                      Price
                    </p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-gray-800 break-words text-sm font-bold ">
                      {item.title}
                    </p>
                    <p className="text-gray-800 break-words text-sm font-bold ">
                      <svg
                        className="inline w-3.5 h-3.5 mb-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                      </svg>
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <br />
      </div>
      <hr />
      <Footer></Footer>
    </>
  );
};

export default Explore;

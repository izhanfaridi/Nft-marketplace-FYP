import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import nfts from "./Data";
import Navbar from "./Navbar";
import {BsHeart} from 'react-icons/bs'
import {IoWalletOutline} from 'react-icons/io5'
import {BsBookmarkHeart} from 'react-icons/bs'

const NftDetails = () => {
  const location = useLocation();
  const [nft , setNFT] = useState({});
  const id = location.pathname.split("/")[2];
 
  useEffect(() => {
    nfts.map((item)=>{
        if(item.id == id){
            setNFT(item);
        }
    })
  }, [id])
  

  return (
    <>
      <Navbar />
      <div className="gradient-css-div-details h-screen">
        <br />
        <div className="flex justify-around">
          <div className="ring ring-1 ring-black rounded-md">
            <img
              className="h-96 rounded-t-md"
              src={nft.image}
              alt={nft.title}
            />
            <div className="p-2.5 bg-white rounded-md">
              <div className="flex flex-row justify-end">
                <BsHeart className="inline mt-0.5 w-5 h-5" />
                <p className="mx-2.5 -mt-1 text-xl font-normal">5</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="ring ring-1 ring-black rounded-t-md px-4 py-2 bg-white w-full">
              <p className="text-md font-medium text-gray-500">{nft.creator}</p>
              <p className="py-5 text-4xl font-bold">{nft.title}</p>
            </div>
            <div className="rounded-b-md ring ring-1 ring-gray-500 px-4 py-2 bg-slate-50 w-full">
              <p className="text-md font-medium text-gray-700 mt-2">Current Price</p>
              <p className="text-4xl font-bold my-5">
                <svg
                  className="inline w-6 h-6 mb-1.5 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                </svg>
                {nft.price}
              </p>
              <button className="bg-cyan-500 py-1 w-40 h-10 rounded-lg mb-4 mt-2 text-lg font-semibold text-white hover:bg-cyan-600"><IoWalletOutline className="inline w-6 h-6 mr-2 mb-1"/>Buy Now</button>
              <button className="bg-white py-1 w-56 h-10 rounded-lg mb-4 ml-3 mt-2 text-lg font-semibold ring ring-1 ring-cyan-500 hover:ring-cyan-600 hover:ring-2"><BsBookmarkHeart className="inline w-6 h-6 mr-2 mb-1"/>Add To Favourites</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftDetails;

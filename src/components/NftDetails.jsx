import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import nfts from "./Data";
import Navbar from "./Navbar";
import { BsHeart } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'
import { BsBookmarkHeart } from 'react-icons/bs'
import axios from 'axios'
import CanvasJSReact from '../canvasjs.react';
import {prominent} from 'color.js'
import Footer from "./HomeComponents/Footer";



const NftDetails = () => {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const location = useLocation();
  const [nft, setNFT] = useState({});
  const [color, setColor] = useState([]);
  const [response, setResponse] = useState();
  const id = location.pathname.split("/")[2];
  const today = new Date()
  const priorDate = new Date(new Date().setDate(today.getDate() - 30));
  const startDateApi = priorDate.getFullYear() +"-"+ (priorDate.getMonth()+1)+"-"+ priorDate.getDate()
  let arr = []
  const isFirstRender = useRef(true);




  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title:{
      text: "ETH Value For The Past 30 Days (In USD)"
    },
    axisY: {
      title: "Price",
      suffix: "$"
    },
    axisX: {
      title: "Date",
      prefix: "",
      interval: 1
    },
    data: [{
      type: "line",
      toolTipContent: "{x}: {y} $",
      dataPoints: arr
    }]
  }

  
      const fetchData = async() =>{
        const res = await axios("https://data.messari.io/api/v1/assets/ethereum/metrics/price/time-series?start="+startDateApi+"&interval=1d")
        setResponse(res)
      }

      const getColorPallete =()=>{
        prominent(nft.image, { amount: 3 , format: 'hex' }).then(clr => {
          setColor(clr);
        })
      }
  useEffect(() => {
    const filtered = nfts.filter((item) => item.id === id);
    setNFT(filtered[0])
    

    //   nfts.map((item) => {
    //    if (item.id === id) {
    //      setNFT(item);
    //    }
    //  })

    // nft.image ? getColorPallete() : {}
    fetchData();
  }, [id]);

  // useEffect(()=>{

  //   if (Object.keys(nft).length !== 0) {
  //     getColorPallete();
  //     setTimeout(() => {
  //       console.log(color);
  //     }, 5000);
  //   }
  //   else {
  //     //do nothing
  //   }
  //   },[nft])

  useMemo(()=>{
    response && response.data.data.values.map((e)=>{
      const date = new Date(e[0])
      const usdRounded = Math.round(e[4] * 100) / 100;
      arr.push({ x: date, y: usdRounded });
    })
    
  },[response])

 

  return (
    <>
      <Navbar />
      <div className="gradient-css-div-details h-screen checks">
        <br />
        <div className="flex justify-evenly items-start">
          <div>
            <div className="w-96  ring-1 ring-gray-400 rounded-md flex flex-col justify-center items-end">
              <img
                className="h-96 w-96 rounded-t-md"
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
            <div className="ring-1 ring-gray-400 rounded-md mt-4">
              <div className="text-2xl font-bold border-b border-gray-400 px-1.5 py-1">
                Color Pallete
              </div>
              <div className="flex flex-col py-3 px-6 justify-between h-36">
                <div className="flex flex-row items-center">
                  <div className="rounded-full ring-2 ring-black bg-blue-400 w-8 h-8 mr-3"></div>
                  <p className="text-base font-medium">#60A5FA</p>
                </div>

                <div className="flex flex-row items-center">
                  <div className="rounded-full ring-2 ring-black bg-gray-600 w-8 h-8 mr-3"></div>
                  <p className="text-base font-medium">#4B5563</p>
                </div>

                <div className="flex flex-row items-center">
                  <div className="rounded-full ring-2 ring-black bg-green-500 w-8 h-8 mr-3"></div>
                  <p className="text-base font-medium">#22C55E</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col  w-8/12  ">
            <div className="details-div px-4 py-1 rounded-md border border-gray-400">
              <p className="text-md font-medium text-gray-500">{nft.creator}</p>
              <p className="py-5 text-4xl font-bold">{nft.title}</p>
              <p className="text-md font-medium text-gray-700 mt-5">
                Current Price
              </p>
              <p className="text-4xl font-bold py-5">
                <svg
                  className="inline w-6 h-6 mb-1.5 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                </svg>
                {nft.price}
              </p>
              <button className="bg-cyan-500 py-1 w-40 h-10 rounded-lg mb-4 mt-2 text-lg font-semibold text-white hover:bg-cyan-600">
                <IoWalletOutline className="inline w-6 h-6 mr-2 mb-1" />
                Buy Now
              </button>
              <button className="bg-white py-1 w-56 h-10 rounded-lg mb-4 ml-3 mt-2 text-lg font-semibold ring ring-1 ring-cyan-500 hover:ring-cyan-600 hover:ring-2">
                <BsBookmarkHeart className="inline w-6 h-6 mr-2 mb-1" />
                Add To Favourites
              </button>
            </div>
            <div className="mt-5 p-1 rounded-lg bg-zinc-800 ">
              <CanvasJSChart options={options} />
            </div>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <Footer></Footer>
      </div>
    </>
  );
};

export default NftDetails;

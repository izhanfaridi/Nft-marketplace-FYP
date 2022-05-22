import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import nfts from "./Data";
import Navbar from "./Navbar";
import { BsHeart } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'
import { BsBookmarkHeart } from 'react-icons/bs'
import axios from 'axios'
import CanvasJSReact from '../canvasjs.react';


const NftDetails = () => {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const location = useLocation();
  const [nft, setNFT] = useState({});
  const [response, setResponse] = useState({});
  const [chartData, setChartData] = useState([]);
  const [tempData, setTempData] = useState({});
  const id = location.pathname.split("/")[2];
  const today = new Date()
  const priorDate = new Date(new Date().setDate(today.getDate() - 30));
  const startDateApi = priorDate.getFullYear() +"-"+ (priorDate.getMonth()+1)+"-"+ priorDate.getDate()
 
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title:{
      text: "Ethereum Price Chart For Last 30 Days (in USD)"
    },
    axisY: {
      title: "Price",
      suffix: "USD"
    },
    axisX: {
      title: "Date",
      prefix: "",
      interval: 2
    },
    data: [{
      type: "line",
      toolTipContent: "Date: {x}, {y}%",
      dataPoints: [
        { x: 1, y: 64 },
        { x: 2, y: 61 },
        { x: 3, y: 64 },
        { x: 4, y: 62 },
        { x: 5, y: 64 },
        { x: 6, y: 60 },
        { x: 7, y: 58 },
        { x: 8, y: 59 },
        { x: 9, y: 53 },
        { x: 10, y: 54 },
        { x: 11, y: 61 },
        { x: 12, y: 60 },
        { x: 13, y: 55 },
        { x: 14, y: 60 },
        { x: 15, y: 56 },
        { x: 16, y: 60 },
        { x: 17, y: 59.5 },
        { x: 18, y: 63 },
        { x: 19, y: 58 },
        { x: 20, y: 54 },
        { x: 21, y: 59 },
        { x: 22, y: 64 },
        { x: 23, y: 59 },
        { x: 24, y: 75 },
        { x: 25, y: 59 },
        { x: 26, y: 49},
        { x: 27, y: 59 },
        { x: 28, y: 64 },
        { x: 29, y: 50 },
        { x: 30, y: 43 },
      ]
    }]
  }


  useEffect(() => {

    const fetchData = async() =>{
      const res = await axios("https://data.messari.io/api/v1/assets/ethereum/metrics/price/time-series?start="+startDateApi+"&interval=1d")
      console.log(res)
      setResponse(res)
    }
    
    fetchData()

    nfts.map((item) => {
      if (item.id == id) {
        setNFT(item);
      }
    })

    response && response.data.data.values.map((e)={
      
      // setChartData([...chartData , ])
    })

  }, [id,response])


  return (
    <>
      <Navbar />
      <div className="gradient-css-div-details h-screen">
        <br />
        <div className="flex justify-evenly items-start">
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
          <div className="flex-col  w-8/12  ">
            <div className="details-div px-4 py-1 rounded-md border border-gray-400">
              <p className="text-md font-medium text-gray-500">{nft.creator}</p>
              <p className="py-5 text-4xl font-bold">{nft.title}</p>
              <p className="text-md font-medium text-gray-700 mt-5">Current Price</p>
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
              <button className="bg-cyan-500 py-1 w-40 h-10 rounded-lg mb-4 mt-2 text-lg font-semibold text-white hover:bg-cyan-600"><IoWalletOutline className="inline w-6 h-6 mr-2 mb-1" />Buy Now</button>
              <button className="bg-white py-1 w-56 h-10 rounded-lg mb-4 ml-3 mt-2 text-lg font-semibold ring ring-1 ring-cyan-500 hover:ring-cyan-600 hover:ring-2"><BsBookmarkHeart className="inline w-6 h-6 mr-2 mb-1" />Add To Favourites</button>
              </div>
              <div>
                <CanvasJSChart options = {options}/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftDetails;

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import nfts from "./Data";
import Navbar from "./Navbar";
import { BsHeart } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import CanvasJSReact from '../canvasjs.react';
import {prominent} from 'color.js'
import Footer from "./HomeComponents/Footer";



const NotListedDetails = () => {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const location = useLocation();
  const [nft, setNFT] = useState({});
  const [color, setColor] = useState([]);
  const [dominant, setDominant] = useState();
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

  
    //   const fetchData = async() =>{
    //     const res = await axios("https://data.messari.io/api/v1/assets/ethereum/metrics/price/time-series?start="+startDateApi+"&interval=1d")
    //     setResponse(res)
    //   }

      const getColorPallete =()=>{
        prominent(nft.image, { amount: 3 , format: 'hex' }).then(clr => {
          setColor(clr);
        })

        prominent(nft.image,{amount:1,format: 'hex'}).then(clr=>{
          setDominant(clr+"65");
        })
      }
      const check=()=>{
        const filtered = nfts.filter((item) => item.id === id);
        setNFT(filtered[0]);
      }
  useEffect(() => {
    check();
    //fetchData();
  }, []);
  useEffect(() => {
    
    getColorPallete()
    
  }, [nft]);
  

//   useMemo(()=>{
//     response && response.data.data.values.map((e)=>{
//       const date = new Date(e[0])
//       const usdRounded = Math.round(e[4] * 100) / 100;
//       arr.push({ x: date, y: usdRounded });
//     })
    
//   },[response])

 

  return (
    <>
      <Navbar />
      <div className="h-full rounded-br-xl" style={{backgroundImage:`linear-gradient(to top right, #90cef400,#90cef400,${dominant}, #90cef400, #90cef400)`}}>
        <br />
        <div className="flex justify-evenly items-start">
          <div>
            <div className="w-96  ring-1 ring-gray-400 rounded-md flex flex-col justify-center items-end">
              <img
                className="h-96 w-96 rounded-t-md"
                src={nft.image}
                alt={nft.title}
              />
              <div className="p-2.5 rounded-md">
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
                {color ? color.map((clr) => (
                  <div className="flex flex-row items-center">
                    <div className="rounded-full ring-2 ring-black w-8 h-8 mr-3" style={{ backgroundColor: clr }}></div>
                    <p className="text-base font-medium">{clr}</p>
                  </div>
                )) : (
                  <div className="flex flex-row items-center">
                    <p>Loading...</p>
                  </div>
                )}
               
              </div>
            </div>
          </div>
          <div className="flex-col  w-8/12  ">
            <div className="details-div px-4 py-1 rounded-md border border-gray-400">
              <p className="text-md font-medium text-gray-500">{nft.creator}</p>
              <p className="py-5 text-4xl font-bold">{nft.title}</p>
              <p className="text-md font-medium text-gray-700 mt-5">
                Fill The Following:
              </p>
              <div className="flex flex-col">
               <input className='bg-gray-300 my-3.5 rounded-lg p-2 w-1/2 ring-1 ring-gray-400 focus:outline-0' type="text" name="contractAddress" id="contractAddress" placeholder='0x0729162903610E279Sd7207' required readOnly/>
               <input className='my-3.5 rounded-lg p-2 w-1/2 ring-1 ring-gray-400 ' type="text" name="tokenId" id="tokenId" placeholder='Token ID' required />
               <input className='my-3.5 rounded-lg p-2 w-1/2 ring-1 ring-gray-400 ' type="text" name="price" id="price" placeholder='Price (In ETH)' required />
              </div>
              <button className="bg-cyan-500 py-1 w-40 h-10 rounded-lg mb-4 mt-2 text-lg font-semibold text-white hover:bg-cyan-600">
                <AiOutlineCheckCircle className="inline w-6 h-6 mr-2 mb-1" />
                List My NFT
              </button>
            </div>
            <div className="details-div mt-3 px-4 py-1 rounded-md border border-gray-400 ">
              helo
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

export default NotListedDetails;

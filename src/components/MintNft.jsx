import React from 'react'
import ParticlesBg from 'particles-bg'
import siteLogo from '../imgs/site-logo2.png'
import './styles.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const MintNft = () => {
  let width = window.innerWidth;
  

  return (
    <>
    <Navbar></Navbar>
      {
        width && width<768 ?(
          <ParticlesBg type="cobweb" num={35} color="#2eb38b" bg={true}></ParticlesBg>
        )
        :(
          <ParticlesBg type="cobweb" color="#2eb38b" bg={true}></ParticlesBg>
        )
      }
      <div className='flex justify-center items-center h-screen'>
        <div className='login-div2 flex flex-col justify-center items-center h-auto w-1/4 rounded-lg bg-gradient-to-br from-teal-300 to-green-100'>
          <Link to="/"><img alt='Nft Gate' src={siteLogo} className='p-3'></img></Link>
          <input className='my-3.5 rounded p-2 w-3/4 focus:outline-0 ' type="text" name="nftName" id="nftName" placeholder='NFT Name' required/>
          <textarea className='my-3.5 rounded p-2 w-3/4 focus:outline-0 ' type="text" name="NftDesc" id="NftDesc" placeholder='Nft Description' />
          <input className='my-3.5 rounded p-2 w-3/4 b focus:outline-0' type="text" name="royaltyFee" id="royaltyFee" placeholder='Royalty Fee' required/>
          <input className='my-3.5 rounded p-2 w-3/4 b focus:outline-0' type="file" name="nftImg" id="nftImg" required/>
          <button className='my-5 ring ring-2 ring-teal-300 shadow-2xl shadow-black bg-teal-300 text-gray-100 hover:bg-teal-400 hover:ring-teal-400 rounded py-0.5 px-1 font-bold w-24 text-lg'>Mint NFT</button>
        </div>
      </div>
    </>
  )
}

export default MintNft
import React from 'react'
import ParticlesBg from 'particles-bg'
import siteLogo from '../imgs/site-logo2.png'
import './styles.css'
import { Link } from 'react-router-dom'

const Register = () => {
  let width = window.innerWidth;
  

  return (
    <>
      {
        width && width<768 ?(
          <ParticlesBg type="square" bg={true} ></ParticlesBg>
        )
        :(
          <ParticlesBg type="square" bg={true} ></ParticlesBg>
        )
      }
      <div className='flex justify-center items-center h-screen'>
        <div className='login-div2 flex flex-col justify-center items-center h-auto w-80 rounded-lg bg-gradient-to-br from-teal-300 to-green-100'>
          <Link to="/"><img alt='Nft Gate' src={siteLogo} className='p-3'></img></Link>
          <input className='my-3.5 rounded p-2 w-3/4 focus:outline-0 ' type="text" name="fname" id="fname" placeholder='First Name' required/>
          <input className='my-3.5 rounded p-2 w-3/4 focus:outline-0 ' type="text" name="lname" id="lname" placeholder='Last Name' required/>
          <input className='my-3.5 rounded p-2 w-3/4 focus:outline-0 ' type="email" name="username" id="username" placeholder='Username' required/>
          <input className='my-3.5 rounded p-2 w-3/4 b focus:outline-0' type="password" name="password" id="password" placeholder='Password' required/>
          <button className='my-5 ring ring-2 ring-teal-300 shadow-2xl shadow-black bg-teal-300 text-gray-100 hover:bg-teal-400 hover:ring-teal-400 rounded py-0.5 px-1 font-bold w-20 text-lg'>Sign up</button>
        </div>
      </div>
    </>
  )
}

export default Register
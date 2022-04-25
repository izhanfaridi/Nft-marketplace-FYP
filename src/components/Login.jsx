import React from 'react'
import ParticlesBg from 'particles-bg'
import siteLogo from '../imgs/site-logo2.png'
import './styles.css'
import { Link } from 'react-router-dom'

const Login = () => {
  let width = window.innerWidth;

  return (
    <>
      {
        width && width<768 ?(
          <ParticlesBg type="cobweb" num={35} color="#2eb38b" bg={true}></ParticlesBg>
        )
        :(
          <ParticlesBg type="cobweb" color="#2eb38b" bg={true}></ParticlesBg>
        )
      }
      <div className='flex justify-center items-center h-screen'>
        <div className='login-div2 flex flex-col justify-center items-center h-auto w-80 rounded-lg bg-gradient-to-br from-teal-300 to-green-100'>
          <Link to="/"><img alt='Nft Gate' src={siteLogo} className='p-3'></img></Link>
          <input className='my-3.5 rounded p-2 w-3/4 focus:outline-0 ' type="email" name="username" id="username" placeholder='Username' />
          <input className='my-3.5 rounded p-2 w-3/4 b focus:outline-0' type="password" name="password" id="password" placeholder='Password' />
          <p className='my-4 text-gray-500'>Don't have an account? <Link to='/register' className='hover:underline decoration-teal-400 decoration-2 underline-offset-4 text-gray-800 font-semibold'>Create one here</Link></p>
          <button className='mt-2 mb-7 ring ring-2 ring-teal-300 shadow-2xl shadow-black bg-teal-300 text-gray-100 hover:bg-teal-400 hover:ring-teal-400 rounded py-0.5 px-1 font-bold w-20 text-lg'>Login</button>
        </div>
      </div>
    </>
  )
}

export default Login
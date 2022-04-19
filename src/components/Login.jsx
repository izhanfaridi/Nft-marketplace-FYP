import React from 'react'
import ParticlesBg from 'particles-bg'

const Login = () => {
  return (
      <>
        <ParticlesBg type="cobweb" color="#4a9b82" bg={true} ></ParticlesBg>
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center shadow-2xl shadow-green-300 h-80 w-64 rounded-lg bg-gradient-to-br from-teal-300 to-green-100 opacity-100'>
                <input className='my-3 rounded p-2 w-3/4 border border-solid border-gray-400 focus:border-0' type="email" name="username" id="username" placeholder='Username'/>
                <input className='my-3 rounded p-2 w-3/4 border border-solid border-gray-400 focus:border-0' type="password" name="password" id="password" placeholder='Password'/>
            </div>
        </div>
    </>
  )
}

export default Login
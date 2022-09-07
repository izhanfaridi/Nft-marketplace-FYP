import React, { useState , useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
import siteLogo from "../imgs/site-logo1.png"
import {BiWalletAlt} from 'react-icons/bi'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navElements=[
    {
      name: 'Explore',
      description: 'Dive into a Plethora of NFTs.',
      href: '/explore',
    },
    {
      name: 'My Profile',
      description: 'Explore your profile',
      href: '/profile',
    },
    
    {
      name: 'Minted NFTs',
      description: 'NFTs Not Listed, but minted',
      href: '/notListed',
    },
    {
      name: 'Mint',
      description: 'Mint your nft',
      href: '/mint',
    }
    
  ]
  return (
    <div>
      <nav className="bg-gray-800">
        <div className=" mx-auto flex items-center justify-between md:px-6 sm:px3 lg:px-8 ">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-16 w-full"
                src={siteLogo}
                alt="Nft Gate"
              />
            </Link>
          </div>
          {/* SEARCH */}
          <div className="flex justify-center">
          <div className=" xs:w-auto xl:w-full ml-20">
            <div className="input-group relative flex items-stretch xs:w-auto xl:w-full">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search For NFTs"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn inline-block px-6 mx-1 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
          {/* SEARCH */}

          <div className="flex items-center h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">

                  {navElements.map((e)=>(
                      <Link to={e.href} className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium sm:text-xs">
                        {e.name}
                    </Link>
                  ))}


                  {/* <Link to='/register'><button className="border-solid rounded bg-teal-500 px-3 py-1 font-medium text-white hover:bg-teal-700 ">
                    Sign Up
                  </button></Link> */}
                  <Link to='/login'><button className="border-solid rounded bg-white px-3 py-1 font-medium text-teal-500 ring-1 ring-teal-500 hover:bg-gray-700 hover:ring-gray-800 ">
                    Connect Wallet <BiWalletAlt className="inline mb-0.5 mx-0.5"/>
                  </button></Link>
                </div>
              </div>
            </div>
            <div className="mr-2 flex md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navElements.map((e)=>(
                      <Link to={e.href} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        {e.name}
                    </Link>
                  ))}
                
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;

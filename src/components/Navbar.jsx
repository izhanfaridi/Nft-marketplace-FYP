import React, { useState , useEffect} from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import { Transition } from "@headlessui/react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [render , setRender] = useState();
  const location = useLocation
  useEffect(() => {
    console.log(location)
  }, [location])
  

  const navElements=[
    {
      name: 'Explore',
      description: 'Dive into a Plethora of NFTs.',
      href: '/explore',
    },
    {
      name: 'My Profile',
      description: 'Explore your profile',
      href: '/explore',
    },
    {
      name: 'How To?',
      description: 'Dont know what youre in for see this help guide',
      href: '/explore',
    },
    {
      name: 'Create',
      description: 'Create your nft',
      href: '/explore',
    },
  ]
  return (
    <div>
      <nav className="bg-gray-800">
        <div className=" mx-auto flex items-center justify-between md:px-6 sm:px3 lg:px-8 ">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </Link>
          </div>
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">

                  {navElements.map((e)=>(
                      <Link to={e.href} className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium sm:text-xs">
                        {e.name}
                    </Link>
                  ))}


                  <button className="border-solid rounded bg-teal-500 px-3 py-1 font-medium text-white hover:bg-teal-700 ">
                    Sign Up
                  </button>
                  <Link to='/login'><button className="border-solid rounded bg-white px-3 py-1 font-medium text-teal-500 ring-1 ring-teal-500 hover:bg-gray-700 hover:ring-gray-800 ">
                    Sign In
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

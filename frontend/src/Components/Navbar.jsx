import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Registration } from './Registration';



export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const MobileLiClosed = () => {
    setIsOpen(false)
  }

  const navdata = [
    { path: '/', name: 'Home' },
    { path: "/about", name: 'About' },
    { path: '/service', name: 'Service' },
    { path: '/contact', name: 'Contact' },
    


  ];

  const location = useLocation();
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Add event listeners
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    // Clean up event listeners
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
   
    <div className=" bg-gray-50  sm:p-4 md:p-1 shadow-md font-thin italic ">

   
      <div className="flex items-center justify-between max-w-screen-xl mx-auto ">

      <div className="flex items-center p-1 ">
    <img
      src='logo1.png'
      alt='Logo'
      className='h-20 md:h-24 w-auto '
    />

    {/* <h1 className='text-5xl '>Logo</h1> */}
  </div>

        <div>
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mr-3 text-center ">RENBAN TRANSPORT</h1>

        </div>

        <div className="hidden md:flex font-bold mr-3 text-gray-900 ">
          <ul className="flex flex-row space-x-10 text-xl">


            {navdata.map((item) => (

              <li key={item.path} className="relative group font-bold">
                <Link
                  to={item.path}
                  className={`hover:text-red-700 cursor-pointer text-lg ${location.pathname === item.path ? 'text-red-700' : ''
                    }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-600 transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                    }`}
                ></span>
              </li>
            ))}

<Registration />
          </ul>
        </div>
        <div className="md:hidden flex items-center mr-8">
          <button onClick={handleMenuToggle} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>


        <div
          className={`fixed z-50 left-0 bg-gray-50 md:hidden transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}

        >
          <ul className={`flex flex-col space-y-4 p-4 font-bold ${isOpen ? 'mt-40' : ''}`} ref={dropdownRef} >

            {navdata.map((item) => (
              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  onClick={MobileLiClosed}
                  className={`hover:text-red-700 cursor-pointer text-lg ${location.pathname === item.path ? 'text-red-700' : ''
                    }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-800 transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                    }`}
                ></span>
              </li>

            ))}
            <div className=''> 
<Registration />
</div>
          </ul>


        </div>
      </div>
    </div>
    </>
  );
};

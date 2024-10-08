import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../CSS/Registration.css"; 

export const Registration = () => {
    const [isOpen, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = () => {
        setOpen(!isOpen);
        setIsVisible(true);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    const handleScroll = () => {
        setOpen(false);
    };
const MobileLiClosed =()=>{
    setOpen(false)
}
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const cardRef = useRef(null);

    const refhandleScroll = () => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false); 
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', refhandleScroll);
        return () => {
            window.removeEventListener('scroll', refhandleScroll);
        };
    }, []);
    return (
        <div className="relative z-20" ref={dropdownRef}>
            <div 
                className="flex items-center cursor-pointer "
                onClick={handleClick}
            >
               <div ref={cardRef} className={` w- cursor-pointer text-center  whitespace-nowrap  overflow-hidden font-bold    rounded-lg flex justify-center items-center 
                
                `}>
            <div className={`text-red-700  ${isVisible ? 'animate' : ''}`}>Registration</div>
            <div className={`ml-2 mr-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
        </div>
                
            </div>
            {isOpen && (
                <ul className="mt-2 p-1  list-none fixed bg-white z-50 border border-gray-300 rounded-md shadow-lg "
                onClick={MobileLiClosed}>
                     <Link to="/Driver Registration">
                        <li className="py-2 px-1 w-full hover:text-red-700 hover:rounded-lg  hover:bg-red-100 cursor-pointer transition-colors duration-300">Driver Registration</li>
                    </Link>
                    <Link to="/Vehicle Registration">
                        <li className="py-2 px-1 w-full hover:text-red-700 hover:rounded-lg  hover:bg-red-100 cursor-pointer transition-colors duration-300">Vehicle Registration</li>
                    </Link>
                   
                </ul>
            )}
        </div>
    );
};
import React from 'react';
import { FaFacebookF, FaInstagram, FaAmazon } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly gap-10">
        {/* Contact Information */}
        <ul className="flex flex-col space-y-3">
          <li>
            <h2 className="text-2xl font-semibold mb-2 text-red-700">Renban Transport</h2>
            <div className="text-base sm:text-lg mb-2">
              <p>Sco.21 Dashmesh Market Balongi</p>
              <p>Sas Nagar (Mohali) Punjab-160055</p>
            </div>
            <div className="text-base sm:text-lg">
              <p className="mb-1">Phone: <Link to="" className="text-blue-800 hover:underline">+91 172 505 2228</Link></p>
              <p className="mb-1">Mobile: 
                <Link to="" className="text-blue-800 hover:underline"> +91 896 882 7071</Link>, 
                <Link to="" className="text-blue-800 hover:underline"> +91 991 515 9671</Link>
              </p>
              <p className="mb-1">Email: <Link to="" className="text-blue-800 hover:underline">renbantransport@gmail.com</Link></p>
              <p className="mb-1">Website: <Link to="" className="text-blue-800 hover:underline">www.renbantransport.com</Link></p>
            </div>
          </li>
        </ul>

        {/* Registration Links */}
        <ul className="flex flex-col space-y-3">
          <li>
            <h3 className="text-2xl font-semibold mb-2 text-red-700">Our Registrations</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-center"><PiPaperPlaneRightFill className="text-red-700 mr-2" /><Link to="/IEC">Export-Import (IEC)</Link></li>
              <li className="flex items-center text-center"><PiPaperPlaneRightFill className="text-red-700 mr-2" /><Link to="/about">GST</Link></li>
              <li className="flex items-center text-center"><PiPaperPlaneRightFill className="text-red-700 mr-2" /><Link to="/udyam">Udyam</Link></li>
              <li className="flex items-center text-center"><PiPaperPlaneRightFill className="text-red-700 mr-2" /><Link to="/tan">TAN</Link></li>
              <li className="flex items-center text-center"><PiPaperPlaneRightFill className="text-red-700 mr-2" /><Link to="/about">Our Bank's</Link></li>
            </ul>
          </li>
        </ul>

        <ul className="flex flex-col items-center space-y-3">
          <li className="text-center">
            <img src='logo2.png' alt="Logo" className='h-36 w-auto' />
          </li>
          <li className="text-lg">1800 207 2777</li>
          <li className="flex space-x-4">
            <div className="hover:text-blue-700 text-blue-600 transition-colors text-2xl cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="hover:text-pink-700 text-pink-500 transition-colors text-2xl cursor-pointer">
              <FaInstagram />
            </div>
            <div className="hover:text-yellow-700 text-yellow-500 transition-colors text-2xl cursor-pointer">
              <FaAmazon />
            </div>
            <div className="hover:text-amber-700 text-amber-500 transition-colors text-2xl cursor-pointer">
              <SiFlipkart />
            </div>
          </li>
        </ul>
      </div>

      <div className="text-center mt-10 border-t border-red-700 pt-5">
        <p>Renban Transport. All rights reserved.</p>
        <p>sKDNKANSKNDKAS</p>
      </div>
    </div>
  );
};

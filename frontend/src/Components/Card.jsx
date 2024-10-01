import React from 'react';
import { FaTruck } from "react-icons/fa";

export const Card = ({ title, description, onClick }) => {
    return (
        <div className=''>
            <div
                className="bg-gray-50 transition-transform transform hover:-translate-y-2 active:translate-y-1 border-2 border-green-800 rounded-lg shadow-lg p-4 hover:bg-green-900 hover:shadow-2xl hover:text-white cursor-pointer ease-in-out duration-300 relative z-10"
                onClick={onClick}
            >
                <div className="flex flex-col items-center text-center">
                    <div className="bg-green-900 text-white p-4 rounded-br-full absolute top-0 left-0 transform translate-x-1/ -translate-y-1/">
                        <FaTruck className="text-3xl" />
                    </div>

                    <div className="mt-2">
                        <h3 className="text-xl font-semibold mb-4">{title}</h3>
                        {description && <p className="text-gray-300">{description}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

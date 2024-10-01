// import React from 'react';

// export const HomeCard = () => {
//   return (
//     <div className="flex flex-col md:flex-row border rounded-xl shadow-mdoverflow-hidden text-center justify-between">
//       {/* Image Container */}
//       <div className="flex  ">
//         <img
//           src="https://auto.mahindra.com/on/demandware.static/-/Sites-amc-Library/default/dwd02aee42/-/media/project/mahindra/dotcom/mahindra/configuratorassets/scv/bolero-pickup/pick-up-1-3t/868x420/left.png?extension=webp"
//           alt="Vehicle"
//           className="w-full h-auto object-cover"
//         />
//       </div>
//       {/* Text Container */}
//       <div className=" rounded-2xl bg-gray-50  p-6 absolute left-40  transform translate-x-full translate-y-full ">
//         <div className="text-center">

//           <p className="text-sm md:text-lg text-gray-800 max-w-md mx-auto">
//             This podcast features conversations with nonprofit leaders to brainstorm ways they can grow their organizations and do more good.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from 'react';

export const HomeCard = () => {
  const shadowStyle = {
    filter: 'drop-shadow(0 0px px green)' 
  };
  return (
    <div className="flex flex-col md:flex-row border rounded-xl shadow-md overflow-hidden text-center md:text-left">

      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src="https://auto.mahindra.com/on/demandware.static/-/Sites-amc-Library/default/dwd02aee42/-/media/project/mahindra/dotcom/mahindra/configuratorassets/scv/bolero-pickup/pick-up-1-3t/868x420/left.png?extension=webp"
          alt="Vehicle"
          className="w-full h-auto object-cover text-center"style={shadowStyle}
        />
      </div>

      <div className="flex flex-col justify-center p-6 md:p-8 bg-gray-50 w-full md:w-1/2">
        <p className="text-sm md:text-lg text-gray-800">
        Renban Transport has been a trusted name in goods supply across India for the last five years. We provide reliable and efficient transport services, ensuring your goods reach every corner of the country safely and on time. With a diverse fleet of vehicles, we cater to all your transportation needs, offering customized solutions for every client.
        </p>
      </div>
    </div>
  );
};

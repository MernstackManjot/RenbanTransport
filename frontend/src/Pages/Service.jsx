// import React from 'react'
// import { Card } from '../Components/Card'
// import { FaTruck } from "react-icons/fa";
// export const Service = () => {
//   return (
//   <>
//   <div>
//   <div className="p-6 sm:p-6 md:p-8 bg-grat-50 font-serif text-center items-center " >
//      <h1 className='text-3xl font-bold'>Our Service</h1>
//      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-5 text-center items-center ">

//        <Card title="Marketing"/>

//      </div>
//    </div>

//   </div>
//   </>
//   )
// }
import React, { useEffect } from 'react'

export const Service = () => {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <>
      <div className=' p-4 md:p-8 '>
        <h1 className='text-3xl font-bold mb-6 text-center text-red-700'>Service</h1>
        <div className='max-w-4xl mx-auto'>
          <p className='text-lg md:text-lg mb-6'>
            With five years of experience in goods supply across India, Reban Transport has become a trusted
            partner for businesses and individuals alike. We provide a wide range of trucks tailored to meet
            various transportation needs. Our fleet is equipped with the latest models to ensure safety,
            reliability, and efficiency in every delivery.

          </p>

          <div>
            <h3 className='text-2xl  font-semibold mb-4'>Our Fleet of Trucks
            </h3>
            <ul className='list-decimal  space-y-4 text-left ml-3'>
              <li><span className='font-bold'> Small Trucks (Pick-Up / Mini-Trucks)
              </span>
                <ul className='list-disc  space-y-2 pl-12 mt-1'>
                  <li><span className='font-semibold'>Models:
                  </span> Tata Ace, Mahindra Bolero, Ashok Leyland Dost. </li>
                  <li><span className='font-semibold'>Lifting Capacity:
                  </span> 500 kg to 2 tons </li>
                  <li><span className='font-semibold'>Ideal For:
                  </span>Transporting light cargo, e-commerce goods, and small shipments within
                    cities or to nearby destinations. </li></ul></li>

              <li><span className='font-bold'> Medium Trucks (LCVs - Light Commercial Vehicles)
              </span>
                <ul className='list-disc  space-y-2 pl-12 mt-1'>
                  <li><span className='font-semibold'>Models:
                  </span>  Tata 407, Eicher Pro 1049, Mahindra Furio</li>
                  <li><span className='font-semibold'>Lifting Capacity:
                  </span>  2 tons to 6 tons </li>
                  <li><span className='font-semibold'>Ideal For:
                  </span> Medium-sized goods, construction materials, and daily essentials over
                    mid-range distances. </li></ul></li>

              <li><span className='font-bold'> Heavy Trucks (ICVs - Intermediate Commercial Vehicles)

              </span>
                <ul className='list-disc  space-y-2 pl-12 mt-1'>
                  <li><span className='font-semibold'>Models:
                  </span>Tata LPT 1613, Ashok Leyland 1616, Eicher Pro 3015
                  </li>
                  <li><span className='font-semibold'>Lifting Capacity:
                  </span> 6 tons to 16 tons
                  </li>
                  <li><span className='font-semibold'>Ideal For:
                  </span> Bulk goods, agricultural products, and industrial equipment over long
                    distances.</li></ul></li>



              <li><span className='font-bold'> Trailers and Container Trucks
              </span>
                <ul className='list-disc  space-y-2 pl-12 mt-1'>
                  <li><span className='font-semibold'>Models:
                  </span>Tata Prima LX, Ashok Leyland U-3718, BharatBenz 4928T </li>
                  <li><span className='font-semibold'>Lifting Capacity:
                  </span> 20 tons to 40 tons</li>
                  <li><span className='font-semibold'>Ideal For:
                  </span> Transporting large containers, heavy machinery, vehicles, and oversized
                    cargo. </li></ul></li>



              <li><span className='font-bold'> Refrigerated Trucks
              </span>
                <ul className='list-disc  space-y-2 pl-12 mt-1'>
                  <li><span className='font-semibold'>Models:
                  </span>Tata Ultra T.11, Ashok Leyland Reefer, Eicher Reefer Pro </li>
                  <li><span className='font-semibold'>Lifting Capacity:
                  </span>Up to 10 tons</li>
                  <li><span className='font-semibold'>Ideal For:
                  </span> Perishable goods such as food products, medicines, and dairy items that
                    require temperature control.</li></ul></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

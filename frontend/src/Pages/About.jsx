import React, { useEffect } from 'react';

export const About = () => {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <div className='p-4 md:p-8'>
      <h1 className='text-3xl font-bold mb-6 text-center text-red-700'>About Us</h1>
      <div className='max-w-4xl mx-auto'>
        <p className='text-lg md:text-xl mb-8'>
          Renban Transport has been a trusted name in goods supply across India for the last five years. We
          provide reliable and efficient transport services, ensuring your goods reach every corner of the
          country safely and on time. With a diverse fleet of vehicles, we cater to all your transportation needs,
          offering customized solutions for every client.
        </p>

        <div>
          <h3 className='text-2xl font-semibold mb-6'>Why Choose Renban Transport?</h3>
          <ul className='list-decimal pl-5 space-y-4 text-base md:text-lg'>
            <li><span className='font-semibold'>Nationwide Reach:</span> With a robust network, we provide goods supply services to every corner of India, ensuring your products reach their destination on time.</li>
            <li><span className='font-semibold'>5+ Years of Experience:</span> Having served the industry for over 5 years, we understand the nuances of safe and efficient transportation, offering reliability you can trust.</li>
            <li><span className='font-semibold'>Diverse Fleet:</span> Our wide range of vehicles caters to all types of cargo, from small packages to bulk goods, allowing flexibility in meeting various transport needs.</li>
            <li><span className='font-semibold'>Professional Service:</span> Our dedicated team of experienced drivers and logistics professionals ensures that your goods are handled with care and delivered promptly.</li>
            <li><span className='font-semibold'>Cost-Effective Solutions:</span> We offer competitive pricing without compromising on service quality, helping you save on transportation costs.</li>
            <li><span className='font-semibold'>Real-Time Tracking:</span> Stay updated with the live tracking feature, offering peace of mind as you monitor the journey of your goods.</li>
            <li><span className='font-semibold'>Safety and Security:</span> We prioritize the safety of your cargo with secure handling and modern vehicles, reducing the risk of damage during transit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

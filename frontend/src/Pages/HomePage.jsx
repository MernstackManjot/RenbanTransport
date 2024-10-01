import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomeCard } from '../Components/HomeCard';

export const HomePage = () => {
    return (
        <>
            <div className="relative w-full overflow-hidden h-[150px] md:h-[300px] lg:h-[520px] sm:[300px] font-thin ">
                <Carousel
                    showArrows={false}
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    interval={2000}
                    showIndicators={false}
                    showStatus={false}
                >
                    <div>
                        <img
                            className="w-full h-full  object-cover"
                                  src="PIKUP.jpg"
                            alt="Mahindra Bolero"
                          
                        />
                    </div>
                    <div>
                        <img
                            className="w-full h-full object-cover"
                         src="https://www.ashokleyland.com/backend/wp-content/uploads/2024/04/01_Partner-4T_HSD_Banner-Desktop-1440x620px-1.jpg"
                              alt="Heavy Duty Trucks"
                        />
                    </div>
                    <div>
                        <img
                            className="w-full h-full object-cover"
                            src="https://www.ashokleyland.com/backend/wp-content/uploads/2024/02/Ecomet-Haulage-1_Banner-Desktop-1440x620px.jpg"
                            alt="Ecomet Haulage"
                        />
                    </div>
                    <div>
                        <img
                            className="w-full h-full object-cover"
                            src="PIKUP1.jpg"
                            alt="Ashok Leyland Web Banner"
                        />
                    </div>
                    <div>
                        <img
                            className="w-full h-full object-cover"
                            src='TRUCK3.jpg'
                            //  src="https://www.ashokleyland.com/backend/wp-content/uploads/2024/02/DESKTOP-Trucks-1440x799-1.jpg"
                         
                            alt="Partner 4T HSD"
                        />
                    </div>
                </Carousel>

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 text-white text-center p-4">
                    {/* <div>
                      
                        <h1 className="text-2xl md:text-4xl font-bold mb-4">Renban Transport</h1>
                        <p className="text-sm md:text-lg max-w-md mx-auto">
                            This podcast features conversations with nonprofit leaders to brainstorm ways they can grow their organizations and do more good.
                        </p>
                    </div> */}
                </div>
            </div>
            <HomeCard />
        </>
    );
};

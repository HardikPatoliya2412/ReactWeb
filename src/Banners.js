import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//import Image from 'next/image';
function Banners() {
  return (
    <div className="relative">
      <div className="absolute w-full   h-48 bg-gradient-to-t from-gray-0 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        
        <div>
          <img loading="lazy" src="/oneplus.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/oneplus1.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/oneplus2.jpg" alt="" />
        </div>
        

        
      </Carousel>
    </div>
  );
}

export default Banners;
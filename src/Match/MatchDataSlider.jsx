import React, { useEffect, useState } from "react";


export default function MatchDataSlider({currentSlide,setCurrentSlide,slides}) {
  


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [slides.length]);

  return (
    <div
      className=" w-full  aspect-[320/150]   mx-auto overflow-hidden "
     
     
     
    >
      {/* Slide container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="min-w-full h-full flex  justify-center"
          >
            {/* Card wrapper scaled responsively */}
            <div
              className="w-[90%] h-[80%]"
             
            >
              {slide}
            </div>
          </div>
        ))}
      </div>

   


    </div>
  );
}

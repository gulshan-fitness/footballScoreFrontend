import React, { useEffect, useState } from "react";
import VenueDetailsCard from "./VenueDetailsCard";
import MatchEndedCard from "./MatchEndedCard";
import MatchStatisticsCard from "./MatchStatisticsCard";
import MatchStatsCard from "./MatchStatsCard";

export default function MatchDataSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <VenueDetailsCard />,
    <MatchEndedCard/>,
    <MatchStatisticsCard/>,
    <MatchStatsCard/>
  ];


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

  return (
    <div
      className="relative w-full max-w-[320px] h-[150px] mx-auto overflow-hidden "
     
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

      {/* Navigation dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-9">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-5 h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

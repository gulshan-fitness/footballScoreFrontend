import React, { useContext, useEffect, useState } from 'react';
import MatchDataSlider from './MatchDataSlider';
import VenueDetailsCard from "./VenueDetailsCard";
import MatchEndedCard from "./MatchEndedCard";
import MatchStatisticsCard from "./MatchStatisticsCard";
import MatchStatsCard from "./MatchStatsCard";
import CircularStatsCard from "./CircularStatsCard";
import TeamPerformanceCard from "./TeamPerformanceCard";
import { Outlet, useLocation } from 'react-router-dom';
import MatchTabs from './MatchTabs';
import { Context } from '../Context_holder';
import MatchEvents from './MatchEvent';

export default function MatchDetails() {

  const{setmatchDetailsActivetab}=useContext(Context)
  
  const [pitchActive, setPitchActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const slides = [
    <VenueDetailsCard />,
    <MatchEndedCard/>,
    <MatchStatisticsCard/>,
    <MatchStatsCard/>,
  <CircularStatsCard/>,
  <TeamPerformanceCard/>,

  ];

  // GET "https://v3.football.api-sports.io/fixtures?id={matchid}" 

  const FootballPitchIcon = ({ size = 100, color = "#a855f7" }) => (
    <svg
      width={size}
      height={(size * 78) / 120}
      viewBox="0 0 120 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={color} strokeWidth="5" fill="none">
        <rect x="1" y="1" width="118" height="76" rx="2" />
        <line x1="60" y1="1" x2="60" y2="77" />
        <circle cx="60" cy="39" r="9" />
        <circle cx="60" cy="39" r="1.5" fill={color} />
        <rect x="1" y="24" width="14" height="30" />
        <rect x="1" y="30" width="6" height="18" />
        <circle cx="11" cy="39" r="1.5" fill={color} />
        <path d="M15,24 A10,15 0 0,1 15,54" />
        <rect x="105" y="24" width="14" height="30" />
        <rect x="113" y="30" width="6" height="18" />
        <circle cx="109" cy="39" r="1.5" fill={color} />
        <path d="M105,24 A10,15 0 0,0 105,54" />
      </g>
    </svg>
  );

  const match = {
    fixture: {
      referee: "Cüneyt Çakır",
      date: "2025-05-31T18:30:00+00:00",
      status: {
        long: "First Half",
        elapsed: 27,
      },
    },
    league: {
      name: "Süper Lig",
      country: "Turkey",
      logo: "https://media.api-sports.io/football/leagues/203.png",
    },
    teams: {
      home: {
        name: "Fenerbahce",
        logo: "https://media.api-sports.io/football/teams/192.png",
      },
      away: {
        name: "Konyaspor",
        logo: "https://media.api-sports.io/football/teams/196.png",
      },
    },
    goals: {
      home: 1,
      away: 0,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
    },
    events: [
      {
        time: { elapsed: 12 },
        team: { name: "Fenerbahce" },
        player: { name: "Enner Valencia" },
        assist: { name: "Mert Hakan Yandaş" },
        type: "Goal",
        detail: "Normal Goal",
      },
    ],
  };

  const { fixture, league, teams, score,  } = match;

     const location = useLocation();

  
;
     
    useEffect(() => {
  
      if (location?.pathname) {
       
     
        setmatchDetailsActivetab(location.pathname.split('/').filter(Boolean).pop());
      }

  
  
  
  
    }, [location?.pathname])


  return (
    <div className="py-4 px-4 bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#000000] text-gray-300 text-sm md:text-base">

     


      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <img src={league.logo} alt={league.name} className="h-6 md:h-8" />
          <div>
            <p className="text-purple-400 text-xs md:text-sm font-semibold">{league.name}</p>
            <p className="text-[10px] md:text-xs text-white">{league.country}</p>
          </div>
        </div>
        <button
          onClick={() => setPitchActive(!pitchActive)}
          className={`  ${pitchActive ? 'bg-green-600' : ''}`}
        >
          <FootballPitchIcon size={30} color="white" />
        </button>
      </div>

{
  pitchActive&&<div
  className="w-full mx-auto aspect-[321/197] my-2 max-w-[383px] max-h-[235px] px-2 py-1 relative flex justify-center bg-cover bg-center bg-no-repeat bg-[url('/image/football-field.webp')]"
>

<MatchDataSlider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} slides={slides} />
   {/* Navigation dots */}

      <div className="absolute bottom-[4px] left-0 right-0 flex justify-center gap-3">
        {slides?.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-7 h-2 rounded-full transition-all border border-black bg-white duration-300 ${
              currentSlide === idx ? "bg-yellow-500 scale-125" : ""
            }`}
          />
        ))}
      </div>
      </div>
}



      {/* Teams and Score */}
      <div className=" bg-black/20 px-4 py-3 rounded-lg border border-purple-800 mb-4">

  
 
<div className=' flex justify-between gap-2 items-center'>
  <div className="flex flex-col  items-center text-center">
          <img src={teams.home.logo} alt={teams.home.name} className="h-6 md:h-10" />
          <span className="text-white text-xs  truncate">{teams.home.name}</span>
        </div>

        <div className='font-bold text-lg text-center text-white'> {match.goals.home}-{match.goals.away}</div>
      
        <div className="flex flex-col items-center text-center">
          <img src={teams.away.logo} alt={teams.away.name} className="h-6 md:h-10" />
          <span className="text-white text-xs  truncate">{teams.away.name}</span>
        </div>
</div>
           <div className="text-purple-500 text-xs font-bold mt-1 text-center">
            {fixture?.status?.long} • {fixture?.status?.elapsed}'
          </div>
      </div>


      {/* Halftime Score */}
      <div className="text-center text-sm text-white font-semibold mb-4">
        Halftime: {score.halftime.home} - {score.halftime.away}
      </div>

<MatchTabs/>


<Outlet/>


    </div>
  );
}

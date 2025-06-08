import { useContext, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { IoCalendarClearOutline } from "react-icons/io5";
import { Context } from "../Context_holder";
import { useSearchParams } from "react-router-dom";
import FootballMatchCard from "./FootballMatchCard";


const matches = [
  {
    league: {
      id: 225,
      name: "Landesliga - Karnten",
      country: "Austria",
      logo: "https://media.api-sports.io/football/leagues/225.png",
      flag: "https://media.api-sports.io/flags/at.svg",
      season: 2024,
      round: "Kärnten - 30",
      standings: true,
    },
    fixtures: [
      {
        fixture: {
          id: 1247818,
          referee: null,
          timezone: "UTC",
          date: "2025-06-08T00:00:00+00:00",
          timestamp: 1749340800,
          periods: { first: null, second: null },
          venue: {
            id: 5860,
            name: "Sportplatz SV Dellach/Gail",
            city: "Dellach/Gail",
          },
          status: {
            long: "Match Cancelled",
            short: "CANC",
            elapsed: null,
            extra: null,
          },
        },
        teams: {
          home: {
            id: 8274,
            logo: "https://media.api-sports.io/football/teams/8274.png",
          },
          away: {
            id: 24462,
            logo: "https://media.api-sports.io/football/teams/24462.png",
          },
        },
        goals: { home: null, away: null },
        score: {
          halftime: { home: null, away: null },
          fulltime: { home: null, away: null },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null },
        },
      },
    ],
  },
  {
    league: {
      id: 140,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/140.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      round: "Regular Season - 38",
      standings: true,
    },
    fixtures: [
      {
        fixture: {
          id: 1247819,
          referee: "Michael Oliver",
          timezone: "UTC",
          date: "2025-06-08T16:30:00+00:00",
          timestamp: 1749361800,
          periods: { first: null, second: null },
          venue: {
            id: 525,
            name: "Old Trafford",
            city: "Manchester",
          },
          status: {
            long: "Match Scheduled",
            short: "NS",
            elapsed: null,
            extra: null,
          },
        },
        teams: {
          home: {
            id: 33,
            logo: "https://media.api-sports.io/football/teams/33.png",
          },
          away: {
            id: 50,
            logo: "https://media.api-sports.io/football/teams/50.png",
          },
        },
        goals: { home: null, away: null },
        score: {
          halftime: { home: null, away: null },
          fulltime: { home: null, away: null },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null },
        },
      },
    ],
  },
  {
    league: {
      id: 135,
      name: "Serie A",
      country: "Italy",
      logo: "https://media.api-sports.io/football/leagues/135.png",
      flag: "https://media.api-sports.io/flags/it.svg",
      season: 2024,
      round: "Regular Season - 38",
      standings: true,
    },
    fixtures: [
      {
        fixture: {
          id: 1247820,
          referee: null,
          timezone: "UTC",
          date: "2025-06-08T19:45:00+00:00",
          timestamp: 1749371100,
          periods: { first: null, second: null },
          venue: {
            id: 512,
            name: "San Siro",
            city: "Milan",
          },
          status: {
            long: "Match Scheduled",
            short: "NS",
            elapsed: null,
            extra: null,
          },
        },
        teams: {
          home: {
            id: 489,
            logo: "https://media.api-sports.io/football/teams/489.png",
          },
          away: {
            id: 496,
            logo: "https://media.api-sports.io/football/teams/496.png",
          },
        },
        goals: { home: null, away: null },
        score: {
          halftime: { home: null, away: null },
          fulltime: { home: null, away: null },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null },
        },
      },
    ],
  },
];


export default function FootballScores() {


const{Matches,MatchesFetch}=useContext(Context)


const [date, setDate] = useState(new Date());

const [Querydate, setQuerydate] = useState("");
const [LiveQuery, setLiveQuery] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const PAGE_SIZE = 1;
const [page, setPage] = useState(1);


  const formatDate = (d) => {
    // Format date to YYYY-MM-DD
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

 const formatDate2 = (d) => {
  const today = new Date();
  const target = new Date(d);

  // Normalize both dates to midnight for accurate comparison
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);

  const diffInDays = (target - today) / (1000 * 60 * 60 * 24);

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Tomorrow";
  if (diffInDays === -1) return "Yesterday";

  return target.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};





    useEffect(
      ()=>{

        if(date)setQuerydate(formatDate(date))

      },

      [date]
    )

    
    useEffect(
      ()=>{
        const query={}
        
       LiveQuery? query.live="all":query.date=Querydate&&Querydate

      Object.keys(query).length!=0&& setSearchParams(query)

   MatchesFetch(null,window.location.search.toString())

      },

      [Querydate,LiveQuery]
    )


  const handlePrev = () => {
    const prev = new Date(date);
    prev.setDate(prev.getDate() - 1);
    setDate(prev);
  };

  const handleNext = () => {
    const next = new Date(date);
    next.setDate(next.getDate() + 1);
    setDate(next);
  };





const visibleMatches = matches?.slice(0, PAGE_SIZE * page);

console.log(Matches.length);

  return (
    <div className="bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#000000] text-gray-300 min-h-screen py-4 sm:py-6 md:py-10 px-4 font-sans selection:bg-purple-700 selection:text-white">
      {/* Header */}
      <header className="flex items-center justify-between max-w-5xl mx-auto mb-8 ">
        <span
          className={` text-white text-xs sm:text-sm md:text-base px-3 py-1 rounded-full font-semibold tracking-wide  border   hover:shadow-[0_0_20px_rgba(128,0,255,0.7)]
                    transition-shadow duration-500 cursor-pointer  ${LiveQuery&& "bg-purple-700/90 border-0   shadow-[0_0_20px_rgba(128,0,255,0.7)]" }`}
                    onClick={()=>{setLiveQuery(!LiveQuery)
                     
                    }}
        >
          LIVE
        </span>

        <button
          aria-label="Previous day"
          className="text-white hover:text-purple-600 transition-colors duration-300  "
        onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>

        <span className=" sm:text-sm  text-[10px] font-extrabold tracking-wide text-white drop-shadow-lg">
          {date&&formatDate2(date)}
        </span>

        <button
          aria-label="Next day"
          className="text-white hover:text-purple-600 transition-colors duration-300  "
        onClick={handleNext}
        >
          <FaChevronRight />
        </button>

     

<button
  className="relative p-3 rounded-full bg-purple-900/30 backdrop-blur-md border border-purple-700/40 hover:bg-purple-900/60
    shadow-lg hover:shadow-[0_0_20px_rgba(128,0,255,0.7)]
    group transition-shadow duration-500 cursor-pointer select-none"
>
  {/* Calendar Icon */}

  <IoCalendarClearOutline className="text-3xl text-purple-400" />

  {/* Centered Date */}
  <span className="absolute inset-0 top-2 flex items-center justify-center text-[12px] font-semibold group-hover:text-purple-400 text-white">
    {new Date().getDate()}
  </span>
</button>



      </header>

      {/* Matches by League */}
      <main className="max-w-5xl mx-auto space-y-10 px-2  h-screen overflow-y-auto   thin-scrollbar">
        {visibleMatches?.map(({ league, fixtures },index) => (
          <div key={index}>

            <FootballMatchCard league={league} fixtures={fixtures} />

          </div>
          
        ))}
                       {visibleMatches?.length < Matches.length && (
      <button
        onClick={() => setPage(page + 1)}
        className="my-4 px-4 block  text-sm mx-auto py-1 shadow-md backdrop-blur-md hover:shadow-[0_0_12px_rgba(128,0,255,0.6)]
              transition-shadow duration-500  border  rounded-md text-white"
      >
        Load More...
      </button>
    )}

 
      </main>
 
    </div>
  );
}

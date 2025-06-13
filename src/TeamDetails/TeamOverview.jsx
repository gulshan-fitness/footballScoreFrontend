import React, { useContext } from 'react'
import { Context } from '../Context_holder';
import FixtureCard from '../LeagueDetails/FixtureCard';
import { Link, useParams } from 'react-router-dom';

export default function TeamOverview() {
  const { TeamMatches } = useContext(Context);
  const{id,season}=useParams()

  const data = [
    {
      fixture: {
        id: 867954,
        referee: "D. Aytekin",
        date: "2025-06-20T15:30:00+00:00",
        venue: {
          id: 1234,
          name: "Red Bull Arena",
          city: "Leipzig"
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 78,
        name: "Bundesliga",
        round: "Matchday 1"
      },
      teams: {
        home: {
          id: 686,
          name: "RB Leipzig",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: true
        },
        away: {
          id: 165,
          name: "VfB Stuttgart",
          logo: "https://media.api-sports.io/football/teams/165.png",
          winner: false
        }
      },
      goals: {
        home: 5,
        away: 1
      }
    },
    {
      fixture: {
        id: 869021,
        referee: "A. Taylor",
        date: "2025-06-16T20:00:00+00:00",
        venue: {
          id: 892,
          name: "Etihad Stadium",
          city: "Manchester"
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 2,
        name: "UEFA Champions League",
        round: "Group Stage"
      },
      teams: {
        home: {
          id: 50,
          name: "Manchester City",
          logo: "https://media.api-sports.io/football/teams/50.png",
          winner: false
        },
        away: {
          id: 686,
          name: "RB Leipzig",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: false
        }
      },
      goals: {
        home: 2,
        away: 2
      }
    },
    {
      fixture: {
        id: 871205,
        referee: "F. Zwayer",
        date: "2025-06-15T18:30:00+00:00",
        venue: {
          id: 1234,
          name: "Red Bull Arena",
          city: "Leipzig"
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 81,
        name: "DFB-Pokal",
        round: "Quarter-finals"
      },
      teams: {
        home: {
          id: 686,
          name: "RB Leipzig",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: false
        },
        away: {
          id: 157,
          name: "Bayern Munich",
          logo: "https://media.api-sports.io/football/teams/157.png",
          winner: true
        }
      },
      goals: {
        home: 1,
        away: 3
      }
    }
  ];

  
const nextMatch = data?.filter(item => new Date(item?.fixture?.date) > new Date())  
.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date))[0] || null;

    const matchDate = (fixturedate)=>{
    const date=  new Date(fixturedate).toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

        return date

    } 
 

console.log(nextMatch,);


  return (
    <div>
      <h2 className='uppercase text-[10px] font-semibold mb-2'>Next Match</h2>
 <div
  key={nextMatch?.fixture?.id}
  className="flex items-center justify-between px-3  py-2 rounded-lg border border-purple-800 shadow-md hover:shadow-[0_0_30px_rgba(128,0,255,0.3)] transition-all duration-300 space-x-3 sm:space-x-5 "
>
  {/* Home Team */}
  <div className="flex flex-col items-center w-1/3">
    <img
      src={nextMatch?.teams?.home?.logo}
      alt={nextMatch?.teams?.home?.name}
      className="w-7 h-7 sm:w-10 sm:h-10"
    />
    <p className="text-[10px] sm:text-xs text-white text-center mt-1 leading-tight">
      {nextMatch?.teams?.home?.name}
    </p>
  </div>

  {/* Score + Date */}
  <div className="flex flex-col items-center w-1/3">
    <p className="text-sm sm:text-base font-semibold text-center text-white">
      {matchDate(nextMatch?.fixture?.date)}
    </p>
  
  </div>

  {/* Away Team */}
  <div className="flex flex-col items-center w-1/3">
    <img
      src={nextMatch?.teams?.away?.logo}
      alt={nextMatch?.teams?.away?.name}
      className="w-7 h-7 sm:w-10 sm:h-10"
    />
    <p className="text-[10px] sm:text-xs text-white text-center mt-1 leading-tight">
      {nextMatch?.teams?.away?.name}
    </p>
  </div>
</div>




<h2 className='uppercase text-[10px] font-semibold mt-5 mb-2'>From</h2>
      {data?.map((data,index)=>
      <div key={index}>
<FixtureCard  match={data}/>
      </div>
      )}

       <Link
          to={`/team/${id}/${season}/matches`}
          className="block text-center w-full rounded-md border border-purple-500 text-xs py-1 hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition"
          onClick={() => setLeagueDetailsActivetab?.("standings")}
        >
          See All
        </Link>

        
      

    </div>
  );
}

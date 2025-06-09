import React, { useContext, useState } from 'react'
import FixtureCard from './FixtureCard';
import { Context } from '../Context_holder';

export default function LeagueFixtures()
{
  const{UpcomingMatches}=useContext(Context)
    const PAGE_SIZE=10
  const [page, setPage] = useState(1);
  
    const visibleMatches=  UpcomingMatches?.slice(0,PAGE_SIZE*page)

      // GET https://v3.football.api-sports.io/fixtures?league=203&season=2025&next=100

  const nextfixtures = [
  {
    fixture: {
      id: 1043257,
      referee: "J. Smith",
      timezone: "UTC",
      date: "2025-03-15T14:00:00+00:00",
      timestamp: 1742032800,
      periods: {
        first: 1742032800,
        second: 1742036400
      },
      venue: {
        id: 512,
        name: "Stadium One",
        city: "City A"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 203,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2025,
      round: "Regular Season - 28"
    },
    teams: {
      home: {
        id: 50,
        name: "Team A",
        logo: "https://media.api-sports.io/football/teams/50.png",
        winner: null
      },
      away: {
        id: 55,
        name: "Team B",
        logo: "https://media.api-sports.io/football/teams/55.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1043258,
      referee: "M. Johnson",
      timezone: "UTC",
      date: "2025-03-22T17:30:00+00:00",
      timestamp: 1742643000,
      periods: {
        first: 1742643000,
        second: 1742646600
      },
      venue: {
        id: 513,
        name: "Stadium Two",
        city: "City B"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 203,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2025,
      round: "Regular Season - 29"
    },
    teams: {
      home: {
        id: 52,
        name: "Team C",
        logo: "https://media.api-sports.io/football/teams/52.png",
        winner: null
      },
      away: {
        id: 50,
        name: "Team A",
        logo: "https://media.api-sports.io/football/teams/50.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1043259,
      referee: "A. Williams",
      timezone: "UTC",
      date: "2025-04-05T15:00:00+00:00",
      timestamp: 1743858000,
      periods: {
        first: 1743858000,
        second: 1743861600
      },
      venue: {
        id: 514,
        name: "Stadium Three",
        city: "City C"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 203,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2025,
      round: "Regular Season - 30"
    },
    teams: {
      home: {
        id: 55,
        name: "Team B",
        logo: "https://media.api-sports.io/football/teams/55.png",
        winner: null
      },
      away: {
        id: 60,
        name: "Team D",
        logo: "https://media.api-sports.io/football/teams/60.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1043260,
      referee: "S. Brown",
      timezone: "UTC",
      date: "2025-04-12T12:45:00+00:00",
      timestamp: 1744461900,
      periods: {
        first: 1744461900,
        second: 1744465500
      },
      venue: {
        id: 515,
        name: "Stadium Four",
        city: "City D"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 203,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2025,
      round: "Regular Season - 31"
    },
    teams: {
      home: {
        id: 60,
        name: "Team D",
        logo: "https://media.api-sports.io/football/teams/60.png",
        winner: null
      },
      away: {
        id: 52,
        name: "Team C",
        logo: "https://media.api-sports.io/football/teams/52.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  }
]
  return (
    <div>{
        visibleMatches?.map(
            (data,index)=><div  key={index}>
                  <FixtureCard  match={data}/>
            </div>
            
              
        )
     
        
        }
        
        
      {visibleMatches?.length < UpcomingMatches?.length && (
      <button
        onClick={() => setPage(page + 1)}
        className="my-4 px-4 block  text-sm mx-auto py-1 shadow-md backdrop-blur-md hover:shadow-[0_0_12px_rgba(128,0,255,0.6)]
              transition-shadow duration-500  border  rounded-md text-white"
      >
        Load More...
      </button>
    )}
        </div>
  )
}

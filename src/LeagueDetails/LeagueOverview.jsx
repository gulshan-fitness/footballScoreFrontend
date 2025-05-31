import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {  FaChevronRight } from "react-icons/fa";
import FixtureCard from './FixtureCard';
import { Context } from '../Context_holder';

export default function LeagueOverview() {
const{setLeagueDetailsActivetab}=useContext(Context)

    // GET https://v3.football.api-sports.io/fixtures?league=203&season=2025&next=100
    // GET https://v3.football.api-sports.io/fixtures?league=203&season=2025&last=100

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
];

const pastFixtures = [
  {
    fixture: {
      id: 1048572,
      referee: "Wilton Sampaio",
      timezone: "UTC",
      date: "2025-05-28T19:00:00+00:00",
      timestamp: 1748545200,
      periods: {
        first: 1748545200,
        second: 1748548800,
      },
      venue: {
        id: 284,
        name: "Allianz Parque",
        city: "São Paulo",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 203,
      name: "Campeonato Brasileiro Série A",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2025,
      round: "Regular Season - 12",
    },
    teams: {
      home: {
        id: 131,
        name: "Palmeiras",
        logo: "https://media.api-sports.io/football/teams/131.png",
        winner: true,
      },
      away: {
        id: 134,
        name: "Santos",
        logo: "https://media.api-sports.io/football/teams/134.png",
        winner: false,
      },
    },
    goals: {
      home: 2,
      away: 0,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
      fulltime: {
        home: 2,
        away: 0,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1048573,
      referee: "Raphael Claus",
      timezone: "UTC",
      date: "2025-05-25T21:30:00+00:00",
      timestamp: 1748295000,
      periods: {
        first: 1748295000,
        second: 1748298600,
      },
      venue: {
        id: 262,
        name: "Maracanã",
        city: "Rio de Janeiro",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 203,
      name: "Campeonato Brasileiro Série A",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2025,
      round: "Regular Season - 11",
    },
    teams: {
      home: {
        id: 135,
        name: "Flamengo",
        logo: "https://media.api-sports.io/football/teams/135.png",
        winner: true,
      },
      away: {
        id: 136,
        name: "Atlético Mineiro",
        logo: "https://media.api-sports.io/football/teams/136.png",
        winner: false,
      },
    },
    goals: {
      home: 3,
      away: 1,
    },
    score: {
      halftime: {
        home: 1,
        away: 1,
      },
      fulltime: {
        home: 3,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1048574,
      referee: "Anderson Daronco",
      timezone: "UTC",
      date: "2025-05-23T00:30:00+00:00",
      timestamp: 1748104200,
      periods: {
        first: 1748104200,
        second: 1748107800,
      },
      venue: {
        id: 273,
        name: "Arena da Baixada",
        city: "Curitiba",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 203,
      name: "Campeonato Brasileiro Série A",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2025,
      round: "Regular Season - 11",
    },
    teams: {
      home: {
        id: 137,
        name: "Athletico Paranaense",
        logo: "https://media.api-sports.io/football/teams/137.png",
        winner: false,
      },
      away: {
        id: 138,
        name: "Internacional",
        logo: "https://media.api-sports.io/football/teams/138.png",
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 1,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1048575,
      referee: "Bruno Arleu",
      timezone: "UTC",
      date: "2025-05-20T22:00:00+00:00",
      timestamp: 1747857600,
      periods: {
        first: 1747857600,
        second: 1747861200,
      },
      venue: {
        id: 275,
        name: "Arena Corinthians",
        city: "São Paulo",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 203,
      name: "Campeonato Brasileiro Série A",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2025,
      round: "Regular Season - 10",
    },
    teams: {
      home: {
        id: 133,
        name: "Corinthians",
        logo: "https://media.api-sports.io/football/teams/133.png",
        winner: null,
      },
      away: {
        id: 139,
        name: "São Paulo",
        logo: "https://media.api-sports.io/football/teams/139.png",
        winner: null,
      },
    },
    goals: {
      home: 1,
      away: 1,
    },
    score: {
      halftime: {
        home: 0,
        away: 1,
      },
      fulltime: {
        home: 1,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1048576,
      referee: "Flavio Rodrigues",
      timezone: "UTC",
      date: "2025-05-18T19:00:00+00:00",
      timestamp: 1747676400,
      periods: {
        first: 1747676400,
        second: 1747680000,
      },
      venue: {
        id: 277,
        name: "Estádio Beira-Rio",
        city: "Porto Alegre",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 203,
      name: "Campeonato Brasileiro Série A",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2025,
      round: "Regular Season - 10",
    },
    teams: {
      home: {
        id: 140,
        name: "Grêmio",
        logo: "https://media.api-sports.io/football/teams/140.png",
        winner: true,
      },
      away: {
        id: 141,
        name: "Fluminense",
        logo: "https://media.api-sports.io/football/teams/141.png",
        winner: false,
      },
    },
    goals: {
      home: 2,
      away: 1,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
      fulltime: {
        home: 2,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
]



  return (

    <div>
         

      <div className="space-y-3 mb-6" >

<Link  to={"/leaguedetails/faixtures"} className="flex justify-between items-center px-2 "  onClick={()=>setLeagueDetailsActivetab("Fixtures")}>
      <button className="text-md text-white font-semibold ">Fixtures</button>


     <button>
                   <FaChevronRight className="text-xs sm:text-sm text-white" />
                </button>
</Link>
        {nextfixtures?.map((match, index) => (
            <div key={index}>

                    <FixtureCard match={match} />
            </div>
     
        ))}



      </div>

        <div className="space-y-3 mb-6" >

<Link to={"/leaguedetails/results"} className="flex justify-between items-center px-2 " 
onClick={()=>setLeagueDetailsActivetab("Results")}>
      <button className="text-md text-white font-semibold ">Results
</button>


     <button>
                   <FaChevronRight className="text-xs sm:text-sm text-white" />
                </button>
</Link>
        {pastFixtures?.map((match, index) => (
            <div key={index}>

                    <FixtureCard match={match} />
            </div>
     
        ))}



      </div>


    </div>


  )
}

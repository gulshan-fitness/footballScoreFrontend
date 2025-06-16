import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {FaCaretDown } from "react-icons/fa";
import { useContext } from 'react';
import { Context } from '../Context_holder';
import PlayerstatsCard from './PlayerstatsCard';

export default function PlayersStats() {

    const{ PlayerstatsFetch,StandingsFetch}=useContext(Context)

    const {season}=useParams()

    const [wellStructuredData, setWellStructuredData] = useState([]); 
     const [stats, setstats] = useState(); 
         const [SelectedLeague, setSelectedLeague] = useState(null);
    
            const [LeaguesPopUps, setLeaguesPopUps] = useState(false);
              const [Tabs] = useState(["all","top scorers","assists","shots on target","yellow cards","red cards" ])
            const [activeTab, setActiveTab] = useState('all');

    const data = [
  {
    fixture: {
      id: 1150673,
      referee: "John Brooks",
      timezone: "UTC",
      date: "2025-07-15T19:00:00+00:00",
      timestamp: 1752606000,
      venue: {
        id: 555,
        name: "Allianz Arena",
        city: "Munich"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 167,
      name: "Bundesliga",
      country: "Germany",
      logo: "https://media.api-sports.io/football/leagues/78.png",
      flag: "https://media.api-sports.io/flags/de.svg",
      season: 2025,
      round: "Regular Season - 1"
    },
    teams: {
      home: {
        id: 157,
        name: "Bayern Munich",
        logo: "https://media.api-sports.io/football/teams/157.png",
        winner: null
      },
      away: {
        id: 686,
        name: "FC Heidenheim",
        logo: "https://media.api-sports.io/football/teams/686.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    }
  },
  {
    fixture: {
      id: 2150673,
      referee: "Michael Oliver",
      timezone: "UTC",
      date: "2025-07-20T16:00:00+00:00",
      timestamp: 1753056000,
      venue: {
        id: 600,
        name: "Old Trafford",
        city: "Manchester"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id:157,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2025,
      round: "Regular Season - 1"
    },
    teams: {
      home: {
        id: 33,
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png",
        winner: null
      },
      away: {
        id: 49,
        name: "Chelsea",
        logo: "https://media.api-sports.io/football/teams/49.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    }
  },
  {
    fixture: {
      id: 3150673,
      referee: "Daniele Orsato",
      timezone: "UTC",
      date: "2025-08-01T18:30:00+00:00",
      timestamp: 1754044200,
      venue: {
        id: 123,
        name: "San Siro",
        city: "Milan"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 135,
      name: "Serie A",
      country: "Italy",
      logo: "https://media.api-sports.io/football/leagues/135.png",
      flag: "https://media.api-sports.io/flags/it.svg",
      season: 2025,
      round: "Regular Season - 1"
    },
    teams: {
      home: {
        id: 489,
        name: "AC Milan",
        logo: "https://media.api-sports.io/football/teams/489.png",
        winner: null
      },
      away: {
        id: 496,
        name: "Juventus",
        logo: "https://media.api-sports.io/football/teams/496.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    }
  },
  {
    fixture: {
      id: 4150673,
      referee: "José Sánchez",
      timezone: "UTC",
      date: "2025-08-05T20:00:00+00:00",
      timestamp: 1754395200,
      venue: {
        id: 232,
        name: "Camp Nou",
        city: "Barcelona"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media.api-sports.io/football/leagues/140.png",
      flag: "https://media.api-sports.io/flags/es.svg",
      season: 2025,
      round: "Regular Season - 1"
    },
    teams: {
      home: {
        id: 529,
        name: "Barcelona",
        logo: "https://media.api-sports.io/football/teams/529.png",
        winner: null
      },
      away: {
        id: 541,
        name: "Real Madrid",
        logo: "https://media.api-sports.io/football/teams/541.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    }
  }
];





useEffect(
    ()=>{

       

  const structured = [];

    data?.forEach((match) => {
      const existingLeague = structured.find(
        (entry) => entry.league?.id === match.league?.id
      );

      const score = match.score||{};

      const fixtureData = {
        fixture: match.fixture,
        teams: match.teams,
        goals: match.goals,
        score: score || null,
        halftime: score.halftime || null,
        fulltime: score.fulltime || null,
        extratime: score.extratime || null,
        penalty: score.penalty || null
      };

      if (existingLeague) {
        existingLeague.fixtures.push(fixtureData);
      } else {
        structured.push({
          league: match.league,
          fixtures: [fixtureData]
        });
      }
    });

    setWellStructuredData(structured);

    },[]
)

useEffect(
    ()=>{

setSelectedLeague({logo: wellStructuredData[0]?.league?.logo,name:wellStructuredData[0]?.league?.name,id:wellStructuredData[0]?.league?.id})

    },[wellStructuredData]
)



const Playerstats=
  [
  {
    player: {
      id: 22,
      name: "J. Bruun Larsen",
      firstname: "Jacob",
      lastname: "Bruun Larsen",
      age: 27,
      birth: {
        date: "1998-09-19",
        place: "Lyngby",
        country: "Denmark"
      },
      nationality: "Denmark",
      height: "183 cm",
      weight: "77 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/22.png"
    },
    statistics: [
      {
        team: {
          id: 167,
          name: "1899 Hoffenheim",
          logo: "https://media.api-sports.io/football/teams/167.png"
        },
        league: {
          id: 78,
          name: "Bundesliga",
          country: "Germany",
          logo: "https://media.api-sports.io/football/leagues/78.png",
          flag: "https://media.api-sports.io/flags/de.svg",
          season: 2023
        },
        games: {
          appearences: 24,
          lineups: 18,
          minutes: 1567,
          number: 7,
          position: "Attacker",
          rating: "7.2",
          captain: false
        },
        substitutes: {
          in: 6,
          out: 12,
          bench: 8
        },
        shots: {
          total: 42,
          on: 23
        },
        goals: {
          total: 8,
          conceded: 0,
          assists: 5,
          saves: null
        },
        passes: {
          total: 587,
          key: 28,
          accuracy: "78%"
        },
        tackles: {
          total: 14,
          blocks: 3,
          interceptions: 7
        },
        duels: {
          total: 183,
          won: 97
        },
        dribbles: {
          attempts: 64,
          success: 38,
          past: null
        },
        fouls: {
          drawn: 32,
          committed: 18
        },
        cards: {
          yellow: 3,
          yellowred: 0,
          red: 7
        },
        penalty: {
          won: 2,
          commited: 0,
          scored: 1,
          missed: 0,
          saved: null
        }
      }
    ]
  },
  {
    player: {
      id: 99,
      name: "R. Pierre-Gabriel",
      firstname: "Ronaël Julien",
      lastname: "Pierre-Gabriel",
      age: 27,
      birth: {
        date: "1998-06-13",
        place: "Paris",
        country: "France"
      },
      nationality: "France",
      height: "177 cm",
      weight: "76 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/99.png"
    },
    statistics: [
      {
        team: {
          id: 164,
          name: "FSV Mainz 05",
          logo: "https://media.api-sports.io/football/teams/164.png"
        },
        league: {
          id: 78,
          name: "Bundesliga",
          country: "Germany",
          logo: "https://media.api-sports.io/football/leagues/78.png",
          flag: "https://media.api-sports.io/flags/de.svg",
          season: 2023
        },
        games: {
          appearences: 28,
          lineups: 25,
          minutes: 2189,
          number: 2,
          position: "Defender",
          rating: "6.9",
          captain: false
        },
        substitutes: {
          in: 3,
          out: 5,
          bench: 7
        },
        shots: {
          total: 8,
          on: 2
        },
        goals: {
          total: 1,
          conceded: null,
          assists: 3,
          saves: null
        },
        passes: {
          total: 1124,
          key: 12,
          accuracy: "82%"
        },
        tackles: {
          total: 53,
          blocks: 18,
          interceptions: 42
        },
        duels: {
          total: 247,
          won: 143
        },
        dribbles: {
          attempts: 22,
          success: 14,
          past: 28
        },
        fouls: {
          drawn: 24,
          committed: 31
        },
        cards: {
          yellow: 7,
          yellowred: 1,
          red: 2
        },
        penalty: {
          won: 0,
          commited: 1,
          scored: 0,
          missed: 0,
          saved: null
        }
      }
    ]
  },
  {
    player: {
      id: 154,
      name: "J. Musiala",
      firstname: "Jamal",
      lastname: "Musiala",
      age: 21,
      birth: {
        date: "2003-02-26",
        place: "Stuttgart",
        country: "Germany"
      },
      nationality: "Germany",
      height: "184 cm",
      weight: "75 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/154.png"
    },
    statistics: [
      {
        team: {
          id: 157,
          name: "Bayern Munich",
          logo: "https://media.api-sports.io/football/teams/157.png"
        },
        league: {
          id: 78,
          name: "Bundesliga",
          country: "Germany",
          logo: "https://media.api-sports.io/football/leagues/78.png",
          flag: "https://media.api-sports.io/flags/de.svg",
          season: 2023
        },
        games: {
          appearences: 30,
          lineups: 27,
          minutes: 2345,
          number: 42,
          position: "Midfielder",
          rating: "7.8",
          captain: false
        },
        substitutes: {
          in: 3,
          out: 8,
          bench: 3
        },
        shots: {
          total: 68,
          on: 39
        },
        goals: {
          total: 12,
          conceded: null,
          assists: 10,
          saves: null
        },
        passes: {
          total: 1589,
          key: 64,
          accuracy: "88%"
        },
        tackles: {
          total: 32,
          blocks: 7,
          interceptions: 28
        },
        duels: {
          total: 312,
          won: 187
        },
        dribbles: {
          attempts: 142,
          success: 98,
          past: null
        },
        fouls: {
          drawn: 45,
          committed: 22
        },
        cards: {
          yellow: 2,
          yellowred: 0,
          red: 1
        },
        penalty: {
          won: 3,
          commited: 0,
          scored: 2,
          missed: 0,
          saved: null
        }
      }
    ]
  }
]






useEffect(() => {
  if (!Playerstats?.length) return;

  const normalized = Playerstats.map(playerObj => {
    const player = playerObj.player;
    const stats = playerObj.statistics?.[0] || {};

    return {
      id: player.id,
      name: player.name,
      photo: player.photo,
      team: stats.team?.name || "Unknown",
      team_id: stats.team?.id || "",
      teamLogo: stats.team?.logo || "",
      goals: Number(stats.goals?.total) || 0,
      assists: Number(stats.goals?.assists) || 0,
      shotsOnTarget: Number(stats.shots?.on) || 0,
      yellowCards: Number(stats.cards?.yellow) || 0,
      redCards: Number(stats.cards?.red) || 0,
      position: stats.games?.position ?? "Unknown",
    };
  });

  const filtered = normalized
    .filter(player =>
      activeTab === "top scorers" ? player.goals > 0 :
      activeTab === "assists" ? player.assists > 0 :
      activeTab === "shots on target" ? player.shotsOnTarget > 0 :
      activeTab === "yellow cards" ? player.yellowCards > 0 :
      activeTab === "red cards" ? player.redCards > 0 :
      true
    )
    .sort((a, b) =>
      activeTab === "top scorers" ? b.goals - a.goals :
      activeTab === "assists" ? b.assists - a.assists :
      activeTab === "shots on target" ? b.shotsOnTarget - a.shotsOnTarget :
      activeTab === "yellow cards" ? b.yellowCards - a.yellowCards :
      activeTab === "red cards" ? b.redCards - a.redCards :
      (b.goals + b.assists) - (a.goals + a.assists)
    );

  const newStats = filtered.map((player, index) => ({
    rank: index + 1,
    name: player.name,
    player_id: player.id,
    photo: player.photo,
    team: player.team,
    teamLogo: player.teamLogo,
    team_id: player.team_id,
    scored:
      activeTab === "top scorers" ? player.goals :
      activeTab === "assists" ? player.assists :
      activeTab === "shots on target" ? player.shotsOnTarget :
      activeTab === "yellow cards" ? player.yellowCards :
      activeTab === "red cards" ? player.redCards :
      `${player.goals} goals, ${player.assists} assists`
  }));

  // ✅ Only update if new data is different
  setstats(prevStats => {
    const prev = JSON.stringify(prevStats);
    const next = JSON.stringify(newStats);
    return prev !== next ? newStats : prevStats;
  });

}, [activeTab, Playerstats]);



console.log(SelectedLeague,stats);




  return (
 

    <div>
            {/* league selecter */}
    <div className='flex items-center gap-[5px] mb-6 text-white cursor-pointer relative '
    onClick={()=>setLeaguesPopUps(!LeaguesPopUps)}
    >
    
      <span className=' flex items-center gap-[1px]'>
         <img src= {SelectedLeague?.logo} alt="" className='h-5 w-5' />
        
    
            <FaCaretDown />
      </span>
    
      <span className='text-xs capitalize'>
    {SelectedLeague?.name}
      </span>
    
    
    {/* popup */}
    {
      LeaguesPopUps&& <div className=' capitalize flex flex-col gap-1 bg-slate-500 p-2 rounded-md absolute z-10 top-6 left-0'>
      {/* Header */}
     
    
      {/* Mapping through wellStructuredData */}
      {
    
    
        wellStructuredData?.map((data, index) => {
          return (
            <div className={`flex gap-1 items-center border py-1 px-1 rounded-md ${SelectedLeague?.name==data?.league?.name?"bg-black":""}`} key={index}
             onClick={()=>setSelectedLeague({logo:data?.league?.logo,name:data?.league?.name,id:data?.league?.id})}
            >
              <img src={data?.league?.logo} alt="" className='h-5 w-5' />
              <span className='text-xs'>
                <span>{data?.league?.name}</span>
              </span>
            </div>
          );
        })
      }
    </div>
    
    }
    
    
    
    
      </div>

      {/* Tabs */}


      <div className="flex mb-2 gap-2 px-2 thin-scrollbar border-b w-full border-purple-800 pb-4 overflow-x-auto ">
        {Tabs?.map((tab,index) => (
          <button
            key={index}
            className={`px-2 sm:px-3 py-1 text-[10px] font-semibold whitespace-nowrap uppercase  rounded-full border ${
              activeTab === tab
                ? ' bg-purple-700/90'
                : 'text-gray-300 border-purple-800'
            } hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>


      <div>
{Playerstats?.length > 0 ? (
 stats?.filter(d=>d?.team_id==SelectedLeague?.id)?.map((data, index) => (
    <div key={index}>
      <PlayerstatsCard player={data} />
    </div>
  ))
) : (
  <p className="text-center text-gray-400 mt-4">No player stats available.</p>
)}


      </div>
        

    </div>

  )
}

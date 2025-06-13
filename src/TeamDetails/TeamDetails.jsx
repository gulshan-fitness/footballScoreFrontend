import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import TeamCard from './TeamCard'
import TeamTabs from './TeamTabs'
import { Context } from '../Context_holder'

export default function TeamDetails() {
    const{ TeamMatches,TeamMatchesFetch,setTeamDetailsActivetab}=useContext(Context)

    const{id}=useParams(686)
   
    

    const data = [
  {
    fixture: {
      id: 867954,
      referee: "D. Aytekin",
      date: "2023-08-19T15:30:00+00:00",
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
      date: "2023-10-04T20:00:00+00:00",
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
      date: "2024-02-07T18:30:00+00:00",
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


    //   useEffect(
//     ()=>{

//       TeamMatchesFetch(`?team=${id}&season=${2023}`)

//       TeamMatchesFetch(`?team=${id}&season=${2023}&status=NS`)

//     },[]
//   )


   const location = useLocation();

     
    useEffect(() => {
  
      if (location?.pathname) {
        setTeamDetailsActivetab(location.pathname.split('/').filter(Boolean).pop());
      }

  
    }, [location?.pathname])

    
const Teamsdata = data[0]

const TeamDetails = Teamsdata.teams.home.id === id ? Teamsdata.teams.home : Teamsdata.teams.away




  return (
  
    <div className="bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#000000] text-gray-300 min-h-screen  p-4 font-sans space-y-6 w-full selection:bg-purple-700 selection:text-white">


  <TeamCard team={TeamDetails} />


    <TeamTabs />

      <Outlet/>

    </div>
  )
}

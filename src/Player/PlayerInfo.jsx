import React from 'react'
import {
  FaFutbol,
  FaRegClock,
  FaMapMarkerAlt,
  FaUserShield,
  FaArrowsAltH,
  FaTachometerAlt,
  FaBullseye,
  FaRunning,
  FaHandshake,
  FaPenNib,
} from "react-icons/fa";

export default function PlayerInfo() {
    
    // GET https://v3.football.api-sports.io/players?id=276&season=2023   

        const data= [
    {
      player: {
        id: 276,
        name: "Cristiano Ronaldo",
        firstname: "Cristiano Ronaldo",
        lastname: "dos Santos Aveiro",
        age: 38,
        birth: {
          date: "1985-02-05",
          place: "Funchal",
          country: "Portugal"
        },
        nationality: "Portugal",
        height: "187 cm",
        weight: "83 kg",
        injured: false,
        photo: "https://media.api-sports.io/football/players/276.png"
      },
      statistics: [
        {
          team: {
            id: 159,
            name: "Al Nassr",
            logo: "https://media.api-sports.io/football/teams/159.png"
          },
          league: {
            id: 307,
            name: "Saudi Professional League",
            country: "Saudi Arabia",
            logo: "https://media.api-sports.io/football/leagues/307.png",
            flag: "https://media.api-sports.io/flags/sa.svg",
            season: 2023
          },
          games: {
            appearences: 27,
            lineups: 27,
            minutes: 2430,
            number: null,
            position: "Attacker",
            rating: "7.9",
            captain: true
          },
          substitutes: {
            in: 0,
            out: 3,
            bench: 0
          },
          shots: {
            total: 110,
            on: 65
          },
          goals: {
            total: 30,
            conceded: 0,
            assists: 5,
            saves: null
          },
          passes: {
            total: 950,
            key: 45,
            accuracy: "85%"
          },
          tackles: {
            total: 10,
            blocks: 2,
            interceptions: 5
          },
          duels: {
            total: 150,
            won: 90
          },
          dribbles: {
            attempts: 60,
            success: 40,
            past: null
          },
          fouls: {
            drawn: 20,
            committed: 10
          },
          cards: {
            yellow: 3,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: 2,
            commited: 1,
            scored: 5,
            missed: 1,
            saved: null
          }
        }
      ]
    }
  ]
  const player = data[0].player;
  const stats = data[0].statistics[0];

  return (
    <>
       {/* Team and League */}

      <div className="mt-3 text-white border rounded-xl p-4 hover:shadow-[0_0_40px_rgba(128,0,255,0.4)] transition-all duration-500 ease-in-out border-purple-800"> 
        <div className="flex items-center flex-wrap gap-2 justify-between">
          <div className="flex items-center gap-3">
            <img src={stats.team.logo} alt="Team" className="w-8 h-8 sm:w-10 sm:h-10" />
            <h3 className="font-semibold text-base sm:text-lg">{stats.team.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <img src={stats.league.logo} alt="League" className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-xs sm:text-sm text-gray-300">
              {stats.league.name} ({stats.league.season})
            </p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-3 w-full">
        <StatBox icon={<FaFutbol />} label="Appearances" value={stats.games.appearences} />
        <StatBox icon={<FaUserShield />} label="Position" value={stats.games.position} />
        <StatBox icon={<FaRegClock />} label="Minutes" value={stats.games.minutes} />
        <StatBox icon={<FaBullseye />} label="Goals" value={stats.goals.total} />
        <StatBox icon={<FaRunning />} label="Assists" value={stats.goals.assists} />
        <StatBox icon={<FaArrowsAltH />} label="Dribbles" value={`${stats.dribbles.success}/${stats.dribbles.attempts}`} />
        <StatBox icon={<FaTachometerAlt />} label="Rating" value={stats.games.rating} />
        <StatBox icon={<FaHandshake />} label="Duels Won" value={`${stats.duels.won}/${stats.duels.total}`} />
        <StatBox icon={<FaPenNib />} label="Penalties Scored" value={stats.penalty.scored} />
      </div>
    </>
      
  )

}


// StatBox with smaller responsive text
const StatBox = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 w-full p-3 sm:p-4 text-white border hover:shadow-[0_0_40px_rgba(128,0,255,0.4)] transition-all duration-500 ease-in-out border-purple-800 rounded-xl">
    <div className="text-purple-400 text-lg sm:text-xl">{icon}</div>
    <div>
  <p className="text-xs sm:text-sm text-gray-400 truncate w-full overflow-hidden whitespace-nowrap">{label}</p>

      <p className="text-sm sm:text-base font-semibold">{value}</p>
    </div>
  </div>
);
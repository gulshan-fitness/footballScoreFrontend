import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";

// GET https://v3.football.api-sports.io/fixtures?league=39&season=2024&live=all
// GET https://v3.football.api-sports.io/fixtures?league=39&season=2024&date=2025-05-29

const matches = [
  {
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-3.api-sports.io/football/leagues/39.png",
      season: 2024,
    },
    fixtures: [
      {
        fixture: {
          id: 101,
          date: "2025-05-29T14:00:00Z",
          status: { long: "Not Started", short: "NS", elapsed: null },
        },
        teams: {
          home: {
            id: 33,
            name: "Manchester United",
            logo: "https://media-3.api-sports.io/football/teams/33.png",
          },
          away: {
            id: 34,
            name: "Liverpool",
            logo: "https://media-3.api-sports.io/football/teams/34.png",
          },
        },
        goals: { home: null, away: null },
      },
      {
        fixture: {
          id: 102,
          date: "2025-05-30T18:45:00Z",
          status: { long: "Not Started", short: "NS", elapsed: null },
        },
        teams: {
          home: {
            id: 35,
            name: "Chelsea",
            logo: "https://media-3.api-sports.io/football/teams/35.png",
          },
          away: {
            id: 36,
            name: "Arsenal",
            logo: "https://media-3.api-sports.io/football/teams/36.png",
          },
        },
        goals: { home: null, away: null },
      },
    ],
  },
  {
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media-3.api-sports.io/football/leagues/140.png",
      season: 2024,
    },
    fixtures: [
      {
        fixture: {
          id: 201,
          date: "2025-05-28T18:45:00Z",
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        teams: {
          home: {
            id: 529,
            name: "Real Madrid",
            logo: "https://media-3.api-sports.io/football/teams/529.png",
          },
          away: {
            id: 530,
            name: "Barcelona",
            logo: "https://media-3.api-sports.io/football/teams/530.png",
          },
        },
        goals: { home: 2, away: 2 },
      },
    ],
  },
   {
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media-3.api-sports.io/football/leagues/140.png",
      season: 2024,
    },
    fixtures: [
      {
        fixture: {
          id: 201,
          date: "2025-05-28T18:45:00Z",
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        teams: {
          home: {
            id: 529,
            name: "Real Madrid",
            logo: "https://media-3.api-sports.io/football/teams/529.png",
          },
          away: {
            id: 530,
            name: "Barcelona",
            logo: "https://media-3.api-sports.io/football/teams/530.png",
          },
        },
        goals: { home: 2, away: 2 },
      },
    ],
  }, {
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media-3.api-sports.io/football/leagues/140.png",
      season: 2024,
    },
    fixtures: [
      {
        fixture: {
          id: 201,
          date: "2025-05-28T18:45:00Z",
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        teams: {
          home: {
            id: 529,
            name: "Real Madrid",
            logo: "https://media-3.api-sports.io/football/teams/529.png",
          },
          away: {
            id: 530,
            name: "Barcelona",
            logo: "https://media-3.api-sports.io/football/teams/530.png",
          },
        },
        goals: { home: 2, away: 2 },
      },
    ],
  },
   {
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media-3.api-sports.io/football/leagues/140.png",
      season: 2024,
    },
    fixtures: [
      {
        fixture: {
          id: 201,
          date: "2025-05-28T18:45:00Z",
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        teams: {
          home: {
            id: 529,
            name: "Real Madrid",
            logo: "https://media-3.api-sports.io/football/teams/529.png",
          },
          away: {
            id: 530,
            name: "Barcelona",
            logo: "https://media-3.api-sports.io/football/teams/530.png",
          },
        },
        goals: { home: 2, away: 2 },
      },
    ],
  },
   {
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media-3.api-sports.io/football/leagues/140.png",
      season: 2024,
    },
    fixtures: [
      {
        fixture: {
          id: 201,
          date: "2025-05-28T18:45:00Z",
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        teams: {
          home: {
            id: 529,
            name: "Real Madrid",
            logo: "https://media-3.api-sports.io/football/teams/529.png",
          },
          away: {
            id: 530,
            name: "Barcelona",
            logo: "https://media-3.api-sports.io/football/teams/530.png",
          },
        },
        goals: { home: 2, away: 2 },
      },
    ],
  },
   {
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media-3.api-sports.io/football/leagues/140.png",
      season: 2024,
    },
    fixtures: [
      {
        fixture: {
          id: 201,
          date: "2025-05-28T18:45:00Z",
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        teams: {
          home: {
            id: 529,
            name: "Real Madrid",
            logo: "https://media-3.api-sports.io/football/teams/529.png",
          },
          away: {
            id: 530,
            name: "Barcelona",
            logo: "https://media-3.api-sports.io/football/teams/530.png",
          },
        },
        goals: { home: 2, away: 2 },
      },
    ],
  },
   {
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media-3.api-sports.io/football/leagues/140.png",
      season: 2024,
    },
    fixtures: [
      {
        fixture: {
          id: 201,
          date: "2025-05-28T18:45:00Z",
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        teams: {
          home: {
            id: 529,
            name: "Real Madrid",
            logo: "https://media-3.api-sports.io/football/teams/529.png",
          },
          away: {
            id: 530,
            name: "Barcelona",
            logo: "https://media-3.api-sports.io/football/teams/530.png",
          },
        },
        goals: { home: 2, away: 2 },
      },
    ],
  },
   {
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media-3.api-sports.io/football/leagues/140.png",
      season: 2024,
    },
    fixtures: [
      {
        fixture: {
          id: 201,
          date: "2025-05-28T18:45:00Z",
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        teams: {
          home: {
            id: 529,
            name: "Real Madrid",
            logo: "https://media-3.api-sports.io/football/teams/529.png",
          },
          away: {
            id: 530,
            name: "Barcelona",
            logo: "https://media-3.api-sports.io/football/teams/530.png",
          },
        },
        goals: { home: 2, away: 2 },
      },
    ],
  },
];

export default function FootballScores() {
  return (
    <div className="bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#000000] text-gray-300 min-h-screen py-4 sm:py-6 md:py-10 px-4 font-sans selection:bg-purple-700 selection:text-white">
      {/* Header */}
      <header className="flex items-center justify-between max-w-5xl mx-auto mb-8 ">
        <span
          className="bg-purple-700/90 text-white text-xs sm:text-sm md:text-base px-3 py-1 rounded-full font-semibold tracking-wide    shadow-lg hover:shadow-[0_0_20px_rgba(128,0,255,0.7)]
                    transition-shadow duration-500 cursor-pointer "
        >
          LIVE
        </span>

        <button
          aria-label="Previous day"
          className="text-white hover:text-purple-600 transition-colors duration-300 text-xl sm:text-2xl md:text-3xl"
        >
          <FaChevronLeft />
        </button>

        <span className="text-base sm:text-lg md:text-2xl font-extrabold tracking-wide text-white drop-shadow-lg">
          Today
        </span>

        <button
          aria-label="Next day"
          className="text-white hover:text-purple-600 transition-colors duration-300 text-xl sm:text-2xl md:text-3xl"
        >
          <FaChevronRight />
        </button>

        <button
          className="p-2  relative rounded-full bg-purple-900/30 backdrop-blur-md border border-purple-700/40 hover:bg-purple-900/60
          shadow-lg hover:shadow-[0_0_20px_rgba(128,0,255,0.7)]
                  group  transition-shadow duration-500 cursor-pointer select-none"
        >
          <IoCalendarClearOutline className="text-3xl text-purple-400" />
          <span className="absolute top-[19px] left-[17px] text-xs group-hover:text-purple-400   text-white ">
            {new Date().getDate()}
          </span>
        </button>
      </header>

      {/* Matches by League */}
      <main className="max-w-5xl mx-auto space-y-10 px-2  h-screen overflow-y-auto   thin-scrollbar">
        {matches?.map(({ league, fixtures }) => (
          <section key={league.id}>
            {/* League Header */}
            <div className=" flex justify-between items-center  mb-6">
               <button className="flex items-center  gap-3 text-xs sm:text-sm md:text-base font-semibold text-purple-400 tracking-wider select-none">
              <img
                src={league.logo}
                alt={`${league.name} logo`}
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border border-purple-600 shadow-sm"
              />
              <span className="drop-shadow-lg">
                {league.name}{" "}
                <span className="text-white font-normal">
                  ({league.country})
                </span>
              </span>
            </button>
            <button>
               <FaChevronRight className="text-xs sm:text-sm" />
            </button>
           
            </div>
           

            {/* Fixtures */}
            <div className="space-y-3">
              {fixtures?.map(({ fixture, teams, goals }) => (
                <article
                  key={fixture.id}
                  className="flex justify-between items-center bg-gradient-to-tr from-[#1c1f28]/70 to-[#0a0c14]/90
                    backdrop-blur-md border border-purple-800 rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-[0_0_20px_rgba(128,0,255,0.7)]
                    transition-shadow duration-500 cursor-pointer select-none"
                  tabIndex={0}
                  aria-label={`${teams.home.name} vs ${
                    teams.away.name
                  } on ${new Date(fixture.date).toLocaleDateString()}`}
                >
                  {/* Teams */}
                  <div className="flex flex-col   gap-3">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={teams.home.logo}
                        alt={teams.home.name}
                        className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-purple-600 shadow-sm"
                      />
                      <span className="text-purple-300 sm:font-semibold text-xs  sm:text-sm  truncate">
                        {teams.home.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={teams.away.logo}
                        alt={teams.away.name}
                        className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-purple-600 shadow-sm"
                      />
                      <span className="text-purple-300 sm:font-semibold text-xs  sm:text-sm  truncate">
                        {teams.away.name}
                      </span>
                    </div>
                  </div>

                  {/* Scores */}
                  <div className="text-right text-xl sm:text-2xl md:text-3xl font-extrabold w-14 sm:w-16 text-purple-500 drop-shadow-lg">
                    <div>{goals.home !== null ? goals.home : "-"}</div>
                    <div>{goals.away !== null ? goals.away : "-"}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

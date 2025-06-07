import React from "react";
import {
  FaFutbol,
  FaExclamationTriangle,
  FaUserPlus,
  FaVideo,
  FaClock,
} from "react-icons/fa";

// GET https://v3.football.api-sports.io/fixtures/events?fixture={MATCH_ID}

const matchEvents = [
  {
    time: { elapsed: 23, extra: null },
    team: {
      id: 541,
      name: "Real Madrid",
      logo: "https://media.api-sports.io/football/teams/541.png",
    },
    player: { id: 276, name: "Karim Benzema" },
    assist: { id: 277, name: "Vinicius Junior" },
    type: "Goal",
    detail: "Normal Goal",
    comments: null,
  },
  {
    time: { elapsed: 37, extra: null },
    team: {
      id: 529,
      name: "Barcelona",
      logo: "https://media.api-sports.io/football/teams/529.png",
    },
    player: { id: 302, name: "Gavi" },
    assist: null,
    type: "Card",
    detail: "Yellow Card",
    comments: "Reckless foul",
  },
  {
    time: { elapsed: 64, extra: null },
    team: { id: 541, name: "Real Madrid" },
    player: { id: 278, name: "Toni Kroos" },
    assist: null,
    type: "subst",
    detail: "Substitution 1",
    comments: "In: Eduardo Camavinga, Out: Toni Kroos",
  },
  {
    time: { elapsed: 78, extra: null },
    team: { id: 529, name: "Barcelona" },
    player: { id: 300, name: "Robert Lewandowski" },
    assist: null,
    type: "Goal",
    detail: "Penalty",
    comments: null,
  },
  {
    time: { elapsed: 85, extra: 2 },
    team: { id: 541, name: "Real Madrid" },
    player: null,
    assist: null,
    type: "Var",
    detail: "Goal cancelled",
    comments: "Offside after VAR review",
  },
  {
    time: { elapsed: 45, extra: null },
    team: null,
    player: null,
    assist: null,
    type: "Half End",
    detail: "First Half",
    comments: null,
  },
  {
    time: { elapsed: 45, extra: null },
    team: null,
    player: null,
    assist: null,
    type: "Half Start",
    detail: "Second Half",
    comments: null,
  },
  {
    time: { elapsed: 89, extra: 3 },
    team: { id: 529, name: "Barcelona" },
    player: { id: 301, name: "Ronald Araujo" },
    assist: null,
    type: "Card",
    detail: "Red Card",
    comments: "Professional foul",
  },
];

const getEventIcon=(event)=> {
  switch (event.type) {
    case "Goal":
      return <FaFutbol className="text-green-400 text-[12px]" />;
    case "Card":
      return (
        <FaExclamationTriangle
          className={`${
            event.detail === "Yellow Card" ? "text-yellow-400" : "text-red-500"
          } text-[12px]`}
        />
      );
    case "subst":
      return <FaUserPlus className="text-blue-400 text-[12px]" />;
    case "Var":
      return <FaVideo className="text-purple-400 text-[12px]" />;
    case "Half End":
    case "Half Start":
      return <FaClock className="text-gray-400 text-[12px]" />;
    default:
      return null;
  }
}

export default function MatchEvents() {
  return (

    <div className="w-full p-3 rounded-xl 
        hover:shadow-[0_0_40px_rgba(128,0,255,0.4)]
        transition-all duration-500 ease-in-out  border border-purple-800/50 text-white">

      <h2 className="text-[13px] sm:text-sm font-semibold mb-3 text-center tracking-wide text-purple-200">
        Match Events Timeline
      </h2>

      <div className="space-y-3">
        {matchEvents?.map((event, i) => (
          <div
            key={i}
            className="flex items-start gap-2 border-b border-gray-700/60 pb-2 text-[11px] sm:text-[12px]"
          >
            <div className="w-10 text-center text-[10px] font-semibold text-gray-300">
              {event.time.elapsed}
              {event.time.extra ? `+${event.time.extra}` : ""}'
            </div>

            <div className="w-4 mt-[1px]">{getEventIcon(event)}</div>

            <div className="flex-grow leading-tight">
              {event.team?.logo && (
                <img
                  src={event.team.logo}
                  alt={event.team.name}
                  className="inline-block w-4 h-4 mr-2 rounded-full object-cover"
                />
              )}

              <strong className="text-[11px] font-medium text-white">
                {event.player?.name ?? event.detail}
              </strong>

              {event.type === "Goal" && event.assist?.name && (
                <span className="ml-1 text-[10px] text-purple-300">
                  (Assist: {event.assist.name})
                </span>
              )}

              {event.type === "subst" && (
                <div className="text-[10px] text-gray-400">{event.comments}</div>
              )}

              {event.type === "Card" && event.comments && (
                <div className="text-[10px] italic text-yellow-300">{event.comments}</div>
              )}

              {event.type === "Var" && event.comments && (
                <div className="text-[10px] italic text-purple-300">{event.comments}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

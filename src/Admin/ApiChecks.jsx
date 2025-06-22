import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context_holder";

export default function ApiChecks() {
  const {
    ApiError,
    MatchesFetch,
    StandingsFetch,
    ParticularMatchFetch,
    MatchNewsFetch,
    MatchH2HFetch,
    PlayerFetch,
    PlayerstatsFetch,
    TeamMatchesFetch,
    leaguesFetch,
  } = useContext(Context);

  const [activeApi, setactiveApi] = useState(null);
  const [ErrArray, setErrArray] = useState([]);

  const apiList = [
    { name: "Date-wise Matches", api: () => MatchesFetch(`?date=${new Date().toISOString().split("T")[0]}`) },
    { name: "Live Matches", api: () => MatchesFetch(`?live=all`) },
    { name: "Matches by League", api: () => MatchesFetch(`?league=39&season=2023`) },
    { name: "Upcoming Matches by League", api: () => MatchesFetch(`?league=39&season=2023&next=100`) },
    { name: "League Standings", api: () => StandingsFetch(`?league=39&season=2023`) },
    { name: "Particular Match News", api: () => MatchNewsFetch(`?fixture=215662`) },
    { name: "Match H2H", api: () => MatchH2HFetch(`?team=33&season=2023`) },
    { name: "Player Details", api: () => PlayerFetch(`?id=276&season=2023`) },
    { name: "Player Stats", api: () => PlayerstatsFetch(`?team=33&season=2023`) },
    { name: "Particular Team Matches", api: () => TeamMatchesFetch(`?team=33&season=2023`) },
    { name: "Team Upcoming Matches", api: () => TeamMatchesFetch(`?team=33&season=2024&status=NS`) },
    { name: "Leagues List", api: () => leaguesFetch(`?season=2023`) },
    { name: "Country-specific Leagues List", api: () => leaguesFetch(`?country=England&season=2023`) },
    { name: "Particular Match Details", api: () => ParticularMatchFetch(`?id=215662`) },
  ];

  useEffect(() => {
    setErrArray((predata) => {
      const newArray = [...predata];
      newArray[activeApi] = ApiError ? Object.values(ApiError)[0] : "successful";
      return newArray;
    });
  }, [ApiError, activeApi]);

  return (
    <div className="w-full p-4 sm:p-6 bg-black border border-white/20">
      <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-white">
        API Status Table
      </h1>

      <table className="w-full table-fixed border border-white text-sm  text-white bg-black rounded-md overflow-hidden">
        <thead>
          <tr className="bg-[#7d7878] text-white uppercase text-xs tracking-widest">
            <th className="w-1/3 px-3 py-2 border border-white/10">API</th>
            <th className="w-1/3 px-3 py-2 border border-white/10">Check</th>
            <th className="w-1/3 px-3 py-2 border border-white/10">Status</th>
          </tr>
        </thead>
        <tbody>
          {apiList.map((data, index) => (
            <tr key={index} className="text-center border-t border-white/10 hover:bg-white/5 transition">
              <td className="px-3 py-2 break-words border-r  border-white/10">
                {data?.name}
              </td>
              <td className="px-3 py-2 border-r border-white/10">
                <button
                  className="text-xs bg-white text-black hover:bg-black hover:text-white border border-white px-3 py-1 rounded-md font-semibold transition-all duration-200"
                  onClick={() => {
                    data?.api();
                    setactiveApi(index);
                  }}
                >
                  Check
                </button>
              </td>
              <td className="px-3 py-2 text-white text-sm whitespace-pre-wrap leading-snug">
                {ErrArray[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";

const rawData = {
  team: { id: 33, name: "Manchester United" },
  fixtures: { wins: { total: 18 }, draws: { total: 6 }, loses: { total: 4 } },
  goals: { for: { total: { home: 25, away: 18 } }, against: { total: { home: 10, away: 14 } } },
  clean_sheet: { home: 9, away: 6 },
  penalty: { scored: { total: 4 }, missed: { total: 2 } },
  cards: { yellow: { total: 52 }, red: { total: 3 } },
};

function Bar({ label, value, max = 100, color }) {
  const maxBarWidth = 80;
  const barWidth = Math.min((value / max) * maxBarWidth, maxBarWidth);
  return (
    <div className="flex flex-col mb-0.5" style={{ fontSize: 9, lineHeight: 1 }}>
      <div className="flex justify-between mb-0.5">
        <span className="truncate text-[10px] uppercase font-semibold">{label}</span>
        <span>{typeof value === "number" ? (label.includes("%") ? value.toFixed(0) + "%" : value) : value}</span>
      </div>
      <div
        className="h-3 rounded bg-gray-700"
        style={{ width: maxBarWidth, position: "relative" }}
      >
        <div
          className="h-3 rounded"
          style={{ width: barWidth, backgroundColor: color, transition: "width 0.3s ease" }}
          title={`${label}: ${value}`}
        />
      </div>
    </div>
  );
}

export default function CompactPerformanceCard() {
  const wins = rawData.fixtures.wins.total;
  const draws = rawData.fixtures.draws.total;
  const loses = rawData.fixtures.loses.total;
  const totalMatches = wins + draws + loses;

  const goalsFor = rawData.goals.for.total.home + rawData.goals.for.total.away;
  const goalsAgainst = rawData.goals.against.total.home + rawData.goals.against.total.away;
  const goalDifference = goalsFor - goalsAgainst;

  const cleanSheets = rawData.clean_sheet.home + rawData.clean_sheet.away;
  const cleanSheetRate = ((cleanSheets / totalMatches) * 100).toFixed(0);

  const penaltiesScored = rawData.penalty.scored.total;
  const penaltiesMissed = rawData.penalty.missed.total;
  const totalPenalties = penaltiesScored + penaltiesMissed;
  const penaltySuccessRate = totalPenalties ? (penaltiesScored / totalPenalties) * 100 : 0;

  const totalCards = rawData.cards.yellow.total + rawData.cards.red.total;
  const cardRate = ((totalCards / totalMatches) * 100).toFixed(0);

  const winRate =( (wins / totalMatches) * 100).toFixed(0);

  return (
    <div
      className="bg-[#111] w-full aspect-[16/6]  text-white rounded-lg border  border-purple-800 p-2 font-sans"

    >
      <div className="text-center font-bold mb-1 truncate" style={{ fontSize: 11, lineHeight: 1 }}>
        Performance
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-1" style={{ maxHeight: 105 }}>
        <Bar label="Win Rate" value={winRate} color="#22c55e" />
        <Bar label="Goal Diff" value={goalDifference} max={Math.max(goalDifference, 20)} color="#f97316" />
        <Bar label="Clean Sheets" value={cleanSheetRate} color="#3b82f6" />
        <Bar label="Penalties %" value={penaltySuccessRate} color="#eab308" />
        <Bar label="Cards per Match" value={cardRate} color="#ef4444" />
      </div>
    </div>
  );
}

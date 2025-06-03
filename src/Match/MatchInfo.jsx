

import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MatchInfo() {
  const fixture = {
  referee: "Daniele Orsato",
  venue: {
    name: "Parc des Princes",
    city: "Paris",
  },
  attendance: 48712,
};

 const { referee, venue, attendance } = fixture;

  return (
    <div className="space-y-3 mb-6">
      <div className="flex justify-between items-center px-2">
        <button className="text-md text-white font-semibold">Fixture Details</button>
        <FaChevronRight className="text-xs sm:text-sm text-white" />
      </div>

      <div className="bg-gray-800 text-white rounded-xl shadow-md p-4 space-y-3 border border-gray-700 mx-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Referee:</span>
          <span className="text-sm font-medium">{referee}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Venue:</span>
          <span className="text-sm font-medium">{venue.name}, {venue.city}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Attendance:</span>
          <span className="text-sm font-medium">{attendance.toLocaleString()}</span>
        </div>
      </div>

      <Link
        to="/leaguedetails/fixtures"
        className="block text-center w-full rounded-md border border-purple-500 text-xs py-1 hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition"
        onClick={() => setLeagueDetailsActivetab("fixtures")}
      >
        Back to Fixtures
      </Link>
    </div>
  );
}






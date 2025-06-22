import axios from "axios";
import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  MdDashboard,
  MdGridOn,
  MdFunctions,
  MdAdd,
  MdVisibility,
} from "react-icons/md";

const Context = createContext();

export default function Context_holder(props) {
  const [user, setuser] = useState(null);

  const [usertoken, setusertoken] = useState("");


  const [admin, setadmin] = useState(null);

  const [adminToken, setadminToken] = useState("");

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isScrolled,setIsScrolled] = useState(false);

  const [LeagueDetailsActivetab, setLeagueDetailsActivetab] =
    useState("Overview");

  const [TeamDetailsActivetab, setTeamDetailsActivetab] =useState("Overview");
  const [matchDetailsActivetab, setmatchDetailsActivetab] = useState("info");
  const [PlayerDetailsActivetab, setPlayerDetailsActivetab] = useState("info");

  const [Matches, setMatches] = useState([]);
  const [particulerMatch, setparticulerMatch] = useState(null);
  const [MatchNews, setMatchNews] = useState([]);
  const [LeagueStandings, setLeagueStandings] = useState([]);
  const [MatchH2H, setMatchH2H] = useState([]);
  const [PlayerDetails, setPlayerDetails] = useState(null);

  const [Playerstats, setPlayerstats] = useState([]);
  const [TeamMatches, setTeamMatches] = useState([]);
  const [TeamUpcomingMatches, setTeamUpcomingMatches] = useState([]);
  const [UpcomingMatches, setUpcomingMatches] = useState([]);
  const [LeagueDetails, setLeagueDetails] = useState(null);
  const [Leagues, setLeagues] = useState([]);
   const [ApiError, setApiError] = useState(null);

  const notify = (msg, status) => {
    toast(msg, {
      position: "top-right",
      type: status === 1 ? "success" : "error",
    });
  };

  const logout_handler = () => {
    localStorage.removeItem("user");

    setuser(null);
    localStorage.removeItem("usertoken");

    setusertoken("");
  };



  const MatchesFetch = (query) => {
    const params = new URLSearchParams(query.replace("?", ""));

    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_MATCHES_URL
    }read`;

    if (query) {
      api += `${query}`;
    }

    axios
      .get(api)

      .then((success) => {
        if (success.data.status == 1) {
          setApiError(null)
          if (params?.has("next")) setUpcomingMatches(success.data.matches);
          else setMatches(success.data.matches);
        }

        else{
setApiError(success.data.msg)
        }


      })

      .catch((error) => {});
  };
  
  const StandingsFetch = (query) => {
    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_MATCHES_URL
    }readstandings`;

    if (query) {
      api += `${query}`;
    }

    axios
      .get(api)

      .then((success) => {
        if (success.data.status == 1) {
           setApiError(null)
          setLeagueStandings(success.data.standings);
        }
                else{
setApiError(success.data.msg)
        }
      })

      .catch((error) => {});
  };

  const ParticularMatchFetch = (query) => {
    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_MATCHES_URL
    }ParticularMatchread`;

    if (query) {
      api += `${query}`;
    }

    axios
      .get(api)

      .then((success) => {
        if (success.data.status == 1) {
           setApiError(null)
          setparticulerMatch(success.data.matches);
        }
                else{
setApiError(success.data.msg)
        }
      })

      .catch((error) => {});
  };

  const MatchNewsFetch = (query) => {
    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_MATCHES_URL
    }newsread`;

    if (query) {
      api += `${query}`;
    }

    axios
      .get(api)

      .then((success) => {
        if (success.data.status == 1) {
           setApiError(null)
          setMatchNews(success.data.news);
        }
                else{
setApiError(success.data.msg)
        }
      })

      .catch((error) => {});
  };

  const MatchH2HFetch = (query) => {
    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_MATCHES_URL
    }TeamH2Hread`;

    if (query) {
      api += `${query}`;
    }

    axios
      .get(api)

      .then((success) => {
        if (success.data.status == 1) {
           setApiError(null)
          setMatchH2H(success.data.h2h);
        }
                else{
setApiError(success.data.msg)
        }
      })

      .catch((error) => {});
  };

  const PlayerFetch = (query) => {
    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_MATCHES_URL
    }playerDetailsread`;

    if (query) {
      api += `${query}`;
    }

    axios
      .get(api)
      .then((success) => {
        if (success.data.status == 1) {
           setApiError(null)
          setPlayerDetails(success.data.player);
        }
                else{
setApiError(success.data.msg)
        }
      })

      .catch((error) => {});
  };

  const PlayerstatsFetch = (query) => {
    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_MATCHES_URL
    }TeamPlayerStatsread`;

    if (query) {
      api += `${query}`;
    }

    axios
      .get(api)
      .then((success) => {
        if (success.data.status == 1) {
           setApiError(null)
          setPlayerstats(success.data.player);
        }

                else{
setApiError(success.data.msg)
        }
      })

      .catch((error) => {});
  };

  const TeamMatchesFetch = (query) => {
    const params = new URLSearchParams(query.replace("?", ""));

    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_MATCHES_URL
    }PerticulerTeamMatchesRead`;

    if (query) {
      api += `${query}`;
    }

    axios
      .get(api)

      .then((success) => {
        if (success.data.status == 1) {
           setApiError(null)
          if (params.has("status"))
            setTeamUpcomingMatches(success.data.matches);
          else setTeamMatches(success.data.matches);
        }
                else{
setApiError(success.data.msg)
        }
      })

      .catch((error) => {});
  };


  const leaguesFetch = (query) => {
    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_MATCHES_URL
    }Leaguesread`;

    if (query) api += `${query}`;

    axios
      .get(api)
      .then((success) => {
        if (success.data.status == 1) {
          setApiError(null)
          setLeagues(success.data.leagues);
        }
                else{
setApiError(success.data.msg)
        }
      })

      .catch((error) => {});
  };



 const menu_links = [
  {
    name: "Dashboard",
    url: "",
    icon: <MdDashboard className="text-xl" />,
  },
  {
    name: "Api Checks",
    url: "apichecks",
    icon: (
     <svg
  className="w-6 h-6"
 
  fill="none"
  stroke="#ffffff"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="3" y="4" width="18" height="14" rx="2" ry="2" stroke="#ffffff" />
  <path d="M7 8l2 2-2 2" />
  <line x1="13" y1="12" x2="17" y2="12" />
  <circle cx="12" cy="20" r="1.5" fill="#4B5563" />
  <line x1="12" y1="18" x2="12" y2="14" />
</svg>
    ),
  },

];


  const getStandingsByTab = (standings, activeTab) => {
    if (standings?.length != 0)
      return standings?.map((team) => {
        const base = {
          rank: team.rank,
          team: team.team,
          points: team.points,
          goalsDiff: team.goalsDiff,
          description: team.description,
        };
        if (activeTab === "form") {
          return {
            ...base,
            form: team.form,
          };
        }
        return {
          ...base,
          ...team[activeTab],
        };
      });
  };

  return (
    <Context.Provider
      value={{
       
        user,
        setuser,
        usertoken,
        setusertoken,
        notify,
        isMobileMenuOpen,
        setMobileMenuOpen,
        isScrolled,
        setIsScrolled,
        logout_handler,
        admin,
        setadmin,
        adminToken,
        setadminToken,
        menu_links,
        LeagueDetailsActivetab,
        setLeagueDetailsActivetab,
        matchDetailsActivetab,
        setmatchDetailsActivetab,
        PlayerDetailsActivetab,
        setPlayerDetailsActivetab,
        UpcomingMatches,
        setUpcomingMatches,
        Matches,
        setMatches,
        MatchesFetch,
        LeagueDetails,
        setLeagueDetails,
        getStandingsByTab,
        LeagueStandings,
        setLeagueStandings,
        StandingsFetch,
        ParticularMatchFetch,
        particulerMatch,
        setparticulerMatch,
        MatchNews,
        setMatchNews,
        MatchNewsFetch,
        MatchH2H,
        setMatchH2H,
        MatchH2HFetch,
        PlayerFetch,
        PlayerDetails,
        setPlayerDetails,
        TeamMatches,
        TeamMatchesFetch,
        TeamDetailsActivetab,
        setTeamDetailsActivetab,
        TeamUpcomingMatches,
        setTeamUpcomingMatches,
        Playerstats,
        setPlayerstats,
        PlayerstatsFetch,
        leaguesFetch,
        Leagues,
        setLeagues,ApiError
      }}
    >
      {props.children}

      <ToastContainer />
    </Context.Provider>
  );
}

export { Context };

import axios from "axios";
import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Context = createContext();

export default function Context_holder(props) {
  const [user, setuser] = useState(null);

  const [usertoken, setusertoken] = useState("");
  const [UserLoginPopUp, setUserLoginPopUp] = useState(false);

  const [admin, setadmin] = useState(null);

  const [adminToken, setadminToken] = useState("");

  const [UserSignUpPopUp, setUserSignUpPopUp] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [CrosswordPuzzle, setCrosswordPuzzle] = useState(null);
  const [AllCrosswordPuzzle, setAllCrosswordPuzzle] = useState(null);
  const [userGrid, setUserGrid] = useState([]);
  const [CrosswordPuzzleScore_id, setCrosswordPuzzleScore_id] = useState(null);
  const [CrosswordPuzzlePreviousScore, setCrosswordPuzzlePreviousScore] =
    useState(null);
  const [AllSudoko, setAllSudoko] = useState([]);
  const [Sudoko, setSudoko] = useState(null);

  const [LeagueDetailsActivetab, setLeagueDetailsActivetab] =
    useState("Overview");
  const [matchDetailsActivetab, setmatchDetailsActivetab] = useState("info");
  const [PlayerDetailsActivetab, setPlayerDetailsActivetab] = useState("info");

  const [Matches, setMatches] = useState([]);
   const [particulerMatch, setparticulerMatch] = useState(null);
    const [LeagueStandings, setLeagueStandings] = useState([]);
  const [UpcomingMatches, setUpcomingMatches] = useState(null);
  const [LeagueDetails, setLeagueDetails] = useState(null);

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

  const CrosswordPuzzleFetch = (id, user_id) => {
    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_CROSSWORDPUZZLE_URL
    }read`;

    if (id) {
      api += `/${id}`;
    }

    if (user_id) {
      api += `/${user_id}`;
    }

    axios
      .get(api)

      .then((success) => {
        if (success.data.status == 1) {
          const data = success.data.Crosswordpuzzle;

          if (id) {
            setCrosswordPuzzle(data[0]);

            if (data[0].userScore) {
              setUserGrid(data[0].userScore.answersGrid || []);
              setCrosswordPuzzleScore_id(data[0].userScore._id);
              setCrosswordPuzzlePreviousScore(data[0].userScore.currentScore);
            } else {
              setUserGrid([]);
              setCrosswordPuzzleScore_id(null);
              setCrosswordPuzzlePreviousScore(null);
            }
          } else {
            setAllCrosswordPuzzle(data);
          }
        }
      })

      .catch((error) => {});
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
          if (params?.has("next")) setUpcomingMatches(success.data.matches);
          else setMatches(success.data.matches);
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

         setLeagueStandings(success.data.standings);

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

         setparticulerMatch(success.data.matches);

        }
      })

      .catch((error) => {});
  };

  


  const SudokoFetch = (id, user_id) => {
    let api = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_SUDOKO_URL
    }read`;

    if (id) {
      api += `/${id}`;
    }
    if (user_id) {
      api += `/${user_id}`;
    }

    axios
      .get(api)

      .then((success) => {
        if (success.data.status == 1) {
          const data = success.data.Sudoko;

          if (id) {
            setSudoko(data[0]);
          } else {
            setAllSudoko(data);
          }
        }
      })

      .catch((error) => {});
  };

  const menu_links = [
    {
      name: "Dashboard",
      url: "",
    },

    {
      name: "Crossword Puzzle",
      url: "",

      subitems: [
        { name: "Add", url: "crosswordpuzzle/add" },

        { name: "View", url: "crosswordpuzzle/view" },
      ],
    },

    {
      name: "Sudoko",
      url: "",

      subitems: [
        { name: "Add", url: "sudoko/add" },
        { name: "View", url: "sudoko/view" },
      ],
    },
  ];

    const getStandingsByTab = (standings, activeTab) => {
      if(standings?.length!=0)
    return standings?.map(team => {
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
          form: team.form
        };
      }
      return {
        ...base,
        ...team[activeTab]
      };
    });
  };

  return (
    <Context.Provider
      value={{
        UserLoginPopUp,
        setUserLoginPopUp,
        UserSignUpPopUp,
        setUserSignUpPopUp,
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
        CrosswordPuzzle,
        setCrosswordPuzzle,
        CrosswordPuzzleFetch,
        userGrid,
        setUserGrid,
        CrosswordPuzzleScore_id,
        setCrosswordPuzzleScore_id,
        CrosswordPuzzlePreviousScore,
        setCrosswordPuzzlePreviousScore,
        AllCrosswordPuzzle,
        setAllCrosswordPuzzle,
        Sudoko,
        setSudoko,
        AllSudoko,
        setAllSudoko,
        SudokoFetch,



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
        getStandingsByTab,LeagueStandings, setLeagueStandings,StandingsFetch,ParticularMatchFetch,particulerMatch, setparticulerMatch
      }}
    >
      {props.children}

      <ToastContainer />
    </Context.Provider>
  );
}

export { Context };

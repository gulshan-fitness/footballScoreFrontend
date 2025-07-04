import "./App.css";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./Home";
import UserSignUp from "./UserSignUp";
import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile/UserProfile";
import AdminProfile from "./Admin/AdminProfile";
import Admin_login from "./Admin/Admin_login";
import Admin_sign_up from "./Admin/Admin_sign_up";
import { useContext, useEffect } from "react";

import Dashboard from "./Admin/Dashboard";
import UserProtectedRouts from "./User/UserProtectedRouts";
import AdminProtectedRoutes from "./Admin/AdminProtectedRoutes";

import { Context } from "./Context_holder";

import FootballScores from "./FootballScores/FootballScores";
import LeagueDetails from "./LeagueDetails/LeagueDetails";
import LeagueOverview from "./LeagueDetails/LeagueOverview";
import LeagueFixtures from "./LeagueDetails/LeagueFixtures";
import LeagueResults from "./LeagueDetails/LeagueResults";
import LeagueStandings from "./LeagueDetails/LeagueStandings";
import MatchDetails from "./Match/MatchDetails";
import MatchInfo from "./Match/MatchInfo";
import MatchSummary from "./Match/MatchSummry";
import MatchStats from "./Match/MatchStats";
import MatchLineups from "./Match/MatchLineups";
import MatchNews from "./Match/MatchNews";
import MatchH2H from "./Match/MatchH2H";
import PlayerDetails from "./Player/PlayerDetails";
import PlayerMatches from "./Player/PlayerMatches";
import PlayerInfo from "./Player/PlayerInfo";
import TeamDetails from "./TeamDetails/TeamDetails";
import TeamOverview from "./TeamDetails/TeamOverview";
import TeamMatches from "./TeamDetails/TeamMatches";
import TeamTable from "./TeamDetails/TeamTable";
import PlayersStats from "./TeamDetails/PlayersStats";
import ApiChecks from "./Admin/ApiChecks";
import Temp from "./Temp";



function App() {
  const { setadmin, setadminToken, setuser, setusertoken,  setIsScrolled} =useContext(Context);

  const stored_admin = JSON.parse(localStorage.getItem("admin"));

  const stored_admin_token = localStorage.getItem("admin_token");

  const stored_user = JSON.parse(localStorage.getItem("user"));

  const stored_usertoken = localStorage.getItem("usertoken");



  

  useEffect(() => {
    if (stored_admin) {
      setadmin(stored_admin);
    }

    if (stored_admin_token) {
      setadminToken(stored_admin_token);
    }
    if (stored_user) {
      setuser(stored_user);
    }

    if (stored_usertoken) {
      setusertoken(stored_usertoken);
    }
  }, []);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,

      children: [

        {
          path: "",
          element: <FootballScores />,
        },

         {
          path: "leaguedetails/:id/:season",
          element: <LeagueDetails />,
          children:[
  {
          path: "overview",
          element: <LeagueOverview/>,
        },

          {
          path: "fixtures",
          element: <LeagueFixtures />,
        },
            {
          path: "results",
          element: <LeagueResults />,
        },

          {
          path: "standings",
          element: <LeagueStandings />,
        },

          ]
        },


           {
          path: "matchdetails/:id/:season",
          element: <MatchDetails />,
          
          children:[
  {
          path: "info",
          element: <MatchInfo/>,
        },

          {
          path: "summary",
          element: <MatchSummary />,
        },


            {
          path: "stats",
          element: <MatchStats/>,
        },

          {
          path: "line-ups",
          element: <MatchLineups/>,
        },

           {
          path: "table",
          element: <LeagueStandings/>,
        },

             {
          path: "news",
          element: <MatchNews/>,
        },

                 {
          path: "h2h",
          element: <MatchH2H/>,
        },



          ]
        },


        {
          path: "/player/:id/:season",
          element: <PlayerDetails />,
           children:[
  {
          path: "info",
          element: <PlayerInfo/>,
        },

          {
          path: "matches",
          element: <PlayerMatches />,
        },

          ]

        },


          {
          path: "/team/:id/:season",
          element: <TeamDetails />,
           children:[
  {
          path: "overview",
          element: <TeamOverview/>,
        },

          {
          path: "matches",
          element: <TeamMatches />,
        },

            {
          path: "tables",
          element: <TeamTable />,
        },
              {
          path: "playerstats",
          element: <PlayersStats />,
        },

          ]

        },


        {
          path: "/usersignup",
          element: <UserSignUp />,
        },

        {
          path: "/userlogin",
          element: <UserLogin />,
        },

        {
          path: "/adminloginitslocked",
          element: <Admin_login />,
        },

        {
          path: "/adminsignupitslocked",
          element: ( <AdminProtectedRoutes>
            <Admin_sign_up />
          </AdminProtectedRoutes>
          )
        },

        //  {
        //   path: "/adminsignupitslocked",
        //   element: ( 
        //     <Admin_sign_up />
        
        //   )
        // },
      


      ],
    },

      {
      path: "/userprofile",
      element: (
        <UserProtectedRouts>
                 <UserProfile />
              </UserProtectedRouts>
  )
    },

    {
      path: "/adminprofile",
      element: (
      <AdminProtectedRoutes>
        <AdminProfile />
      </AdminProtectedRoutes>
      ),

      children: [
        {
          path: "",
          element: <Dashboard />,
        },
          {
          path: "apichecks",
          element: <ApiChecks />,
        },
      
        
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;

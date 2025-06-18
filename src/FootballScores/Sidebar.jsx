import React, { useContext, useEffect, useRef, useState } from "react";
import { FaSearch, FaChevronRight, FaFutbol } from "react-icons/fa";
import { Context } from "../Context_holder";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const Sidebar = () => {
  const { leaguesFetch, Leagues, setLeagues } = useContext(Context);

  const [regions, setregions] = useState([]);

  const [leaguesShow, setleaguesShow] = useState([]);

  const [regionsSearch, setregionsSearch] = useState(false);

  const [regionsSearchValue, setregionsSearchValue] = useState("");

  const [leagueSearch, setleagueSearch] = useState(false);

  const [leagueSearchValue, setleagueSearchValue] = useState("");
  const [SelectedCountry, setSelectedCountry] = useState("");

 

  const regionsFilter=()=>{
    if(Leagues?.length==0) return
const newarr = [];

      Leagues?.map((data) => {
        const finddata = newarr?.find(
          (d) => d?.country?.name == data?.country?.name
        );

        if (!finddata && data?.country?.name != "World") newarr.push(data);
      });
      setregions(newarr);
  }

  useEffect(() => {
    if (SelectedCountry=="" ) leaguesFetch(`?season=${2023}`)
      // leaguesFetch(`?season=${new Date().getFullYear()}`)

      else  leaguesFetch(`?country=${SelectedCountry}&season=${2023}`)
    // leaguesFetch(`?country=${SelectedCountry}&season=${new Date().getFullYear()}`);
  
   
  }, [SelectedCountry]);

  useEffect(() => {
    if (regionsSearchValue) {
      const regexregion = RegExp(regionsSearchValue, "i");

      const findedregion = Leagues.find((d) =>
        regexregion.test(d?.country?.name)
      );

      if (findedregion) setregions([findedregion]);
    }

    if (leagueSearchValue) {
      const regexleague = RegExp(leagueSearchValue, "i");

      const findedLeague = Leagues.filter((d) =>
        regexleague.test(d?.league?.name)
      );

      console.log(findedLeague);

      if (findedLeague?.length != 0) setleaguesShow(findedLeague);
    }

    if (!regionsSearchValue) regionsFilter()

    if (!leagueSearchValue) {
      setleaguesShow(Leagues);
    }
  }, [Leagues, leagueSearchValue, regionsSearchValue]);



  // console.log(regionsSearchValue,SelectedCountry,regions);

  const CountryItems = ({ flag, label }) => (
    <div
      className="bg-neutral-800/70 hover:bg-neutral-700/70 shadow-gray-50  p-1 px-3 rounded-sm flex items-center gap-2 cursor-pointer text-sm transition-all shadow-sm hover:scale-[1.02]"
      onClick={() => {
        setSelectedCountry(label);
        setleagueSearchValue("");
      }}
    >
      <img src={flag} alt="" className="w-5 " />
      <span className="truncate text-xs w-full font-light">{label}</span>
    </div>
  );

  const LeagueItems = ({ logo, name, country, id }) => (
    <Link  to={`/leaguedetails/${id}/${new Date().getFullYear()}/overview`} className="bg-neutral-800/70 hover:bg-neutral-700/70 shadow-gray-50 p-1 px-3 rounded-sm flex items-center gap-3 cursor-pointer shadow-sm transition-all hover:scale-[1.02]">
      <img
        src={logo}
        alt={name}
        className="w-5 h-5 object-contain rounded-full shadow-md"
      />
      <div className="min-w-0">
        <div className="text-[10px] font-medium truncate text-white">
          {name}
        </div>
        <div className="text-[10px] text-gray-400 truncate">{country}</div>
      </div>
    </Link>
  );

  return (
    <div className=" border border-purple-700 shadow-[0_0_12px_rgba(128,0,255,0.6)] text-white min-h-screen p-4 rounded-md ">
      {/* Search */}

      {SelectedCountry && (
        <div
          className="flex  cursor-pointer items-center gap-3  text-xs tracking-wide text-white uppercase mb-8 px-1"
          onClick={() => {setSelectedCountry("")
            setregionsSearchValue("")
          }}
        >
          <FaChevronRight size={15} className=" rotate-180" />
          <span>{SelectedCountry}</span>
        </div>
      )}

      {/* Region */}
      {!SelectedCountry && (
        <div className="mb-8">
          {regionsSearch ? (
            <div className="mb-6 flex  items-center gap-2">
              <div className="flex items-center border border-purple-700  bg-black   p-2 rounded-xl shadow-inner">
                <FaSearch className="text-white mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-sm text-white placeholder-white focus:outline-none w-full"
                  value={regionsSearchValue}
                  onChange={(e) => setregionsSearchValue(e.target.value)}
                />
              </div>
              <button
                className="text-xl"
                onClick={() => {
                  setregionsSearch(false);
                  setregionsSearchValue("");
                }}
              >
                x
              </button>
            </div>
          ) : (
            <div
              className="flex  cursor-pointer items-center justify-between text-xs tracking-wide text-white uppercase mb-3 px-1"
              onClick={() => setregionsSearch(true)}
            >
              <span> Search Regions </span>
              <FaChevronRight size={12} />
            </div>
          )}

{ regions?.length!=0?
<div className="space-y-2">
            {regions?.slice(0, 7)?.map((data, index) => {
              return (
                <div key={index}>
                  <CountryItems
                    flag={data?.country?.flag}
                    label={data?.country?.name}
                  />
                </div>
              );
            })}
          </div>:
          <Loader/>
}
          

        </div>
      )}

      {/* leagues */}
      <div>
        {leagueSearch ? (
          <div className="mb-6 flex  items-center gap-2">
            <div className="flex items-center border border-purple-700  bg-black   p-2 rounded-xl shadow-inner">
              <FaSearch className="text-white mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-white placeholder-white focus:outline-none w-full"
                value={leagueSearchValue}
                onChange={(e) => setleagueSearchValue(e.target.value)}
              />
            </div>
            <button
              className="text-xl"
              onClick={() => {
                setleagueSearch(false);
                setleagueSearchValue("");
              }}
            >
              x
            </button>
          </div>
        ) : (
          <div
            className="flex  cursor-pointer items-center justify-between text-xs tracking-wide text-white uppercase mb-3 px-1 w-full truncate "
            onClick={() => setleagueSearch(true)}
          >
            <span> Search Leagues </span>
            <FaChevronRight size={12} />
          </div>
        )}

{
  leaguesShow?.length!=0?<div className="space-y-3  ">
          {leaguesShow?.slice(0, 7)?.map((data, index) => {
            return (
              <div key={index}>
                <LeagueItems
                  logo={data?.league?.logo}
                  name={data?.league?.name}
                  country={data?.country?.name}
                  id={data?.league?.id}
                />
              </div>
            );
          })}
        </div>:
        <Loader/>
}
        
      </div>
    </div>
  );
};

export default Sidebar;

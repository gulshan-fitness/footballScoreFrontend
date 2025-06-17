import React, { useContext, useEffect, useRef, useState } from "react";
import { FaSearch, FaChevronRight, FaFutbol } from "react-icons/fa";
import { Context } from "../Context_holder";



const Sidebar = () => {

  const{leaguesFetch,Leagues,}=useContext(Context)
  const[ regions,setregions]=useState([])
 
  const[ regionsSearch,setregionsSearch]=useState(false)
  const regionsSearchRef=useRef()
  
   const[ leagueSearch,setleagueSearch]=useState(false)
  const leagueSearchRef=useRef()

  useEffect(
    ()=>{
// leaguesFetch(`?season=${new Date().getFullYear()}`)
// leaguesFetch(`?season=${2023}`)
    },[]
  )


  
  useEffect(
    ()=>{

      if(regionsSearchRef.current.value || leagueSearchRef.current.value){

        const findedregion= Leagues.find(d=>d?.country?.name== data?.country?.regionsSearchRef.current.value)

      }

      const newarr=[]
     

Leagues?.map(
  (data)=>{

  const finddata=  newarr?.find(d=>d?.country?.name== data?.country?.name)

  
 if(!finddata &&data?.country?.name!="World") newarr.push(data)


  }
)


 setregions(newarr) 


    },[Leagues]
  )


  console.log(Leagues?.length);
  
  return (
    <div className=" border border-purple-700 shadow-[0_0_12px_rgba(128,0,255,0.6)] text-white min-h-screen p-4 rounded-md ">
      {/* Search */}

   

      {/* Region */}
      <div className="mb-8">

        {
          regionsSearch?   <div className="mb-6 flex  items-center gap-2">
        <div className="flex items-center border border-purple-700  bg-black   p-2 rounded-xl shadow-inner">
          <FaSearch className="text-white mr-2" />
          <input
            type="text"
            placeholder="Search"
            ref={regionsSearchRef}
            className="bg-transparent text-sm text-white placeholder-white focus:outline-none w-full"
          />
        </div>
        <button className="text-xl"  onClick={()=>setregionsSearch(false)}>x</button>
      </div>:

        <div className="flex  cursor-pointer items-center justify-between text-xs tracking-wide text-white uppercase mb-3 px-1" onClick={()=>setregionsSearch(true)}>
          <span>Region</span>
          <FaChevronRight size={12} />
        </div>
        }
      

        <div className="space-y-2">

          {
            regions?.slice(0,7)?.map(
              (data,index)=>{
                return(
  <div  key={index}>

<SidebarItem flag={data?.country?.flag} label={data?.country?.name} />

                </div>
                )
              
              }
            )
          }
          
        
        </div>
      </div>

      {/* Teams */}
      <div>
           {
          leagueSearch?   <div className="mb-6 flex  items-center gap-2">
        <div className="flex items-center border border-purple-700  bg-black   p-2 rounded-xl shadow-inner">
          <FaSearch className="text-white mr-2" />
          <input
            type="text"
            placeholder="Search"
            ref={leagueSearchRef}
            className="bg-transparent text-sm text-white placeholder-white focus:outline-none w-full"
          />
        </div>
        <button className="text-xl"  onClick={()=>setleagueSearch(false)}>x</button>
      </div>:

        <div className="flex  cursor-pointer items-center justify-between text-xs tracking-wide text-white uppercase mb-3 px-1" onClick={()=>setleagueSearch(true)}>
          <span>Leagues</span>
          <FaChevronRight size={12} />
        </div>
        }

        <div className="space-y-3">

          {
            Leagues?.slice(0,7)?.map(
              (data,index)=>{
                return(                <div  key={index}>
  <TeamItem
            logo={data?.league?.logo}
            name={data?.league?.name}
            country={data?.country?.name}
          />

                </div>)

              }
            )
          }
         
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ flag, label }) => (
  <div className="bg-neutral-800/70 hover:bg-neutral-700/70 shadow-gray-50  p-1 px-3 rounded-lg flex items-center gap-2 cursor-pointer text-sm transition-all shadow-sm hover:scale-[1.02]">
<img src={flag} alt="" className="w-5 " />
    <span className="truncate w-full font-light">{label}</span>
  </div>
);

const TeamItem = ({ logo, name, country }) => (
  <div className="bg-neutral-800/70 hover:bg-neutral-700/70 shadow-gray-50 p-1 px-3 rounded-lg flex items-center gap-3 cursor-pointer shadow-sm transition-all hover:scale-[1.02]">
    <img
      src={logo}
      alt={name}
      className="w-7 h-7 object-contain rounded-full shadow-md"
    />
    <div className="min-w-0">
      <div className="text-sm font-medium truncate text-white">{name}</div>
      <div className="text-xs text-gray-400 truncate">{country}</div>
    </div>
  </div>
);

export default Sidebar;

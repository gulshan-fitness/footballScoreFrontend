



import React, { useContext } from "react";
import PitchUi from "./PicthUi";

import MatchSubstutions from "./MatchSubstutions";
import { Context } from "../Context_holder";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader";

// ✅ Reusable Player Bubble Component

const PlayerBubble = ({ number, name, color = "black", textColor = "white",id,season }) => (
  <Link to={`/player/${id}/${season}/info`} className="flex flex-col items-center text-center w-[20%] sm:w-[10%]">
    <div className={`w-7 h-7 rounded-full bg-${color} text-${textColor} flex items-center justify-center font-bold`}>
      <span>{number}</span>
    </div>
    <p className={` text-[9px]  text-white max-w-[64px] leading-tight  `}>{name}</p>
  </Link>
);

export default function LineupsWithPitch() {

    const{ particulerMatch}=useContext(Context)
    const{season}=useParams()
    
  
    const homeTeam =particulerMatch&&  particulerMatch?.lineups?.find(d=>d?.team?.id== particulerMatch?.teams?.home?.id ) 
    
    

    const awayTeam =particulerMatch&& particulerMatch?.lineups?.find(d=>d?.team?.id== particulerMatch?.teams?.away?.id )   
         

const sortByGrid = (a, b) => {
  const [, colA] = a?.player?.grid?.split(':')?.map(Number);
  const [, colB] = b?.player?.grid?.split(':')?.map(Number);
  return colA - colB;
};

const homeplayers = {
  goalkeeper: homeTeam?.startXI?.find(d => d.player.pos === "G"),
  defenders: homeTeam?.startXI?.filter(d => d.player.pos === "D").sort(sortByGrid),
  midfielders: homeTeam?.startXI?.filter(d => d.player.pos === "M").sort(sortByGrid),
  forwards: homeTeam?.startXI?.filter(d => d.player.pos === "F").sort(sortByGrid),
  substitutes: homeTeam?.substitutes,
  coach: homeTeam?.coach,
  formation:homeTeam?.formation
};

const awayplayers = {
  goalkeeper: awayTeam?.startXI?.find(d => d.player.pos === "G"),
  defenders: awayTeam?.startXI?.filter(d => d.player.pos === "D").sort(sortByGrid),
  midfielders: awayTeam?.startXI?.filter(d => d.player.pos === "M").sort(sortByGrid),
  forwards: awayTeam?.startXI?.filter(d => d.player.pos === "F").sort(sortByGrid),
  substitutes: awayTeam?.substitutes,
  coach: awayTeam?.coach,
  formation:awayTeam?.formation
};







  return (
    <div className="w-full mt-6 ">
      {
         particulerMatch?.lineups?.length!=0 ?
         <div className="max-w-md mx-auto relative mb-2 h-[700px] sm:h-[800px]">
              <PitchUi />
{/*hometeam coach */}
<p className="absolute top-2 left-4 w-[120px] truncate font-semibold uppercase text-[black] leading-tight text-[9px]">
  {homeplayers?.coach?.name}
  <p> ( {homeplayers?.formation})</p>

  </p>

      {/* HOME TEAM */}
      <div className="absolute top-3 w-full flex justify-center">
        <PlayerBubble
          number={homeplayers?.goalkeeper?.player?.number}
          name={homeplayers?.goalkeeper?.player?.name}
          id={homeplayers?.goalkeeper?.player?.id}
          season={season}
        />
      </div>

      <div className="absolute top-[80px] w-full flex justify-between px-2">
        {homeplayers?.defenders?.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name}
          id={p.player.id} 
           season={season}
          
          />
        ))}
      </div>

      <div className="absolute top-[180px] w-full flex justify-between px-2">
        {homeplayers?.midfielders?.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name} 
            id={p.player.id} 
             season={season}
          />
        ))}
      </div>

      <div className="absolute top-[280px] w-full flex justify-between px-2">
        {homeplayers?.forwards?.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name}
            id={p.player.id} 
             season={season}
          />
        ))}
      </div>

      {/* AWAY TEAM */}
      <div className="absolute bottom-[280px] w-full flex justify-between px-2">
        {awayplayers?.forwards?.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name}
            id={p.player.id} 
             season={season}
          color="white" textColor="black" />
        ))}
      </div>

      <div className="absolute bottom-[180px] w-full flex justify-between px-2">
        {awayplayers?.midfielders?.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name} 
            id={p.player.id} 
             season={season}
          color="white" textColor="black" />
        ))}
      </div>

      <div className="absolute bottom-[80px] w-full flex justify-between px-2">

        {awayplayers?.defenders?.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name} 
            id={p.player.id} 
             season={season}
          color="white" textColor="black" />
        ))}

      </div>

      <div className="absolute bottom-2 w-full flex justify-center">
        <PlayerBubble
          number={awayplayers?.goalkeeper?.player?.number}
          name={awayplayers?.goalkeeper?.player?.name}
          id={awayplayers?.goalkeeper?.player?.id}
           season={season}
          color="white"
          textColor="black"
        />
      </div>


      {/*awayteam coach */}
<p className="absolute bottom-2 left-4 w-[120px] truncate text-black font-semibold uppercase leading-tight text-[9px]">{awayplayers?.coach?.name} 
    <p> ( {awayplayers?.formation})</p>
</p>

      </div>:<Loader   message={"lineups not available"}/>
      }
      
{
   particulerMatch?.lineups?.length!=0 ?<MatchSubstutions homeTeam={homeTeam??null} awayTeam={awayTeam??null} />:<Loader   message={"lineups not available"}/>
}



      

    </div>


  );
}

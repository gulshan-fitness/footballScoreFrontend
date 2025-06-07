



import React from "react";
import PitchUi from "./PicthUi";
  import { FaArrowUp, FaFutbol } from 'react-icons/fa';
import MatchSubstutions from "./MatchSubstutions";

// ✅ Reusable Player Bubble Component

const PlayerBubble = ({ number, name, color = "black", textColor = "white" }) => (
  <div className="flex flex-col items-center text-center w-[20%] sm:w-[10%]">
    <div className={`w-7 h-7 rounded-full bg-${color} text-${textColor} flex items-center justify-center font-bold`}>
      <span>{number}</span>
    </div>
    <p className={` text-[9px]  text-white max-w-[64px] leading-tight  `}>{name}</p>
  </div>
);

export default function LineupsWithPitch() {
  
    const homeTeam = {
        team: {
          id: 85,
          name: "Paris Saint-Germain",
          logo: "https://media.api-sports.io/football/teams/85.png",
          colors: {
            player: {
              primary: "red",
              number: "white",
              border: "blue"
            },
            goalkeeper: {
              primary: "black",
              number: "white"
            }
          }
        },
        formation: "4-3-3",
        startXI: [
          { player: { id: 12345, name: "Gianluigi Donnarumma", number: 1, pos: "G", grid: "1:1", photo: "https://media.api-sports.io/football/players/12345.png" } },
          { player: { id: 12346, name: "Achraf Hakimi", number: 2, pos: "D", grid: "2:4", photo: "https://media.api-sports.io/football/players/12346.png" } },
          { player: { id: 12347, name: "Marquinhos", number: 5, pos: "D", grid: "2:3", photo: "https://media.api-sports.io/football/players/12347.png" } },
          { player: { id: 12348, name: "Milan Skriniar", number: 37, pos: "D", grid: "2:2", photo: "https://media.api-sports.io/football/players/12348.png" } },
          { player: { id: 12349, name: "Nuno Mendes", number: 25, pos: "D", grid: "2:1", photo: "https://media.api-sports.io/football/players/12349.png" } },
          { player: { id: 12350, name: "Vitinha", number: 17, pos: "M", grid: "3:3", photo: "https://media.api-sports.io/football/players/12350.png" } },
          { player: { id: 12351, name: "Manuel Ugarte", number: 4, pos: "M", grid: "3:2", photo: "https://media.api-sports.io/football/players/12351.png" } },
          { player: { id: 12352, name: "Warren Zaïre-Emery", number: 33, pos: "M", grid: "3:1", photo: "https://media.api-sports.io/football/players/12352.png" } },
          { player: { id: 12353, name: "Ousmane Dembélé", number: 10, pos: "F", grid: "4:3", photo: "https://media.api-sports.io/football/players/12353.png" } },
          { player: { id: 12354, name: "Kylian Mbappé", number: 7, pos: "F", grid: "4:2", photo: "https://media.api-sports.io/football/players/12354.png" } },
          { player: { id: 12355, name: "Bradley Barcola", number: 29, pos: "F", grid: "4:1", photo: "https://media.api-sports.io/football/players/12355.png" } }
        ],
        substitutes: [
          { 
            player: { id: 12356, name: "Keylor Navas", number: 16, pos: "G", photo: "https://media.api-sports.io/football/players/12356.png" } },
          { player: { id: 12357, name: "Presnel Kimpembe", number: 3, pos: "D", photo: "https://media.api-sports.io/football/players/12357.png" } },
          { player: { id: 12358, name: "Fabian Ruiz", number: 8, pos: "M", photo: "https://media.api-sports.io/football/players/12358.png" } },
          { player: { id: 12359, name: "Marco Asensio", number: 11, pos: "F", photo: "https://media.api-sports.io/football/players/12359.png" } },
          { player: { id: 12360, name: "Gonçalo Ramos", number: 9, pos: "F", photo: "https://media.api-sports.io/football/players/12360.png" } }
        ],
        coach: {
          id: 1001,
          name: "Luis Enrique",
          photo: "https://media.api-sports.io/football/coachs/1001.png"
        }
      }
    const awayTeam =   {
        team: {
          id: 86,
          name: "Inter",
          logo: "https://media.api-sports.io/football/teams/86.png",
          colors: {
            player: {
              primary: "blue",
              number: "black",
              border: "black"
            },
            goalkeeper: {
              primary: "green",
              number: "black"
            }
          }
        },
        formation: "3-5-2",
        startXI: [
          { player: { id: 22345, name: "Yann Sommer", number: 1, pos: "G", grid: "1:1", photo: "https://media.api-sports.io/football/players/22345.png" } },
          { player: { id: 22346, name: "Benjamin Pavard", number: 28, pos: "D", grid: "2:3", photo: "https://media.api-sports.io/football/players/22346.png" } },
          { player: { id: 22347, name: "Francesco Acerbi", number: 15, pos: "D", grid: "2:2", photo: "https://media.api-sports.io/football/players/22347.png" } },
          { player: { id: 22348, name: "Alessandro Bastoni", number: 95, pos: "D", grid: "2:1", photo: "https://media.api-sports.io/football/players/22348.png" } },
          { player: { id: 22349, name: "Denzel Dumfries", number: 2, pos: "M", grid: "3:5", photo: "https://media.api-sports.io/football/players/22349.png" } },
          { player: { id: 22350, name: "Nicolò Barella", number: 23, pos: "M", grid: "3:4", photo: "https://media.api-sports.io/football/players/22350.png" } },
          { player: { id: 22351, name: "Hakan Çalhanoğlu", number: 20, pos: "M", grid: "3:3", photo: "https://media.api-sports.io/football/players/22351.png" } },
          { player: { id: 22352, name: "Henrikh Mkhitaryan", number: 22, pos: "M", grid: "3:2", photo: "https://media.api-sports.io/football/players/22352.png" } },
          { player: { id: 22353, name: "Federico Dimarco", number: 32, pos: "M", grid: "3:1", photo: "https://media.api-sports.io/football/players/22353.png" } },
          { player: { id: 22354, name: "Marcus Thuram", number: 9, pos: "F", grid: "4:2", photo: "https://media.api-sports.io/football/players/22354.png" } },
          { player: { id: 22355, name: "Lautaro Martínez", number: 10, pos: "F", grid: "4:1", photo: "https://media.api-sports.io/football/players/22355.png" } }
        ],
        substitutes: [
          { player: { id: 22356, name: "Emil Audero", number: 12, pos: "G", photo: "https://media.api-sports.io/football/players/22356.png" } },
          { player: { id: 22357, name: "Stefan de Vrij", number: 6, pos: "D", photo: "https://media.api-sports.io/football/players/22357.png" } },
          { player: { id: 22358, name: "Davy Klaassen", number: 14, pos: "M", photo: "https://media.api-sports.io/football/players/22358.png" } },
          { player: { id: 22359, name: "Kristjan Asllani", number: 21, pos: "M", photo: "https://media.api-sports.io/football/players/22359.png" } },
          { player: { id: 22360, name: "Alexis Sánchez", number: 70, pos: "F", photo: "https://media.api-sports.io/football/players/22360.png" } }
        ],
        coach: {
          id: 2001,
          name: "Simone Inzaghi",
          photo: "https://media.api-sports.io/football/coachs/2001.png"
        }
      }

const sortByGrid = (a, b) => {
  const [, colA] = a.player.grid.split(':').map(Number);
  const [, colB] = b.player.grid.split(':').map(Number);
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
      <div className="max-w-md mx-auto relative mb-2 h-[700px] sm:h-[800px]">
              <PitchUi />
{/*hometeam coach */}
<p className="absolute top-2 left-4  font-semibold uppercase text-[black] leading-tight text-[9px]">
  {homeplayers?.coach?.name}
  <p> ( {homeplayers?.formation})</p>

  </p>

      {/* HOME TEAM */}
      <div className="absolute top-3 w-full flex justify-center">
        <PlayerBubble
          number={homeplayers?.goalkeeper?.player?.number}
          name={homeplayers?.goalkeeper?.player?.name}
        />
      </div>

      <div className="absolute top-[80px] w-full flex justify-between px-2">
        {homeplayers.defenders.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name} />
        ))}
      </div>

      <div className="absolute top-[180px] w-full flex justify-between px-2">
        {homeplayers.midfielders.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name} />
        ))}
      </div>

      <div className="absolute top-[280px] w-full flex justify-between px-2">
        {homeplayers.forwards.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name} />
        ))}
      </div>

      {/* AWAY TEAM */}
      <div className="absolute bottom-[280px] w-full flex justify-between px-2">
        {awayplayers.forwards.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name} color="white" textColor="black" />
        ))}
      </div>

      <div className="absolute bottom-[180px] w-full flex justify-between px-2">
        {awayplayers.midfielders.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name} color="white" textColor="black" />
        ))}
      </div>

      <div className="absolute bottom-[80px] w-full flex justify-between px-2">

        {awayplayers.defenders.map((p, i) => (
          <PlayerBubble key={i} number={p.player.number} name={p.player.name} color="white" textColor="black" />
        ))}

      </div>

      <div className="absolute bottom-2 w-full flex justify-center">
        <PlayerBubble
          number={awayplayers?.goalkeeper?.player?.number}
          name={awayplayers?.goalkeeper?.player?.name}
          color="white"
          textColor="black"
        />
      </div>


      {/*awayteam coach */}
<p className="absolute bottom-2 left-4 text-black font-semibold uppercase leading-tight text-[9px]">{awayplayers?.coach?.name} 
    <p> ( {awayplayers?.formation})</p>
</p>

      </div>

<MatchSubstutions homeTeam={homeTeam} awayTeam={awayTeam} />

      

    </div>


  );
}

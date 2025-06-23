import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context_holder";
import { useParams } from "react-router-dom";
import Loader from "../Loader";


const newsData = {
  results: 2,
  response: [
    {
      id: 201,
      team_id: 25543,
      title: "Wales Women announce new coach",
      content:
        "Wales Women appointed a new coach ahead of the UEFA Nations League.",
      source: "BBC Sport",
      link: "https://www.bbc.com/sport/football/xxxxxxx",
      date: "2025-06-01T10:00:00+00:00",
    },
    {
      id: 202,
      team_id: 25543,
      title: "Wales Women training camp update",
      content:
        "Latest updates from Wales Women’s training camp as they prepare for upcoming matches.",
      source: "Sky Sports",
      link: "https://www.skysports.com/football/xxxxxxx",
      date: "2025-06-03T15:30:00+00:00",
    },
  ],
};


// GET https://api-football-v1.p.rapidapi.com/v3/fixtures/news?fixture=1410623
// Headers:
//   X-RapidAPI-Key: your_api_key
//   X-RapidAPI-Host: api-football-v1.p.rapidapi.com


const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};






export default function MatchNews( ) {

     const{MatchNews,MatchNewsFetch}=useContext(Context)

 const{id}=useParams()

     useEffect(
      ()=>{

      MatchNewsFetch(`?fixture=${id}`)
      
    },
      []
     )
      

  return (
    
    <section className="max-w-5xl mx-auto rounded-3xl shadow-2xl  text-white">

{
  MatchNews?.length!=0? <div>
        {MatchNews?.map(({ id, title, content, source, link, date }) => (
          <article
            key={id}
            className="cursor-pointer rounded-2xl px-6 py-2 border border-purple-700/60
              shadow-lg hover:shadow-[0_0_40px_rgba(128,0,255,0.4)]
        transition-all duration-500 ease-in-out mb-3
             "
            onClick={() => window.open(link, "_blank")}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && window.open(link, "_blank")}
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 drop-shadow-lg">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-5 line-clamp-4 text-xs sm:text-sm md:text-base lg:text-lg">
              {content}
            </p>

            <div className="flex justify-between items-center  text-[9px] sm:text-xs md:text-sm italic font-light tracking-wide">
              <span className="text-sm text-blue-500">{source}</span>
              <time dateTime={date} className=" text-[orange]">{formatDate(date)}</time>
            </div>
          </article>
        ))}
      </div>:<Loader message={"News not available"}/>
}

     


    </section>
  );
}

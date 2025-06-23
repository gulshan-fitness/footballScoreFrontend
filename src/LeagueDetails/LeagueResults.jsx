import React, { useContext, useState } from 'react'
import FixtureCard from './FixtureCard';
import { Context } from '../Context_holder';
import Loader from '../Loader';

export default function LeagueResults() {

  const{ Matches }=useContext(Context)

  const PAGE_SIZE=10
const [page, setPage] = useState(1);

  const visibleMatches=  Matches?.slice(0,PAGE_SIZE*page)
    
       // GET https://v3.football.api-sports.io/fixtures?league=203&season=2025&past=100




   return (
    <>
    {Matches?.length!=0?
       <div>
      {
         visibleMatches?.map(
             (data,index)=><div key={index} className='my-2'>

<FixtureCard  match={data}/>

             </div>
             
             
            
         )
      
         
         }
         
                              {visibleMatches?.length < Matches?.length && (
      <button
        onClick={() => setPage(page + 1)}
        className="my-4 px-4 block  text-sm mx-auto py-1 shadow-md backdrop-blur-md hover:shadow-[0_0_12px_rgba(128,0,255,0.6)]
              transition-shadow duration-500  border  rounded-md text-white"
      >
        Load More...
      </button>
    )}
         </div>:
         
        <Loader  message={"Matches not available"}/>
    }
    </>
    
   )
}

import React from 'react'

export default function CountryItems({ flag, label,setSelectedCountry ,setleagueSearchValue}) {
  return (
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
  )
}

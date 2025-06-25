import React from 'react'

export default function Donut({ label, val1, val2, color1, color2 }) {
 const radius = 14;
  const stroke = 4;
  const size = radius * 2 + stroke * 2;
  const circ = 2 * Math.PI * radius;

  const total = Math.max(val1 + val2, 1); // Prevent divide by 0
  const arc1 = (val1 / total) * circ;
  const arc2 = (val2 / total) * circ;

  return (
    <div className="flex flex-col items-center w-[60px] text-[9px]">
      <div className="relative w-[60px] h-[60px]">
        <svg viewBox={`0 0 ${size} ${size}`} className="absolute">
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#333"
            strokeWidth={stroke}
          />
          {/* Red Arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color1}
            strokeWidth={stroke}
            strokeDasharray={`${arc1} ${circ - arc1}`}
            strokeDashoffset={0}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
          {/* Blue Arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color2}
            strokeWidth={stroke}
            strokeDasharray={`${arc2} ${circ - arc2}`}
            strokeDashoffset={-arc1}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        {/* Values inside */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[11px] font-semibold leading-tight">
          <span className="text-red-500">{val1}</span>
          <span className="text-blue-400">{val2}</span>
        </div>
      </div>
      <div className="text-center text-[10px] uppercase">{label}</div>
    </div>
  );
}

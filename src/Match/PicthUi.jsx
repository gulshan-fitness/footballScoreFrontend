export default function PitchUi() {
  return (
    <div className="relative w-full h-full bg-green-600 border-[6px] border-green-600 mx-auto overflow-hidden">
      {/* Full pitch outline */}
      <div className="absolute inset-0 border-[2px] border-gray-300" />

      {/* Mid line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 transform -translate-y-1/2" />

      {/* Center circle */}
      <div className="absolute top-1/2 left-1/2 w-[80px] h-[80px] border-[2px] border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[6px] h-[6px] bg-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

      {/* Top penalty box */}
      <div className="absolute top-0 left-1/2 w-[180px] h-[60px] border-[2px] border-gray-300 border-t-0 transform -translate-x-1/2" />
      {/* Top 6-yard box */}
      <div className="absolute top-0 left-1/2 w-[80px] h-[20px] border-[2px] border-gray-300 border-t-0 transform -translate-x-1/2" />
      {/* Top arc */}
      <div className="absolute top-[60px] left-1/2 w-[100px] h-[50px] border-t-[2px] border-gray-300 rounded-b-full transform -translate-x-1/2" />

      {/* Bottom penalty box */}
      <div className="absolute bottom-0 left-1/2 w-[180px] h-[60px] border-[2px] border-gray-300 border-b-0 transform -translate-x-1/2" />
      {/* Bottom 6-yard box */}
      <div className="absolute bottom-0 left-1/2 w-[80px] h-[20px] border-[2px] border-gray-300 border-b-0 transform -translate-x-1/2" />
      {/* Bottom arc */}
      <div className="absolute bottom-[60px] left-1/2 w-[100px] h-[50px] border-b-[2px] border-gray-300 rounded-t-full transform -translate-x-1/2" />

      {/* Top corners */}
      <div className="absolute top-0 left-0 w-[20px] h-[20px] border-l-[2px] border-t-[2px] border-gray-300 rounded-tl-full" />
      <div className="absolute top-0 right-0 w-[20px] h-[20px] border-r-[2px] border-t-[2px] border-gray-300 rounded-tr-full" />

      {/* Bottom corners */}
      <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-l-[2px] border-b-[2px] border-gray-300 rounded-bl-full" />
      <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-r-[2px] border-b-[2px] border-gray-300 rounded-br-full" />
    </div>
  );
}

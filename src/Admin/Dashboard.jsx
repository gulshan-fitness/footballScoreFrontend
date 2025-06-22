import React, { useContext, useState } from "react";
import { FaUser, FaPuzzlePiece } from "react-icons/fa";
import { MdFunctions } from "react-icons/md";
import { Context } from "../Context_holder";

export default function Dashboard() {

  const { CrosswordPuzzleFetch } = useContext(Context);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const stats = [

    { title: "Total Users", value: 320, icon: <FaUser /> },

  ];

  return (
    <div className="min-h-screen flex bg-black text-white font-sans">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 md:hidden z-30"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <main className="p-6 sm:p-10 flex-1 w-full overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6 text-white">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {stats.map((s, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black to-gray-900 border border-white/30 rounded-2xl shadow-lg shadow-white/10 px-6 py-3 transition transform hover:scale-105 hover:shadow-xl hover:shadow-white/30 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-white">{s?.icon}</div>
                  <div>
                    <p className="text-sm text-white/80">{s?.title}</p>
                    <p className="text-2xl font-bold text-white">{s?.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

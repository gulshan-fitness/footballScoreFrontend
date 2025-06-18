import React, { useEffect, useState } from "react";

const Loader = () => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col  items-center w-full h-full p-10">
      <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      
      {showError && (
        <p className="mt-4 text-red-500 text-center text-sm font-medium animate-pulse">
          ⚠️ Network issue: Please check your internet connection.
        </p>
      )}
    </div>
  );
};

export default Loader;

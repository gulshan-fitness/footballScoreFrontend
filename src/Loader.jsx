import React, { useState,useEffect } from "react";
import { memo } from "react";


const Loader = ({message}) => {
  

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true);
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col  items-center w-full h-full p-10">
     
      
      {showError ?
        <p className="mt-4 text-red-500 text-center capitalize text-sm font-medium animate-pulse">
       
         {message}
        
          
        </p>: <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      }
    </div>
  );
};

export default memo(Loader);

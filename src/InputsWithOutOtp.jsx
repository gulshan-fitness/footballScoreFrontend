import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputsWithOutOtp({ handleSubmit, loginMethod, phone, setPhone }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {loginMethod === "email" && (
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1 text-[#ffffff]">
            Email
          </label>
          <input 
            type="email" 
            name="email" 
            className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-[#ffffff] focus:outline-none border-[#ffffff] bg-black placeholder:text-[#ffffff] text-[#ffffff] text-xs sm:text-sm" 
            placeholder="Enter your email" 
            required 
          />
        </div>
      )}

      {loginMethod === "phone" && (
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1 text-[#ffffff]">
            Phone Number
          </label>
          <div className="custom-phone-input">
            <PhoneInput
              placeholder="Phone Number"
              value={phone}
              onChange={setPhone}
              defaultCountry="IN"
              className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-[#ffffff] focus:outline-none border-[#ffffff] bg-black text-[#ffffff] placeholder:text-[#ffffff] text-xs sm:text-sm"
            />
          </div>
        </div>
      )}

      <div className="relative">
        <label className="block text-xs sm:text-sm font-medium mb-1 text-[#ffffff]">
          Password
        </label>
        <input 
          type={showPassword ? "text" : "password"}
          name="password"
          className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-[#ffffff] focus:outline-none border-[#ffffff] bg-black placeholder:text-[#ffffff] text-[#ffffff] text-xs sm:text-sm" 
          placeholder="Enter your password" 
          required 
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-[60%] right-3 text-[#ffffff] cursor-pointer"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>

      <button 
        type="submit" 
        className="w-full py-2 sm:py-3 px-4 rounded-md text-black bg-[#ffffff] hover:bg-opacity-90 text-xs sm:text-sm font-semibold"
      >
        Login
      </button>
    </form>
  );
}

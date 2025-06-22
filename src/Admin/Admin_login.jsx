import React, { useContext, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../Context_holder';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Admin_login() {
  const { setadmin, setadminToken, notify } = useContext(Context);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const submitloginhandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };

    axios.post(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_ADMIN_URL}login`, data)
      .then((response) => {
        notify(response.data.msg, response.data.status);
        if (response.data.status === 1) {
          setadmin(response.data.admin);
          setadminToken(response.data.token);
          localStorage.setItem("admin", JSON.stringify(response.data.admin));
          localStorage.setItem("admin_token", response.data.token);
          navigate("/adminprofile");
        }
      })
      .catch(() => {});
  };

  return (
    <div className="min-h-screen flex  justify-center px-4 py-10 bg-black">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-5">
          {/* Add logo if needed */}
        </div>

        <div className="bg-black p-6 sm:p-8 rounded-md shadow-md border border-[#ffffff]">
          <div className="flex justify-center mb-4 text-[#ffffff]">
            <i className="fa-solid fa-user text-4xl sm:text-6xl"></i>
          </div>

          <h2 className="text-lg sm:text-xl font-semibold text-center uppercase text-[#ffffff] mb-6">
            Admin Login
          </h2>

          <form onSubmit={submitloginhandler} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#ffffff] mb-1">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                required
                className="w-full border rounded-md py-2 px-3 text-sm bg-black text-[#ffffff] placeholder:text-[#ffffff] border-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff]"
                placeholder="Enter your email"
              />
            </div>

            {/* Password with Eye toggle */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#ffffff] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className="w-full border rounded-md py-2 px-3 pr-10 text-sm bg-black text-[#ffffff] placeholder:text-[#ffffff] border-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff]"
                  placeholder="Enter your password"
                />
                <div
                  className="absolute inset-y-0 right-2 flex items-center cursor-pointer text-[#ffffff]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#ffffff] hover:bg-opacity-90 text-black text-sm font-semibold py-2 rounded-md transition duration-200"
            >
              Login
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

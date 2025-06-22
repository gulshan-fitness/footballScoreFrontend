import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function InputsWithOtp({
  otpSent,
  phone,
  setOtp,
  handleSendOtp,
  otp,
  handleVerifyOtp,
  setOtpSent,
  setPhone
}) {
  return (
    <div>
      {!otpSent ? (
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1 text-[#ffffff]">
            Phone Number
          </label>
          <div className="flex space-x-2">
            <div className="custom-phone-input w-full">
              <PhoneInput
                placeholder="Phone Number"
                value={phone}
                onChange={setPhone}
                defaultCountry="IN"
                className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-[#ffffff] focus:outline-none border-[#ffffff] bg-black text-[#ffffff] placeholder:text-[#ffffff] text-xs sm:text-sm"
              />
            </div>
          </div>

          <button
            onClick={handleSendOtp}
            className="w-full mt-3 py-2 sm:py-3 px-4 rounded-md text-black bg-[#ffffff] hover:bg-opacity-90 text-xs sm:text-sm font-semibold"
          >
            Send OTP
          </button>
        </div>
      ) : (
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1 text-[#ffffff]">
            Enter OTP
          </label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-[#ffffff] focus:outline-none border-[#ffffff] bg-black text-[#ffffff] placeholder:text-[#ffffff] text-xs sm:text-sm"
            placeholder="Enter OTP"
            required
          />

          <button
            onClick={handleVerifyOtp}
            className="w-full mt-3 py-2 sm:py-3 px-4 rounded-md text-black bg-[#ffffff] hover:bg-opacity-90 text-xs sm:text-sm font-semibold"
          >
            Verify OTP
          </button>

          <button
            className="font-bold text-xs sm:text-sm mt-2 text-[#ffffff]"
            onClick={() => setOtpSent(false)}
          >
            Change Number
          </button>
        </div>
      )}
    </div>
  );
}

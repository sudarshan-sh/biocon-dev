import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import "./index.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const OtpVerification = () => {
  const [OTP, setOTP] = useState("");

  return (
    <div>
      <div className="otp_inputs">
        <OTPInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
          secure
          inputClassName="otp_input_no"
          style={{ width: "53.5%", marginLeft: "7rem" }}
          placeholder="######"
        />
      </div>
      <ResendOTP
        onResendClick={() => console.log("Resend clicked")}
        className="resend_otp"
        label="resend"
      />
    </div>
  );
};

export default OtpVerification;

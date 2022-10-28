import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import personData from "../helper/data";
import "./index.css";
import OtpVerification from "./OtpVerification";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TemporaryPassModal = ({ style, setOpen, employeeDetails }) => {
  const [changeDisplay, setChangeDisplay] = useState(false);

  const changeDisplayHandler = () => {
    setChangeDisplay(true);
  };

  return (
    <Box sx={style}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{
            width: "920px",
            height: "26px",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "160%",
            letterSpacing: "0.15px",
          }}
        >
          Generate Temporary Pass
        </Typography>
        <CloseIcon
          onClick={() => setOpen(false)}
          style={{ cursor: "pointer" }}
        />
      </Box>

      <Box
        style={{
          display: "flex",
          gap: "3rem",
        }}
      >
        {/* For Validating the request */}
        <Box
          style={
            changeDisplay
              ? {
                  display: "none",
                }
              : { display: "flex" }
          }
        >
          <div className="row  my-6 visitor_det">
            <div className="w-full">
              <span className=" visitor_date">
                Please validate your request
              </span>
              <h1 className="mt-6 flex items-center verify_num">
                {/* <span className="ml-1 text-gray-500 mr-2"> */}
                Verify your number
                {/* </span> */}
              </h1>
              <p className="verify_num_code">
                Please just type in the code we just sent to +91-8373283927
              </p>
            </div>

            <OtpVerification />

            <div className="printpass_btn">
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  style={{
                    fontSize: "12px",
                  }}
                  onClick={changeDisplayHandler}
                >
                  SUBMIT CODE
                </Button>
              </Stack>
            </div>
          </div>
        </Box>

        {/* Code successfully verified */}
        <Box
          style={
            changeDisplay
              ? {
                  display: "flex",
                }
              : { display: "none" }
          }
        >
          <div className="person_scan_info1">
            <div className="face_id_info1">
              <span style={{ color: "#2E7D32" }}>
                <CheckCircleOutlineIcon />
              </span>
              <span>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "200%",
                    /* identical to box height, or 24px */

                    letterSpacing: "0.15px",
                  }}
                >
                  Code Successfully Verified
                </p>
              </span>
            </div>

            <div>
              <Stack spacing={2} direction="row">
                <Button
                  variant="text"
                  onClick={() => setOpen(false)}
                  style={{
                    cursor: "pointer",
                    padding: "1.5rem 2rem",
                  }}
                >
                  TEMPORARY PASS PRINTED SUCCESSFULLY, CLOSE SESSION
                </Button>
              </Stack>
            </div>
            <p className="pass_note">Note: Pass will be valid for {new Date().toLocaleDateString()}</p>
          </div>
        </Box>

        <div className="temp_pass_emp">
          {employeeDetails.map((person) => {
            return (
              <div className="person_info1">
                <span className="person_details1">
                  <p className="person_key1">Name: </p>{" "}
                  <p className="person_value1">{person.name}</p>
                </span>
                <span className="person_details1">
                  <p className="person_key1">Email: </p>{" "}
                  <p className="person_value1">{person.email}</p>
                </span>
                <span className="person_details1">
                  <p className="person_key1">Mob Number: </p>{" "}
                  <p className="person_value1">+91{person.mob_num}</p>
                </span>
                <hr />
                <span className="person_details1">
                  <p className="person_key1">Company: </p>{" "}
                  <p className="person_value1">{person.company}</p>
                </span>
                <span className="person_details1">
                  <p className="person_key1">Employee Code: </p>{" "}
                  <p className="person_value1">{person.employeeID}</p>
                </span>
                <span className="person_details1">
                  <p className="person_key1">Department: </p>{" "}
                  <p className="person_value1">{person.department}</p>
                </span>
                <span className="person_details1">
                  <p className="person_key1">Visitor Type: </p>{" "}
                  <p className="person_value1">{person.visitor_type}</p>
                </span>
                <hr />
                <span className="person_details1">
                  <p className="person_key1">To Meet: </p>{" "}
                  <p className="person_value1">{person.manager}</p>
                </span>
              </div>
            );
          })}
        </div>
      </Box>
    </Box>
  );
};

export default TemporaryPassModal;

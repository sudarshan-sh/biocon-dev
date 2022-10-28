import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import "./index.css";
import {
  Autocomplete,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Input,
  Radio,
  TextField,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  employeeID,
  visitingLocation,
  buildingName,
} from "../../redux/features/temporaryPass";
import SelectInput from "../AddVisit/SelectInput";
import DisableTextInput from "../AddVisit/DisableTextInput";
import SearchTextField from "../AddVisit/SearchTextField";
import EmployeeImg from "../../assets/images/employee_img.png";
import Stack from "@mui/material/Stack";
import TemporaryPassModal from "./TemporaryPassModal";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 975,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TemporaryPass = () => {
  const dispatch = useDispatch();
  const temporaryPassState = useSelector((store) => store.temporaryPass);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const locations = [
    "Biocon Campus",
    "Biocon House",
    "Biocon Park SEZ",
    "BBRC Building",
    "Semicon Park Tower 1",
    "Hyderabad",
    "Vishakapatnam Site 5",
    "Valankanni Tech Park",
    "BBRC Expansion",
    "Chennai",
    "Manglore",
    "PB Softech",
    "Biocon Arena",
  ];

  const buildingNames = [
    "Security Room",
    "Auditorium",
    "HR",
    "Admin",
    "Commercial",
    "Corporate",
    "Finance",
    "IT",
    "SCM",
    "BRM",
    "Legal",
    "IPR",
    "Cafeteria",
  ];

  const employeeDetails = [
    {
      name: "Kush Marvania",
      employeeID: "KUSH031-10022085",
      email: "kush@biocon.in",
      company: "Biocon Limited",
      department: "Biocon Limited IT-Department",
      manager: "Jessica Mathur Biocon Limited IT-Department",
      mob_num: 8373283927,
      visitor_type: "Consultant",
    },
  ];

  const employeeIDChange = (e) => {
    dispatch(employeeID());
  };
  const visitingLocationChange = (event, newInputValue) => {
    dispatch(visitingLocation(newInputValue));
  };
  const buildingNameChange = (e, newInputValue) => {
    dispatch(buildingName(newInputValue));
  };

  return (
    <div className="">
      <Sidebar />

      <div className="ml-52 md:pl-16 pr-4 pl-4 employee_temp_pass">
        <Header />

        <div className=" w-full  mt-6 text-xs ">
          <div className="row  my-6">
            <div className="w-full">
              <h4 className="text-sm font-medium ">
                Employee Forgot or Lost ID Card
              </h4>
              <h5 className="text-xs mt-2 flex items-center">
                <ArticleOutlinedIcon
                  sx={{ fontSize: "12px" }}
                  className="text-gray-500"
                />
                <span className="ml-1 text-gray-500 mr-2">Visitor Pass / </span>

                <AccountCircleOutlined sx={{ fontSize: "12px" }} />
                <span className="ml-1">Temporary Pass</span>
              </h5>
            </div>
          </div>

          {/* Radio Button */}
          <div className="flex mt-8 items-center mb-6">
            <span className="mr-5 ml-4 text-gray-500">Employee ID : </span>
            <div className="flex items-center  mx-2">
              <FormControlLabel
                value="forgot"
                checked={temporaryPassState.employeeID === "forgot"}
                onChange={employeeIDChange}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 14,
                  },
                  "& .css-ahj2mt-MuiTypography-root": {
                    fontSize: 12,
                  },
                }}
                control={<Radio />}
                label="Forgot"
                name="forgot"
              />
            </div>
            <div className="flex items-center  mx-2">
              <FormControlLabel
                value="lost"
                checked={temporaryPassState.employeeID === "lost"}
                onChange={employeeIDChange}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 14,
                  },
                  "& .css-ahj2mt-MuiTypography-root": {
                    fontSize: 12,
                  },
                }}
                control={<Radio />}
                label="Lost"
                name="lost"
              />
            </div>
          </div>

          <div className="">
            <div className="flex flex-wrap my-6">
              <div className="md:w-1/3 pr-3 w-full mb-5 md:mb-0">
                <SelectInput
                  options={locations}
                  onChange={visitingLocationChange}
                  label={"Visiting Location"}
                  value={temporaryPassState.visitingLocation}
                />
              </div>
              <div className="md:w-1/3 pr-3 w-full mb-5 md:mb-0">
                <SelectInput
                  options={buildingNames}
                  label={"Building Name"}
                  onChange={buildingNameChange}
                />
              </div>
              <div className="md:w-1/3 pr-3 w-full  md:mb-0 ">
                <DisableTextInput
                  label="Attendance Location"
                  defaultValue="Biocon House - Second Floor - IT"
                />
              </div>
            </div>

            <div className="md:my-6 my-3">
              <Divider />
            </div>

            {/* {temporaryPassState.employeeID === "forgot" && ( */}
            <div className="md:w-1/3 pr-3">
              <SearchTextField
                helperText={"Employee Login ID"}
                placeholder="Search Employee"
              />

              {/* Search Result */}
              <div className="pr-3 pl-3 my-3">
                <h6 className="text-gray-500 text-[10px]  mb-2">
                  1 record Found
                </h6>

                <div className="border-t flex items-center justify-between text-[10px] font-medium border-b text-blue-500  border-blue-500 py-1">
                  <div className="">
                    <p>KUSH031 - 10022085 - Kush Marvania</p>
                    <p>IT Department - Hybrids Labs</p>
                  </div>

                  <button>SELECT</button>
                </div>
              </div>
            </div>
            {/* )} */}

            {/* EMPLOYEE DETAILS */}
            <div className="my-6">
              <h5 className="my-3 px-3 font-semibold">Employee Details</h5>
              <div className="emp_info">
                <div className="img_container">
                  <img src={EmployeeImg} alt="emp img" className="emp_img" />
                </div>
                <div className="emp_data">
                  {employeeDetails.map((employee) => {
                    return (
                      <>
                        <div className="emp_det1">
                          <span>
                            <p>Name: </p>
                            <p>{employee.name}</p>
                          </span>
                          <span>
                            <p>Email: </p>
                            <p>{employee.email}</p>
                          </span>
                          <span>
                            <p>Department: </p>
                            <p>{employee.department}</p>
                          </span>
                        </div>
                        <div className="emp_det1">
                          <span>
                            <p>{employee.employeeID}</p>
                          </span>
                          <span>
                            <p>Company: </p>
                            <p>{employee.company}</p>
                          </span>
                          <span>
                            <p>Manager: </p>
                            <p>{employee.manager}</p>
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="printpass_btn">
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={handleOpen}>
                    PRINT PASS
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                      "& .css-1j5gk6e": {
                        padding: 1,
                        width: "1100px",
                      },
                    }}
                  >
                    <TemporaryPassModal
                      setOpen={setOpen}
                      handleOpen={handleOpen}
                      style={style}
                      employeeDetails={employeeDetails}
                    />
                  </Modal>
                </Stack>
              </div>
            </div>
          </div>

          {/* <div className="my-6">
        <Divider />
      </div> */}

          {/* <div className="flex ">
        <div className="md:w-1/3 flex justify-between pr-3">
          <div className="mr-3 w-32">
            <MultipleSelect
              label={"Country Code"}
              defaultValue={"+91"}
              items={["+91"]}
            />
          </div>

          <div className="w-full ">
            <SearchTextField placeholder={"Visitor Mobile No"} />
          </div>
        </div>

        <div className="md:w-1/3 flex">
          <span className="pr-3 pt-2">OR</span>
          <SearchTextField placeholder={"Visitor Email ID"} />
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default TemporaryPass;

import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import "./index.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "./TextField";
import CloseIcon from "@mui/icons-material/Close";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { FormControlLabel, Radio } from "@mui/material";
import TextInput from "../AddVisit/TextInput";
import SelectInput from "../AddVisit/SelectInput";
import personData from "../helper/data";
import VisitorModal from "./VisitorModal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

function createData(
  pass_num,
  mob_num,
  name,
  to_meet,
  dept,
  visit_status,
  visitor_type,
  purpose,
  visited,
  visit_from,
  visit_until
) {
  return {
    pass_num,
    mob_num,
    name,
    to_meet,
    dept,
    visit_status,
    visitor_type,
    purpose,
    visited,
    visit_from,
    visit_until,
  };
}

function generateData(si_num, name, date, type, location) {
  return {
    si_num,
    name,
    date,
    type,
    location,
  };
}

const rows = [
  createData(
    432973,
    9821114007,
    "Arjun Mehra",
    "Kush Marvania",
    "IT-Lorem Ipsum",
    "Pending",
    "Consultant",
    "Official",
    "False",
    "21-09-2022 12:00",
    "23-09-2022 17:00"
  ),
  createData(
    432973,
    9821114007,
    "KK Mehra",
    "Tim Cook",
    "IT-Lorem Ipsum",
    "Pending",
    "Trainee",
    "Official",
    "True",
    "21-09-2022 12:00",
    "23-09-2022 17:00"
  ),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const modalRows = [
  generateData(
    1,
    "Arjun Mehra",
    "21-09-2022 12:00",
    "Check-IN",
    "Biocon House-Cafeteria"
  ),
  generateData(
    2,
    "Amit Singh",
    "21-09-2022 12:00",
    "Check-OUT",
    "Biocon House-Cafeteria"
  ),
];

export default function DenseTable({
  fromDate,
  toDate,
  setFilteredVisitors,
  setVisitors,
  filteredVisitors,
  visitors,
  copyFilteredVisitors,
  setCopyFilteredVisitors,
}) {
  const [open, setOpen] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const [edit, setEdit] = useState(true);
  const [editA, setEditA] = useState(true);
  // const [visitors, setVisitors] = useState([]);
  // const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [modalData1, setModalData1] = useState([]);
  const [searched, setSearched] = useState([]);

  const handleOpen = (data) => {
    console.log(data.visitors_list);
    // fetch(`http://localhost:5000/api/viewsinglevisitor?id=${id}`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
    setModalData(data.visitors_list);
    setModalData1(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleOpenNew = () => setOpenNew(true);
  const handleCloseNew = () => setOpenNew(false);
  const changeDisplay = () => {
    setEdit(false);
  };

  const changeDisplayNew = () => {
    setEditA(false);
  };

  const requestSearchPass = (event) => {
    let filteredVisitors1 = [];
    copyFilteredVisitors.forEach((row) => {
      Object.keys(row.visitors_list).map(function (keyname, index) {
        if (
          row.visitors_list[keyname].pass_number.toString().includes(event.target.value)
        ) {
          console.log(row.visitors_list[keyname].pass_number);
          filteredVisitors1.push(row);
        }
      });
    });
    setFilteredVisitors([...filteredVisitors1]);
    // }
  };
  const requestSearchMob = (event) => {
    let filteredVisitors1 = [];
    copyFilteredVisitors.forEach((row) => {
      Object.keys(row.visitors_list).map(function (keyname, index) {
        if (
          row.visitors_list[keyname].phone_number.includes(event.target.value)
        ) {
          filteredVisitors1.push(row);
        }
      });
    });
    setFilteredVisitors([...filteredVisitors1]);
  };

  const requestSearchName = (event) => {
    let filteredVisitors1 = [];
    copyFilteredVisitors.forEach((row) => {
      Object.keys(row.visitors_list).map(function (keyname, index) {
        if (
          row.visitors_list[keyname].name.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          filteredVisitors1.push(row);
        }
      });
    });
    setFilteredVisitors([...filteredVisitors1]);
  };

  const requestSearchMeet = (event) => {
    let filteredVisitors1 = [];
    copyFilteredVisitors.forEach((row) => {
      Object.keys(row.visitors_list).map(function (keyname, index) {
        if (
          row.to_meet_employee_id.toString().includes(event.target.value)
        ) {
          filteredVisitors1.push(row);
        }
      });
    });
    setFilteredVisitors([...filteredVisitors1]);
  };

  const requestSearchDept = (event) => {
    let filteredVisitors1 = [];
    copyFilteredVisitors.forEach((row) => {
      Object.keys(row.visitors_list).map(function (keyname, index) {
        if (
          row.building_name.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          filteredVisitors1.push(row);
        }
      });
    });
    setFilteredVisitors([...filteredVisitors1]);
  };

  const requestSearchVisType = (event) => {
    let filteredVisitors1 = [];
    copyFilteredVisitors.forEach((row) => {
      Object.keys(row.visitors_list).map(function (keyname, index) {
        if (
          row.visitors_list[keyname].visitor_type.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          filteredVisitors1.push(row);
        }
      });
    });
    setFilteredVisitors([...filteredVisitors1]);
  };
  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/viewvisitors")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setVisitors(data);
  //       setFilteredVisitors(data);
  //     });
  // }, []);
  useEffect(() => {
    fetch(
      `https://8000-prabal01pat-bioconfacer-5nq1bla1xl5.ws-us73.gitpod.io/view_visitors?from_date=${new Intl.DateTimeFormat(
        "en-GB"
      ).format(fromDate)}&to_date=${new Intl.DateTimeFormat("en-GB").format(
        toDate
      )}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setVisitors(data);
        setFilteredVisitors(data);
        setCopyFilteredVisitors(data);
      });
    console.log(filteredVisitors);
  }, []);
  // for (const item of filteredVisitors) {
  //   console.log(item);
  //   for (const data of item.visitors_list) {
  //     console.log(data);
  //   }
  // }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell
              // sx={{
              //     "& .css-j651td-MuiTableCell-root": {
              //       border: 0,
              //       padding: 0,
              //     },
              //   }}
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 7px",
                width: "13%",
                border: 0,
              }}
            >
              Pass Num
            </TableCell>
            <TableCell
              align="left"
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 4px",
                width: "7%",
                border: 0,
              }}
            >
              Mob Num
            </TableCell>
            <TableCell
              align="left"
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 10px",
                border: 0,
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="left"
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 12px",
                border: 0,
              }}
            >
              To Meet
            </TableCell>
            <TableCell
              align="left"
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 2px",
                width: "8%",
                border: 0,
              }}
            >
              Department
            </TableCell>
            {/* <TableCell
              align="left"
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 1px",
                width: "8%",
                border: 0,
              }}
            >
              Visit Status
            </TableCell> */}
            <TableCell
              align="left"
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 4px",
                width: "9%",
                border: 0,
              }}
            >
              Visitor Type
            </TableCell>
            {/* <TableCell
              align="left"
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 4px",
                width: "7%",
                border: 0,
              }}
            >
              Purpose
            </TableCell> */}
            {/* <TableCell
              align="left"
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 8px",
                width: "6%",
                border: 0,
              }}
            >
              Visited
            </TableCell> */}
            <TableCell
              align="left"
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 6px",
                width: "9%",
                textAlign: "left",
                border: 0,
              }}
            >
              Visit From
            </TableCell>
            <TableCell
              align="left"
              style={{
                fontWeight: 500,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                padding: "6px 5px",
                width: "12%",
                textAlign: "left",
                border: 0,
              }}
            >
              Visit Until
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                padding: "6px 2px",
                // "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                //   width: "80px",
                //   height: "29px",
                //   padding: "6px 8px",
                //   alignItems: "center",
                //   display: "flex",
                //   flexDirection: "row",
                //   boxSizing: "border-box",
                // },
                // "& .css-xn6ruc>:not(style)": {
                //   width: 0,
                // },
                "& .css-yqjoqk-MuiTableCell-root": {},
                "& .css-v2arep-MuiFormControl-root-MuiTextField-root": {
                  width: "92%",
                },
              }}
              style={{
                border: 0,
                padding: "6px 5px",
              }}
            >
              {/* <TextField
                style={{
                  fontWeight: 500,
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontStyle: "normal",
                  padding: "6px 0",
                  width: '20px'
                }}
              >
                Pass Num
              </TextField> */}
              <TextInput placeholder="Search" onChange={requestSearchPass} />
            </TableCell>
            <TableCell
              sx={{
                padding: "6px 2px",
                "& .css-1kxbtff-MuiAutocomplete-root": {
                  width: "95%",
                  // "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  //   width: "126px",
                  //   height: "29px",
                  //   padding: "6px 8px",
                  //   alignItems: "center",
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   boxSizing: "border-box",
                },
              }}
              style={{
                border: 0,
                width: "13%",
              }}
            >
              {/* <TextField
                align="left"
                style={{
                  fontWeight: 500,
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontStyle: "normal",
                  padding: "6px 0",
                }}
              >
                Mob Num
              </TextField> */}
              <TextInput placeholder="Search" onChange={requestSearchMob} />
            </TableCell>
            <TableCell
              sx={{
                padding: "6px 2px",
                "& .css-v2arep-MuiFormControl-root-MuiTextField-root": {
                  width: "85%",
                  //   height: "29px",
                  //   padding: "6px 12px",
                  //   alignItems: "center",
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   boxSizing: "border-box",
                },
              }}
              style={{
                border: 0,
                width: "20%",
              }}
            >
              {/* <TextField
                align="left"
                style={{ fontWeight: 500, fontSize: "10px" }}
              >
                Name
              </TextField> */}
              <TextInput
                placeholder="Search"
                onChange={requestSearchName}
                // onCancelSearch={() => cancelSearch()}
              />
            </TableCell>
            <TableCell
              sx={{
                padding: "6px 2px",
                "& .css-v2arep-MuiFormControl-root-MuiTextField-root": {
                  width: "85%",
                  //   height: "29px",
                  //   padding: "6px 8px",
                  //   alignItems: "center",
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   boxSizing: "border-box",
                },
              }}
              style={{
                border: 0,
                width: "20%",
              }}
            >
              {/* <TextField
                align="right"
                style={{ fontWeight: 500, fontSize: "10px" }}
              >
                To Meet
              </TextField> */}
              <TextInput placeholder="Search" onChange={requestSearchMeet} />
            </TableCell>
            <TableCell
              sx={{
                padding: "6px 2px",
                "& .css-v2arep-MuiFormControl-root-MuiTextField-root": {
                  width: "92%",
                  //   height: "29px",
                  //   padding: "6px 8px",
                  //   alignItems: "center",
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   boxSizing: "border-box",
                },
              }}
              style={{
                border: 0,
                width: "15%",
              }}
            >
              {/* <TextField
                align="right"
                style={{ fontWeight: 500, fontSize: "10px" }}
              >
                Department
              </TextField> */}
              <TextInput placeholder="Search" onChange={requestSearchDept} />
            </TableCell>
            {/* <TableCell
              sx={{
                padding: "6px 2px",
                "& .css-aja8sj-MuiFormControl-root-MuiTextField-root": {
                  width: "92%",
                },
              }}
              style={{
                border: 0,
              }}
            >
            // Visit Status
              <SelectInput
                options={["Pending", "Completed"]}
                defaultValue={"Pending"}
              />
            </TableCell> */}
            <TableCell
              sx={{
                padding: "6px 2px",
                "& .css-aja8sj-MuiFormControl-root-MuiTextField-root": {
                  width: "92%",
                  //   height: "29px",
                  //   padding: "6px 8px",
                  //   alignItems: "center",
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   boxSizing: "border-box",
                },
              }}
              style={{
                border: 0,
              }}
            >
              {/* <TextField
                align="right"
                style={{ fontWeight: 500, fontSize: "10px" }}
              >
                Visitor Type
              </TextField> */}
              <SelectInput
                options={["Consultant", "Trainee"]}
                defaultValue={"Trainee"}
                onChange={requestSearchVisType}
              />
            </TableCell>
            {/* <TableCell
              sx={{
                padding: "6px 2px",
              }}
              style={{
                border: 0,
              }}
            >
              <SelectInput options={["Official"]} defaultValue={"Official"} />
            </TableCell>
            <TableCell
              sx={{
                padding: "6px 2px",
              }}
              style={{
                border: 0,
              }}
            >
              <SelectInput options={["true", "false"]} defaultValue={"false"} />
            </TableCell> */}
            <TableCell
              sx={{
                padding: "6px 2px",
                "& .css-aja8sj-MuiFormControl-root-MuiTextField-root": {
                  width: "92%",
                  //   height: "29px",
                  //   padding: "6px 8px",
                  //   alignItems: "center",
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   boxSizing: "border-box",
                  // },
                  // "& .css-zwvhff-MuiTableCell-root": {
                  //   padding: '6px 9px'
                },
              }}
              style={{
                border: 0,
              }}
            >
              {/* <TextField
                align="right"
                style={{ fontWeight: 500, fontSize: "10px" }}
              >
                Visit From
              </TextField> */}
              <SelectInput />
            </TableCell>
            <TableCell
              sx={{
                padding: "6px 2px",
                "& .css-aja8sj-MuiFormControl-root-MuiTextField-root": {
                  width: "92%",
                  //   height: "29px",
                  //   padding: "6px 8px",
                  //   alignItems: "center",
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   boxSizing: "border-box",
                },
              }}
              style={{
                border: 0,
              }}
            >
              {/* <TextField
                align="right"
                style={{ fontWeight: 500, fontSize: "10px" }}
              >
                Visit Until
              </TextField> */}
              <SelectInput />
            </TableCell>
          </TableRow>

          {filteredVisitors &&
            filteredVisitors.map((row) =>
              row.visitors_list.map((elem) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => handleOpen(row)}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontWeight: 400,
                      fontSize: "12px",
                      padding: "6px 15px",
                      border: 0,
                      textAlign: "left",
                    }}
                    onClick={handleOpen}
                  >
                    {/* {row.pass_num} */}
                    {elem.pass_number}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: 400,
                      fontSize: "12px",
                      padding: "6px 12px",
                      textAlign: "left",
                      width: "8%",
                      border: 0,
                    }}
                    onClick={handleOpen}
                  >
                    {/* {row.mob_num} */}
                    {elem.phone_number}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: 400,
                      fontSize: "12px",
                      padding: "6px 9px",
                      width: "18%",
                      textAlign: "left",
                      border: 0,
                    }}
                    onClick={handleOpen}
                  >
                    {/* {row.name} */}
                    {elem.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: 400,
                      fontSize: "12px",
                      padding: "6px 10px",
                      width: "15%",
                      textAlign: "left",
                      border: 0,
                    }}
                    onClick={handleOpen}
                  >
                    {/* {row.to_meet} */}
                    {row.to_meet_employee_id}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: 400,
                      fontSize: "12px",
                      padding: "6px 10px",
                      textAlign: "left",
                      width: "10%",
                      border: 0,
                    }}
                    onClick={handleOpen}
                  >
                    {/* {row.dept} */}
                    {row.building_name}
                  </TableCell>
                  {/* <TableCell
                    align="right"
                    style={{
                      fontWeight: 400,
                      fontSize: "10px",
                      padding: "6px",
                      textAlign: "center",
                      border: 0,
                      width: "9%",
                    }}
                    onClick={handleOpen}
                  >
                    {row.visit_status}
                  </TableCell> */}
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: 400,
                      fontSize: "12px",
                      padding: "6px 8px",
                      textAlign: "center",
                      border: 0,
                    }}
                    onClick={handleOpen}
                  >
                    {/* {row.visitor_type} */}
                    {elem.visitor_type}
                  </TableCell>
                  {/* <TableCell
                  align="right"
                  style={{
                    fontWeight: 400,
                    fontSize: "10px",
                    padding: "6px 15px",
                    textAlign: "center",
                    border: 0,
                  }}
                  onClick={handleOpen}
                >
                  {row.purpose}
                </TableCell> */}
                  {/* <TableCell
                  align="right"
                  style={{
                    fontWeight: 400,
                    fontSize: "10px",
                    padding: "6px 16px",
                    textAlign: "left",
                    border: 0,
                  }}
                  onClick={handleOpen}
                >
                  {row.visited}
                </TableCell> */}
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: 400,
                      fontSize: "10px",
                      padding: "6px 11px",
                      textAlign: "left",
                      width: "11%",
                      border: 0,
                    }}
                    onClick={handleOpen}
                  >
                    {row.date_of_issue}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: 400,
                      fontSize: "10px",
                      padding: "6px 10px",
                      textAlign: "left",
                      border: 0,
                    }}
                    onClick={handleOpen}
                  >
                    {/* {new Date().toLocaleDateString()} */}
                    {row.valid_until}
                  </TableCell>
                  <VisibilityIcon
                    onClick={handleOpen}
                    className="visibility-icon"
                    sx={{
                      // width: "0.75em",
                      height: "0.5em",
                    }}
                  />
                </TableRow>
              ))
            )}
        </TableBody>
      </Table>
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
        <VisitorModal
          changeDisplay={changeDisplay}
          openNew={openNew}
          setOpen={setOpen}
          setOpenNew={setOpenNew}
          setEditA={setEditA}
          edit={edit}
          editA={editA}
          handleOpen={handleOpen}
          handleCloseNew={handleCloseNew}
          handleOpenNew={handleOpenNew}
          style={style}
          modalRows={modalRows}
          changeDisplayNew={changeDisplayNew}
          data={modalData && modalData}
          data1={modalData1 && modalData1}
        />
      </Modal>
    </TableContainer>
  );
}

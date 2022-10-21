import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
import personData from "./data";
import person from "../../assets/images/person.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const VisitorModal = ({
  changeDisplay,
  openNew,
  edit,
  editA,
  handleCloseNew,
  handleOpenNew,
  style,
  setOpen,
  setOpenNew,
  setEditA,
  modalRows,
  handleOpen,
  changeDisplayNew,
}) => {
  const closeAllModal = () => {
    setOpen(false);
    setOpenNew(false);
  };
  return (
    // <Modal
    //   open={open}
    //   onClose={handleClose}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    //   sx={{
    //     "& .css-1j5gk6e": {
    //       padding: 1,
    //       width: "1100px",
    //     },
    //   }}
    // >
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
          Visitor's visit history
        </Typography>
        <CloseIcon
          onClick={() => setOpen(false)}
          style={{ cursor: "pointer" }}
        />
      </Box>
      <div className="row  my-6 visitor_det">
        <div className="w-full">
          <span className=" visitor_date">{new Date().toLocaleString()}</span>
          <h5 className="text-xs mt-2 flex items-center">
            <ArticleOutlinedIcon
              sx={{ fontSize: "10px" }}
              className="text-gray-500"
            />
            <span className="ml-1 text-gray-500 mr-2">Visitor Pass / </span>

            <VisibilityIcon sx={{ fontSize: "10px" }} />
            <span className="ml-1">View My Visitor / </span>
            <span className="ml-1 text-gray-500 mr-2">+91 98567 85432</span>
          </h5>
        </div>
      </div>
      <div className="row  my-6 visitor_det1">
        <div className="btn_update">
          {/* <div className="reset_filter"> */}
          <Stack
            spacing={2}
            direction="row"
            sx={{
              marginTop: "2rem",
            }}
          >
            <Button
              variant="contained"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",

                width: "170px",
                height: "30px",

                background: "#1976D2",

                boxShadow:
                  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",

                flex: "none",
                order: 0,
                flexGrow: 0,
              }}
            >
              <KeyboardArrowRightIcon /> UPDATE CHECK-IN
            </Button>
            <Button
              variant="contained"
              style={{
                display: "flex",
                // flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",

                width: "184px",
                height: "30px",

                background: "#1976D2",

                boxShadow:
                  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",

                flex: "none",
                order: 0,
                flexGrow: 0,
                // color: "white",
              }}
            >
              UPDATE CHECK-OUT <KeyboardArrowRightIcon />
            </Button>
          </Stack>
        </div>
        <div className="printpass_btn">
          <Stack spacing={2} direction="row">
            <Button
              onClick={handleOpenNew}
              variant="contained"
              className="print_btn"
            >
              PRINT PASS
            </Button>
          </Stack>
          <Modal
            open={openNew}
            onClose={handleCloseNew}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              "& .css-1j5gk6e": {
                padding: 1,
                width: "1100px",
              },
            }}
          >
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
                  Print Pass
                </Typography>
                <CloseIcon
                  onClick={closeAllModal}
                  style={{ cursor: "pointer" }}
                />
              </Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <Stack
                  spacing={2}
                  direction="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "155px",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "16px",
                    width: "272px",
                    height: "74px",
                    bordeRadius: "50px",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                    marginLeft: "24rem",
                  }}
                >
                  <Button
                    onClick={changeDisplay}
                    variant="contained"
                    style={
                      edit
                        ? {
                            display: "flex",
                            borderRadius: "50px",
                            height: "60px",
                            padding: "25px",
                          }
                        : { display: "none" }
                    }
                    // style={
                    //     edit ? {display: 'flex'} : {display: 'none'}
                    // }
                  >
                    START FACE RECOGNITION
                  </Button>
                </Stack>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Stack
                  spacing={2}
                  direction="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "16px",
                    width: "272px",
                    height: "74px",
                    bordeRadius: "50px",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                    marginLeft: "24rem",
                  }}
                >
                  <Button
                    variant="text"
                    style={
                      edit
                        ? {
                            display: "flex",
                            borderRadius: "50px",
                            height: "60px",
                            padding: "25px",
                          }
                        : { display: "none" }
                    }
                  >
                    CANCEL PRINT REQUEST
                  </Button>
                </Stack>
              </Typography>

              <Grid container spacing={2}>
                <Grid
                  item
                  xs={4}
                  style={edit ? { display: "none" } : { display: "flex" }}
                >
                  {/* <Item sx={{
                    "& .css-1633um2-MuiPaper-root" : {
                        display: 'contents',
                        padding: '0px'
                    }
                  }}> */}
                  <div className="img_person">
                    <img src={person} alt="person" />
                  </div>
                  {/* </Item> */}
                  <div className="scan_btn">
                    <Button
                      onClick={changeDisplayNew}
                      style={{
                        color: "white",
                        fontSize: "11px",
                        fontWeight: "300",
                      }}
                      //   style={
                      //     editA
                      //       ? {
                      //           display: "flex",
                      //           color: "white",
                      //           fontSize: "11px",
                      //           fontWeight: "300",
                      //         }
                      //       : { display: "none" }
                      //   }
                    >
                      SCANNING...
                    </Button>
                  </div>
                </Grid>

                <Grid
                  item
                  xs={7}
                  style={
                    editA
                      ? { display: "none" }
                      : {
                          display: "flex",
                          marginLeft: "5rem",
                          marginTop: "-17.5rem",
                        }
                  }
                >
                  <Item>
                    <div className="person_scan_info">
                      <div className="face_id_info">
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
                            Face ID Exists
                          </p>
                        </span>
                      </div>

                      <div
                        className="face_id_info"
                        style={{
                          marginTop: "1rem",
                        }}
                      >
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
                            Visit Information Exists
                          </p>
                        </span>
                      </div>

                      <div>
                        {personData.map((person) => {
                          return (
                            <div className="person_face_info">
                              <span className="person_details">
                                <p className="person_face_key">Visit ID: </p>{" "}
                                <p className="person_face_value">
                                  {person.visit_id}
                                </p>
                              </span>
                              <hr />
                              <span className="person_details">
                                <p className="person_face_key">Name: </p>{" "}
                                <p className="person_face_value">
                                  {person.name}
                                </p>
                              </span>
                              <span className="person_details">
                                <p className="person_face_key">Mob Number: </p>{" "}
                                <p className="person_face_value">
                                  {person.mob_num}
                                </p>
                              </span>
                              <span className="person_details">
                                <p className="person_face_key">Company: </p>{" "}
                                <p className="person_face_value">
                                  {person.company}
                                </p>
                              </span>
                              <span className="person_details">
                                <p className="person_face_key">
                                  Visitor Type:{" "}
                                </p>{" "}
                                <p className="person_face_value">
                                  {person.visitor_type}
                                </p>
                              </span>
                              <hr />
                              <span className="person_details">
                                <p className="person_face_key">To Meet: </p>{" "}
                                <p className="person_face_value">
                                  {person.to_meet}
                                </p>
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div>
                        <Stack spacing={2} direction="row">
                          <Button
                            variant="text"
                            onClick={() => setOpenNew(false)}
                            style={{ cursor: "pointer" }}
                          >
                            PASS PRINTED SUCCESSFULLY, CLOSE SESSION
                          </Button>
                        </Stack>
                      </div>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item
              sx={{
                height: "250px",
                padding: 0,
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "-10px",
                }}
              >
                <div className="flex mt-4 items-center mb-6">
                  <span className="mr-5 ml-4 text-gray-500">
                    Search by type :{" "}
                  </span>
                  <div className="flex items-center  mx-2">
                    <FormControlLabel
                      value="self"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 14,
                        },
                        "& .css-ahj2mt-MuiTypography-root": {
                          fontSize: 12,
                        },
                      }}
                      control={<Radio />}
                      label="Check-IN"
                      name="check-in"
                    />
                  </div>
                  <div className="flex items-center  mx-2">
                    <FormControlLabel
                      value="Check-IN"
                      name="check-out"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 14,
                        },
                        "& .css-ahj2mt-MuiTypography-root": {
                          fontSize: 12,
                        },
                      }}
                      control={<Radio />}
                      label="Others"
                    />
                  </div>
                </div>
                <div className="reset_filter_btn">
                  <Stack spacing={2} direction="row">
                    <Button variant="outlined">Reset</Button>
                    <Button variant="contained">Filter</Button>
                  </Stack>
                </div>
              </Box>
              <div className="rows_pages1">
                <span className="rows_per_page1">Rows per page : </span>
                <span className="select_row_per_page">
                  <SelectInput options={[5, 10, 15]} defaultValue={10} />{" "}
                </span>
                <span>1-5 of 5</span>
                <KeyboardArrowLeftIcon />
                <KeyboardArrowRightIcon />
              </div>
              <Box>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 600 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{
                            fontWeight: 500,
                            fontFamily: "Roboto",
                            fontSize: "12px",
                            fontStyle: "normal",
                            padding: "6px 12px",
                            width: "5%",
                            border: 0,
                          }}
                        >
                          SI Num
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            fontWeight: 500,
                            fontFamily: "Roboto",
                            fontSize: "12px",
                            fontStyle: "normal",
                            padding: "6px 8px",
                            width: "9%",
                            border: 0,
                          }}
                        >
                          Visitor's Name
                        </TableCell>
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
                          Date
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
                          Type
                        </TableCell>
                        <TableCell
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
                          Location
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {modalRows.map((row) => (
                        <>
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              style={{
                                fontWeight: 400,
                                fontSize: "10px",
                                padding: "6px 13px",
                                border: 0,
                              }}
                              onClick={handleOpen}
                            >
                              {row.si_num}
                            </TableCell>
                            <TableCell
                              align="right"
                              style={{
                                fontWeight: 400,
                                fontSize: "10px",
                                padding: "6px 11px",
                                width: "7%",
                                textAlign: "left",
                                border: 0,
                              }}
                              onClick={handleOpen}
                            >
                              {row.name}
                            </TableCell>
                            <TableCell
                              align="right"
                              style={{
                                fontWeight: 400,
                                fontSize: "10px",
                                padding: "6px 6px",
                                textAlign: "left",
                                width: "9%",
                                border: 0,
                              }}
                              onClick={handleOpen}
                            >
                              {row.date}
                            </TableCell>
                            <TableCell
                              align="right"
                              style={{
                                fontWeight: 400,
                                fontSize: "10px",
                                padding: "6px 7px",
                                textAlign: "left",
                                width: "7%",
                                border: 0,
                              }}
                              onClick={handleOpen}
                            >
                              {row.type}
                            </TableCell>
                            <TableCell
                              align="right"
                              style={{
                                fontWeight: 400,
                                fontSize: "10px",
                                padding: "6px 8px",
                                textAlign: "left",
                                width: "10%",
                                border: 0,
                              }}
                              onClick={handleOpen}
                            >
                              {row.location}
                            </TableCell>
                          </TableRow>
                        </>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Item>
              {personData.map((person) => {
                return (
                  <div className="person_info">
                    <span className="person_details">
                      <p className="person_key">Name: </p>{" "}
                      <p className="person_value">{person.name}</p>
                    </span>
                    <span className="person_details">
                      <p className="person_key">Mob Number: </p>{" "}
                      <p className="person_value">{person.mob_num}</p>
                    </span>
                    <span className="person_details">
                      <p className="person_key">Email: </p>{" "}
                      <p className="person_value">{person.email}</p>
                    </span>
                    <span className="person_details">
                      <p className="person_key">Government ID Type: </p>{" "}
                      <p className="person_value">{person.govtid_type}</p>
                    </span>
                    <span className="person_details">
                      <p className="person_key">Government ID Number: </p>{" "}
                      <p className="person_value">{person.govtid_number}</p>
                    </span>
                    <span className="person_details">
                      <p className="person_key">Company: </p>{" "}
                      <p className="person_value">{person.company}</p>
                    </span>
                    <span className="person_details">
                      <p className="person_key">Visit Status: </p>{" "}
                      <p className="person_value">{person.visit_status}</p>
                    </span>
                    <span className="person_details">
                      <p className="person_key">Visit ID: </p>{" "}
                      <p className="person_value">{person.visit_id}</p>
                    </span>
                    <span className="person_details">
                      <p className="person_key">Visitor Type: </p>{" "}
                      <p className="person_value">{person.visitor_type}</p>
                    </span>
                    <span className="person_details">
                      <p className="person_key">To Meet: </p>{" "}
                      <p className="person_value">{person.to_meet}</p>
                    </span>
                  </div>
                );
              })}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
    // </Modal>
  );
};

export default VisitorModal;

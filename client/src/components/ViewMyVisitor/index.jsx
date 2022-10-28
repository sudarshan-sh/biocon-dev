import React, { useState } from "react";
import "./index.css";
import Sidebar from "../Sidebar";
import Header from "../Header";
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
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
// import DateTime from "../AddVisit/DateTime";
import DatePicker from "./DatePicker";
import Stack from "@mui/material/Stack";
import DenseTable from "./DenseTable";
import { visitStatus } from "../../redux/features/viewMyVisitor";

const ViewMyVisitor = () => {
  const dispatch = useDispatch();
  const viewMyVisitorState = useSelector((store) => store.viewMyVisitor);
  const [visitStatus, setVisitStatus] = useState("visited_in");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [copyFilteredVisitors, setCopyFilteredVisitors] = useState([]);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleVisitStatus = (e) => {
    setVisitStatus(e.target.value);
  };

  const handleFromDate = (newValue) => {
    // console.log(newValue.$d);
    setFromDate(newValue);
  };
  const handleToDate = (newValue) => {
    // console.log(newValue.$d);
    setToDate(newValue);
  };

  //   const visitStatusChange = (e) => {
  //     dispatch(visitStatus());
  //   };

  const handleDateChange = () => {
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
        // console.log(data);
        setFilteredVisitors(data);
        setCopyFilteredVisitors(data);
      });
  };

  return (
    <div className="">
      <Sidebar />

      <div className="ml-48 md:pl-16 pr-4 pl-4">
        <Header />

        <div className=" w-full  mt-6 text-xs ">
          <div className="row  my-6">
            <div className="w-full">
              <h4 className="text-sm font-medium ">Display Visitors</h4>
              <h5 className="text-xs mt-2 flex items-center">
                <ArticleOutlinedIcon
                  sx={{ fontSize: "12px" }}
                  className="text-gray-500"
                />
                <span className="ml-1 text-gray-500 mr-2">Visitor Pass / </span>

                <VisibilityOutlined sx={{ fontSize: "12px" }} />
                <span className="ml-1">View My Visitor</span>
              </h5>
            </div>
          </div>

          <div className="view_table">
            <div className="my-0 mb-1 ml-3 view_table_inner">
              <div className="w-full flex mt-6 date_visitor">
                <div className="date_picker">
                  <div className="md:w-1/3 pr-3">
                    <DatePicker
                      label="FROM"
                      name={"fromDate"}
                      value={fromDate}
                      handleChange={handleFromDate}
                    />
                  </div>
                  <div className="md:w-1/3 pr-3">
                    <DatePicker
                      label="TO"
                      name={"toDate"}
                      value={toDate}
                      handleChange={handleToDate}
                    />
                  </div>
                </div>

                <div className="reset_filter">
                  <Stack spacing={2} direction="row">
                    <Button variant="outlined">Reset</Button>
                    <Button variant="contained" onClick={handleDateChange}>
                      Filter
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>

            {/* Radio Button */}

            <div className="rows_pages">
              <div className="flex  items-center">
                <span className="mr-5 ml-4 text-gray-500">Visit Status : </span>
                {/* <div className="flex items-center  mx-2">
                            <FormControlLabel
                                value="visited_in"
                                checked={viewMyVisitorState.visitStatus === "visited_in"}
                                onChange={visitStatusChange}
                                sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: 14,
                                },
                                "& .css-ahj2mt-MuiTypography-root": {
                                    fontSize: 12,
                                },
                                }}
                                control={<Radio />}
                                label="Visited in"
                                name="visited_in"
                            />
                            </div>
                            <div className="flex items-center  mx-2">
                            <FormControlLabel
                                value="visited_out"
                                checked={viewMyVisitorState.visitStatus === "visited_out"}
                                onChange={visitStatusChange}
                                sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: 14,
                                },
                                "& .css-ahj2mt-MuiTypography-root": {
                                    fontSize: 12,
                                },
                                }}
                                control={<Radio />}
                                label="Visited out"
                                name="visited_out"
                            />
                            </div>
                            <div className="flex items-center  mx-2">
                            <FormControlLabel
                                value="not_visited"
                                checked={viewMyVisitorState.visitStatus === "not_visited"}
                                onChange={visitStatusChange}
                                sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: 14,
                                },
                                "& .css-ahj2mt-MuiTypography-root": {
                                    fontSize: 12,
                                },
                                }}
                                control={<Radio />}
                                label="Not visited"
                                name="not_visited"
                            />
                            </div>
                            <div className="flex items-center  mx-2">
                            <FormControlLabel
                                value="all"
                                checked={viewMyVisitorState.visitStatus === "all"}
                                onChange={visitStatusChange}
                                sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: 14,
                                },
                                "& .css-ahj2mt-MuiTypography-root": {
                                    fontSize: 12,
                                },
                                }}
                                control={<Radio />}
                                label="All"
                                name="all"
                            />
                            </div> */}

                <div className="visit_status text-gray-500">
                  <input
                    id="visited_in"
                    name="visited_in"
                    type="radio"
                    value="visited_in"
                    onChange={handleVisitStatus}
                    checked={visitStatus === "visited_in"}
                  />
                  <label htmlFor="visited_in">Visited in</label>
                </div>
                <div className="visit_status text-gray-500">
                  <input
                    id="visited_out"
                    name="visited_out"
                    type="radio"
                    value="visited_out"
                    onChange={handleVisitStatus}
                    checked={visitStatus === "visited_out"}
                  />
                  <label htmlFor="visited_out">Visited out</label>
                </div>

                <div className="visit_status text-gray-500">
                  <input
                    id="not_visited"
                    name="not_visited"
                    type="radio"
                    value="not_visited"
                    onChange={handleVisitStatus}
                    checked={visitStatus === "not_visited"}
                  />
                  <label htmlFor="not_visited">Not Visited</label>
                </div>

                <div className="visit_status text-gray-500">
                  <input
                    id="all"
                    name="all"
                    type="radio"
                    value="all"
                    onChange={handleVisitStatus}
                    checked={visitStatus === "all"}
                  />
                  <label htmlFor="all">All</label>
                </div>
              </div>
              <span className="rows_per_page">Rows per page : </span>
            </div>

            <div className="mt-1 mb-3 w-full">
              <DenseTable
                fromDate={fromDate}
                toDate={toDate}
                visitors={visitors}
                filteredVisitors={filteredVisitors}
                copyFilteredVisitors={copyFilteredVisitors}
                setVisitors={setVisitors}
                setFilteredVisitors={setFilteredVisitors}
                setCopyFilteredVisitors={setCopyFilteredVisitors}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMyVisitor;

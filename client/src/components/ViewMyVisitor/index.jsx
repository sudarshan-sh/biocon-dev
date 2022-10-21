import React from "react";
import './index.css'
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
// import DateTime from "../AddVisit/DateTime";
import DatePicker from './DatePicker'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DenseTable from "./DenseTable";

const ViewMyVisitor = () => {
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
                                    <DatePicker label={"FROM"} current />
                                </div>
                                <div className="md:w-1/3 pr-3">
                                    <DatePicker label={"TO"} />
                                </div>
                            </div>

                            <div className="reset_filter">
                                <Stack spacing={2} direction="row">
                                    <Button variant="outlined" >Reset</Button>
                                    <Button variant="contained">Filter</Button>
                                </Stack>
                            </div>
                        </div>
                    </div>

                    <div className="rows_pages">
                        <span className="rows_per_page">Rows per page : </span>
                    </div>
                    
                    <div className="mt-1 mb-3 w-full">
                        <DenseTable  />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ViewMyVisitor;

import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Areachart from "../Areachart";

const MarketingTeam = () => {
   


  return (
    <section>
      <div className="dataanalysis-container  p-24 ">
        <div className=" grid grid-cols-2 gap-28">
          <div className="flex justify-center ">
          <Areachart/>
          </div>

          <div className=" w-4/5 ml-6 p-6">
            <div className="">
              <div className="p-4">
                <h1 className="font-bold text-4xl leading-20">
                  Overall Marketing Team Guidance
                </h1>
              </div>
              <div className="py-1 pl-4">
                <p className=" text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt eum excepturi molestias? Natus voluptatibus, iusto,
                  ut
                </p>
              </div>

              <div className="py-4 pl-4">
                <div className="flex justify-start items-center m">
                  <span>
                    <CheckCircleIcon fontSize="small" />
                  </span>
                  <p className=" text-slate-500 pl-3">All time support</p>
                </div>
                <div className="flex justify-start items-center my-3">
                  <span>
                    <CheckCircleIcon fontSize="small" />
                  </span>
                  <p className=" text-slate-500 pl-3">
                    Will give you marketing guidelines
                  </p>
                </div>
              </div>
              <div className="p-4">
                <a href="#">
                  <p className="text-blue-600 font-bold ">
                    Get started for free
                    <EastOutlinedIcon className="pl-2" />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingTeam;
